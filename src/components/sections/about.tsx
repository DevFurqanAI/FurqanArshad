"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";
import { TextReveal } from "@/components/motion/TextReveal";

const pillars = [
  {
    index: "01",
    title: "Backend-first thinking",
    text: "I care about what happens behind the API call — authentication flows, schema design, query performance. The interface is only as good as the system underneath it.",
  },
  {
    index: "02",
    title: "Systems, not just apps",
    text: "Beyond web development, I've designed multi-city network infrastructure with OSPF routing and VLSM addressing — I like understanding how things connect at every layer.",
  },
  {
    index: "03",
    title: "Built to ship",
    text: "Affinity Hub is live in production, not a repo with a nice README — deployment, auth hardening, and moderation tooling were part of the build from day one, not an afterthought bolted on for a demo.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      <div
        aria-hidden
        className="bg-brand pointer-events-none absolute top-0 right-0 -z-10 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.05] blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand font-mono mb-4 text-xs tracking-[0.25em] uppercase"
          >
            About
          </motion.p>

          <TextReveal
            as="h2"
            text="A Computer Science student who'd rather build the hard part first."
            className="text-fg-primary max-w-3xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          />

          <motion.p
            variants={fadeUp}
            className="text-fg-secondary mt-6 max-w-2xl text-base leading-8"
          >
            I&apos;m a CS undergraduate based in Multan, Pakistan, spending most
            of my time outside coursework actually shipping things —
            full-stack web apps, desktop and database systems, and the
            occasional network diagram. Here&apos;s the short version of how
            I work:
          </motion.p>

          <div className="border-border-hairline mt-12 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-1 md:grid-cols-3">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.index}
                variants={fadeUp}
                className="bg-background hover:bg-bg-elevated p-8 transition-colors"
              >
                <span className="text-fg-tertiary font-mono text-sm">
                  {pillar.index}
                </span>
                <h3 className="text-fg-primary mt-4 text-lg font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-fg-secondary mt-3 text-sm leading-7">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}