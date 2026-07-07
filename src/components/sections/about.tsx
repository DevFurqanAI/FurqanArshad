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
    text: "Every project here is functional and deployed, not a tutorial clone. Affinity Hub is live infrastructure with real auth, real storage, and a real admin system.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 md:py-32">
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

        <div className="border-border-hairline mt-16 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.index}
              variants={fadeUp}
              className="bg-background hover:bg-bg-elevated p-8 transition-colors"
            >
              <span className="text-fg-tertiary font-mono text-xs">{pillar.index}</span>
              <h3 className="text-fg-primary mt-4 text-lg font-semibold">
                {pillar.title}
              </h3>
              <p className="text-fg-secondary mt-3 text-sm leading-7">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}