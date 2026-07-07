"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";
import { fadeUp } from "@/lib/animations";
import { TiltCard } from "@/components/motion/TiltCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp}>
      <TiltCard maxTilt={8} className="h-full">
        <article className="border-border-hairline hover:border-border-hairline-strong hover:bg-bg-elevated group flex h-full flex-col rounded-2xl border p-6 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-fg-primary text-lg font-semibold">{project.title}</h3>
            <span className="text-fg-tertiary font-mono shrink-0 text-xs">{project.year}</span>
          </div>

          <p className="text-fg-secondary mt-3 flex-1 text-sm leading-7">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.slice(0, 2).map((point) => (
              <li key={point} className="text-fg-secondary flex gap-2 text-sm leading-6">
                <span className="bg-brand mt-2 h-1 w-1 shrink-0 rounded-full" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-fg-secondary bg-bg-elevated border-border-hairline-strong group-hover:bg-background font-mono rounded-md border px-2 py-1 text-[11px] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}