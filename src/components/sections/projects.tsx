"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";
import { TextReveal } from "@/components/motion/TextReveal";
import { FeaturedProject } from "./featured-project";
import { ProjectCard } from "./project-card";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="border-border-hairline border-t px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer(0.1)}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand font-mono mb-4 text-xs tracking-[0.25em] uppercase"
          >
            Projects
          </motion.p>

          <TextReveal
            as="h2"
            text="Selected work across the stack"
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          />

          {featured && (
            <motion.div variants={fadeUp} className="mt-14">
              <FeaturedProject project={featured} />
            </motion.div>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}