"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@/lib/sections";
import { getLenis } from "@/components/providers/smooth-scroll-provider";

export function CustomScrollbar() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    window.dispatchEvent(new Event("portfolio:navjumpstart"));

    function release() {
      window.dispatchEvent(new Event("portfolio:navjumpend"));
    }

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { onComplete: release });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      release();
    }
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 flex-col items-center md:flex lg:right-6"
    >
      {/* Track line behind the dots */}
      <div
        ref={trackRef}
        className="bg-border-hairline absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
      >
        <div
          className="bg-border-hairline-strong absolute top-0 left-0 w-px transition-[height] duration-150 ease-linear"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="relative flex flex-col gap-7">
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              aria-label={`Go to ${s.label}`}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center"
            >
              <span
                className={`font-mono absolute right-full mr-3 text-xs tracking-wide uppercase transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-brand translate-x-0 opacity-100"
                    : "text-fg-secondary pointer-events-none translate-x-2 opacity-0 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-brand bg-brand h-3.5 w-3.5"
                    : "border-border-hairline-strong bg-background group-hover:border-fg-secondary h-3 w-3"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}