"use client";

import { useEffect, useRef } from "react";

interface NetworkNode {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  r: number;
  speed: number;
}

const NODE_COUNT = 22;
const EDGE_RECOMPUTE_INTERVAL_MS = 1800;
// Reference box the interaction feel was tuned against (700x420 mockup).
// Real containers are usually much larger, so every distance-based constant
// below is scaled by (actual size / reference size) rather than hardcoded,
// otherwise cursor influence feels tiny and drift feels frantic on a big Hero.
const REFERENCE_WIDTH = 700;
const REFERENCE_HEIGHT = 420;
const EDGE_DISTANCE_THRESHOLD_BASE = 170;
const MOUSE_INFLUENCE_RADIUS_BASE = 150;
const WANDER_RADIUS_BASE = 220;
const DRIFT_SPEED_MULTIPLIER = 0.55;

export function NodeNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scale factor: how much bigger/smaller this container is than the
    // reference box the interaction constants were tuned against.
    // Recomputed on resize below, so these stay mutable rather than
    // frozen at their initial mount-time values.
    let scale = (width / REFERENCE_WIDTH + height / REFERENCE_HEIGHT) / 2;
    let edgeDistanceThreshold = EDGE_DISTANCE_THRESHOLD_BASE * scale;
    let mouseInfluenceRadius = MOUSE_INFLUENCE_RADIUS_BASE * scale;
    let wanderRadius = WANDER_RADIUS_BASE * scale;

    const nodes: NetworkNode[] = Array.from({ length: NODE_COUNT }, () => {
      const x = 30 + Math.random() * (width - 60);
      const y = 20 + Math.random() * (height - 40);
      return {
        x,
        y,
        targetX: x,
        targetY: y,
        r: 2 + Math.random() * 1.8,
        speed: 0.15 + Math.random() * 0.25,
      };
    });

    function pickNewTarget(n: NetworkNode) {
      n.targetX = Math.max(
        20,
        Math.min(width - 20, n.x + (Math.random() - 0.5) * wanderRadius)
      );
      n.targetY = Math.max(
        15,
        Math.min(height - 15, n.y + (Math.random() - 0.5) * wanderRadius)
      );
    }
    nodes.forEach(pickNewTarget);

    const svgNS = "http://www.w3.org/2000/svg";
    const linesG = document.createElementNS(svgNS, "g");
    const nodesG = document.createElementNS(svgNS, "g");
    svg.appendChild(linesG);
    svg.appendChild(nodesG);

    const maxEdges = NODE_COUNT * 2;
    const lineEls: SVGLineElement[] = [];
    for (let i = 0; i < maxEdges; i++) {
      const l = document.createElementNS(svgNS, "line");
      l.setAttribute("stroke", "var(--color-brand)");
      l.setAttribute("stroke-width", "1");
      l.setAttribute("opacity", "0");
      linesG.appendChild(l);
      lineEls.push(l);
    }

    const nodeEls = nodes.map((n) => {
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("r", String(n.r));
      c.setAttribute("fill", "var(--color-brand)");
      nodesG.appendChild(c);
      return c;
    });

    let currentEdges: [number, number][] = [];
    function recomputeEdges() {
      const candidates: [number, number, number][] = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const d = Math.hypot(
            nodes[i].x - nodes[j].x,
            nodes[i].y - nodes[j].y
          );
          if (d < edgeDistanceThreshold) candidates.push([d, i, j]);
        }
      }
      candidates.sort((a, b) => a[0] - b[0]);

      const degree = new Array(NODE_COUNT).fill(0);
      const chosen: [number, number][] = [];
      for (const [, i, j] of candidates) {
        if (degree[i] < 2 && degree[j] < 2 && chosen.length < maxEdges) {
          chosen.push([i, j]);
          degree[i]++;
          degree[j]++;
        }
      }
      currentEdges = chosen;
    }
    recomputeEdges();

    const edgeInterval = prefersReducedMotion
      ? null
      : window.setInterval(recomputeEdges, EDGE_RECOMPUTE_INTERVAL_MS);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let hasMouse = false;

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * width;
      mouseY = ((e.clientY - rect.top) / rect.height) * height;
      hasMouse = true;
    }
    function handleMouseLeave() {
      hasMouse = false;
    }
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Keep dimensions/thresholds in sync with the container instead of
    // freezing them at mount — otherwise resizing the window leaves nodes
    // tuned to (and clamped against) stale bounds.
    function handleResize() {
      width = container!.clientWidth;
      height = container!.clientHeight;
      scale = (width / REFERENCE_WIDTH + height / REFERENCE_HEIGHT) / 2;
      edgeDistanceThreshold = EDGE_DISTANCE_THRESHOLD_BASE * scale;
      mouseInfluenceRadius = MOUSE_INFLUENCE_RADIUS_BASE * scale;
      wanderRadius = WANDER_RADIUS_BASE * scale;

      nodes.forEach((n) => {
        n.x = Math.max(20, Math.min(width - 20, n.x));
        n.y = Math.max(15, Math.min(height - 15, n.y));
        pickNewTarget(n);
      });
      recomputeEdges();
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let t = 0;
    let rafId: number;
    let isPaused = document.visibilityState !== "visible";

    function handleVisibilityChange() {
      isPaused = document.visibilityState !== "visible";
      if (!isPaused) {
        rafId = requestAnimationFrame(animate);
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    function animate() {
      if (isPaused) return;
      t += 0.016;

      if (!prefersReducedMotion) {
        nodes.forEach((n) => {
          const dx = n.targetX - n.x;
          const dy = n.targetY - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 4) {
            pickNewTarget(n);
          } else {
            n.x += dx * 0.01 * n.speed * 4 * DRIFT_SPEED_MULTIPLIER;
            n.y += dy * 0.01 * n.speed * 4 * DRIFT_SPEED_MULTIPLIER;
          }

          if (hasMouse) {
            const mdx = mouseX - n.x;
            const mdy = mouseY - n.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            const influence = Math.max(0, 1 - mdist / mouseInfluenceRadius);
            n.x += mdx * influence * 0.1;
            n.y += mdy * influence * 0.1;
          }
        });
      }

      nodeEls.forEach((el, i) => {
        const n = nodes[i];
        el.setAttribute("cx", n.x.toFixed(1));
        el.setAttribute("cy", n.y.toFixed(1));
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = hasMouse
          ? Math.max(0.4, 1 - dist / (200 * scale))
          : prefersReducedMotion
            ? 0.4
            : 0.4 + 0.15 * Math.sin(t * 2 + i);
        el.setAttribute("opacity", glow.toFixed(2));
      });

      lineEls.forEach((el, i) => {
        if (i >= currentEdges.length) {
          el.setAttribute("opacity", "0");
          return;
        }
        const [a, b] = currentEdges[i];
        const na = nodes[a];
        const nb = nodes[b];
        el.setAttribute("x1", na.x.toFixed(1));
        el.setAttribute("y1", na.y.toFixed(1));
        el.setAttribute("x2", nb.x.toFixed(1));
        el.setAttribute("y2", nb.y.toFixed(1));
        const midDist = hasMouse
          ? Math.min(
              Math.hypot(mouseX - na.x, mouseY - na.y),
              Math.hypot(mouseX - nb.x, mouseY - nb.y)
            )
          : 999;
        const glow = hasMouse
          ? Math.max(0.12, 0.35 - midDist / (500 * scale))
          : prefersReducedMotion
            ? 0.15
            : 0.15 + 0.08 * Math.sin(t * 1.5 + i);
        el.setAttribute("opacity", glow.toFixed(2));
      });

      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (edgeInterval) window.clearInterval(edgeInterval);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      svg.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 -z-10"
    >
      <svg ref={svgRef} width="100%" height="100%" className="absolute inset-0" />
    </div>
  );
}