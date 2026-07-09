"use client";

import { motion } from "framer-motion";
import { education, certificates } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";
import { TextReveal } from "@/components/motion/TextReveal";

const GraduationCap = getIcon("badge");

export function Education() {
  return (
    <section
      id="education"
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
            Education
          </motion.p>

          <TextReveal
            as="h2"
            text="Academic foundation & certifications"
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          />

          <motion.div
            variants={fadeUp}
            className="border-border-hairline bg-bg-elevated/40 relative mt-14 overflow-hidden rounded-2xl border p-8"
          >
            <div
              aria-hidden
              className="bg-brand pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-[0.06] blur-[90px]"
            />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-fg-primary text-xl font-bold">{education.degree}</h3>
                  <p className="text-fg-secondary mt-1 text-sm">{education.school}</p>
                </div>
              </div>
              <span className="text-fg-tertiary font-mono shrink-0 text-xs">
                {education.time}
              </span>
            </div>

            <div className="border-border-hairline relative mt-8 grid gap-8 border-t pt-8 sm:grid-cols-[auto_1fr_1fr]">
              <div>
                <p className="text-fg-tertiary font-mono text-xs uppercase">CGPA</p>
                <p className="text-fg-primary mt-2 flex items-baseline gap-1 font-mono">
                  <span className="text-brand text-3xl font-bold tabular-nums">
                    {education.cgpa.split(" / ")[0]}
                  </span>
                  <span className="text-fg-tertiary text-sm">
                    / {education.cgpa.split(" / ")[1]}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-fg-tertiary font-mono text-xs uppercase">Coursework</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {education.coursework.map((item) => (
                    <span
                      key={item}
                      className="bg-background text-fg-secondary border-border-hairline rounded-md border px-2 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-fg-tertiary font-mono text-xs uppercase">Focus Areas</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {education.focus.map((item) => (
                    <span
                      key={item}
                      className="bg-brand/10 text-brand rounded-md px-2 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <p className="text-fg-tertiary font-mono mb-4 text-xs tracking-[0.2em] uppercase">
              Certifications
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {certificates.map((cert, i) => (
                <div
                  key={cert.title}
                  className="border-border-hairline hover:border-border-hairline-strong hover:bg-bg-elevated group flex items-start justify-between gap-4 rounded-xl border p-4 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-fg-tertiary font-mono pt-0.5 text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-fg-secondary text-sm leading-6">
                      {cert.title}
                    </span>
                  </div>
                  <span className="text-brand font-mono shrink-0 text-xs">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}