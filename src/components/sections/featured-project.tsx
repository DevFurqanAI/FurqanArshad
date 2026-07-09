"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";
import { getIcon } from "@/lib/icons";
import { fadeUp } from "@/lib/animations";

const ExternalLink = getIcon("externalLink");
const Github = getIcon("github");

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="border-border-hairline bg-bg-elevated relative overflow-hidden rounded-3xl border p-8 md:p-12"
    >
      <div
        aria-hidden
        className="bg-brand pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-[0.08] blur-[100px]"
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-brand/10 text-brand font-mono rounded-full px-3 py-1 text-xs tracking-wide uppercase">
              Featured
            </span>
            {project.status && (
              <span className="text-fg-tertiary font-mono text-xs">
                {project.status}
              </span>
            )}
          </div>

          <h3 className="text-fg-primary mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h3>

          <p className="text-fg-tertiary font-mono mt-2 text-xs tracking-wide uppercase">
            {project.context}
          </p>

          <p className="text-fg-secondary mt-4 max-w-xl leading-7">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border-border-hairline-strong text-fg-secondary font-mono rounded-md border px-2.5 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links?.github && (
            <div className="mt-8 flex gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="border-border-hairline-strong text-fg-primary hover:bg-background inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand text-brand-foreground inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  Live
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <ul className="space-y-4">
          {project.highlights.map((point, i) => (
            <li key={point} className="flex items-start gap-4">
              <span className="text-brand font-mono pt-0.51 text-xs leading-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-fg-secondary text-sm leading-7">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}