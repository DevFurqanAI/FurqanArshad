"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SPRING_SOFT } from "@/lib/animations";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  hoverScale?: number; // scale applied on hover, e.g. 1.015
}

/**
 * Wraps a card and applies a 3D tilt based on cursor position within it.
 * Designed for Projects cards, but generic enough to reuse elsewhere.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 10,
  hoverScale = 1.015,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);
  const scaleVal = useMotionValue(1);

  const springRotateX = useSpring(rotateXVal, SPRING_SOFT);
  const springRotateY = useSpring(rotateYVal, SPRING_SOFT);
  const springScale = useSpring(scaleVal, SPRING_SOFT);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0–1
    const py = (e.clientY - rect.top) / rect.height; // 0–1

    // Map 0–1 to -maxTilt–+maxTilt, inverted on Y axis for natural tilt direction.
    rotateYVal.set((px - 0.5) * maxTilt * 2);
    rotateXVal.set(-(py - 0.5) * maxTilt * 2);
  };

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    scaleVal.set(hoverScale);
  };

  const handleMouseLeave = () => {
    rotateXVal.set(0);
    rotateYVal.set(0);
    scaleVal.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}