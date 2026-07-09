"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";
import { TextReveal } from "@/components/motion/TextReveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-border-hairline border-t px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer(0.08)}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.6fr] lg:gap-16"
        >
          {/* Sticky intro column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.p
              variants={fadeUp}
              className="text-brand font-mono mb-4 text-xs tracking-[0.25em] uppercase"
            >
              Skills
            </motion.p>

            <TextReveal
              as="h2"
              text="Technologies and concepts I build with"
              className="text-fg-primary max-w-md text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
            />

            <motion.p variants={fadeUp} className="text-fg-secondary mt-6 max-w-sm text-sm leading-7">
              A working toolkit spanning the full stack, plus the systems and
              CS fundamentals underneath it.
            </motion.p>
          </div>

          {/* Flowing category list — divided by hairlines, no boxed grid */}
          <div className="border-border-hairline border-t">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="border-border-hairline group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-b py-7 sm:grid-cols-[3rem_9rem_1fr] sm:gap-x-8"
              >
                <span className="text-fg-tertiary font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-fg-primary col-start-2 text-sm font-semibold">
                  {group.title}
                </h3>
                <div className="col-span-2 flex flex-wrap gap-2 sm:col-span-1 sm:col-start-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-fg-secondary bg-bg-elevated group-hover:border-border-hairline-strong border border-transparent font-mono rounded-md px-2.5 py-1 text-xs transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}