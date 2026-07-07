"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-border-hairline border-t px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
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
          <motion.h2
            variants={fadeUp}
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          >
            Academic development and community leadership
          </motion.h2>

          <div className="border-border-hairline relative mt-14 space-y-12 border-l pl-8 sm:pl-10">
            {experience.map((item) => {
              const Icon = getIcon(item.iconKey);
              return (
                <motion.div key={item.role} variants={fadeUp} className="relative">
                  <div className="bg-brand text-brand-foreground absolute top-0.5 -left-[calc(2rem+9px)] flex h-9 w-9 items-center justify-center rounded-full sm:-left-[calc(2.5rem+9px)]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-fg-primary text-lg font-semibold">{item.role}</h3>
                    <span className="text-fg-tertiary font-mono text-xs">{item.time}</span>
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