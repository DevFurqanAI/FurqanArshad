"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";

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
        >
          <motion.p
            variants={fadeUp}
            className="text-brand font-mono mb-4 text-xs tracking-[0.25em] uppercase"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          >
            Technologies and concepts I build with
          </motion.h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = getIcon(group.iconKey);
              return (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  className="border-border-hairline hover:border-border-hairline-strong rounded-2xl border p-6 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-brand/10 text-brand flex h-10 w-10 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-fg-primary font-semibold">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-fg-secondary bg-bg-elevated font-mono rounded-md px-2.5 py-1 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}