"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";
import { TextReveal } from "@/components/motion/TextReveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-border-hairline relative overflow-hidden border-t px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      <div
        aria-hidden
        className="bg-brand pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full opacity-[0.05] blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer(0.12)}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand font-mono mb-4 text-xs tracking-[0.25em] uppercase"
          >
            Experience
          </motion.p>

          <TextReveal
            as="h2"
            text="Academic development and community leadership"
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          />

          <div className="relative mt-14 space-y-10 pl-8 sm:pl-10">
            {/* Timeline line — separated from border-l so it can fade out with
                a soft terminus instead of cutting off abruptly */}
            <div
              aria-hidden
              className="bg-border-hairline absolute top-1 bottom-6 left-0 w-px"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
              }}
            />
            <span
              aria-hidden
              className="border-border-hairline-strong bg-background absolute bottom-6 left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full border"
            />

            {experience.map((item, i) => {
              const Icon = getIcon(item.iconKey);
              const isCurrent = item.time.toLowerCase().includes("present");
              return (
                <motion.div key={item.role} variants={fadeUp} className="relative">
                  {/* Icon math: centered on the line at x=0 of the outer
                      container, i.e. offset = -(container padding + half of
                      the icon's own width). pl-8 (8 units) + half of w-9
                      (4.5 units) = 12.5; pl-10 (10 units) + 4.5 = 14.5. */}
                  <div className="bg-brand text-brand-foreground absolute top-0.5 -left-12.5 flex h-9 w-9 items-center justify-center rounded-full sm:-left-14.5">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-fg-primary flex items-baseline gap-2.5 text-lg font-semibold">
                      <span className="text-fg-tertiary font-mono text-xs font-normal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.role}
                    </h3>
                    <span className="text-fg-tertiary font-mono inline-flex items-center gap-1.5 text-xs">
                      {isCurrent && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="bg-brand absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-brand relative inline-flex h-1.5 w-1.5 rounded-full" />
                        </span>
                      )}
                      {item.time}
                    </span>
                  </div>
                  <p className="text-fg-secondary mt-1 text-sm">{item.org}</p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-fg-secondary flex gap-3 text-sm leading-7"
                      >
                        <span className="bg-brand mt-2.5 h-1 w-1 shrink-0 rounded-full" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}