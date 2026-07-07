"use client";

import { motion } from "framer-motion";
import { education, certificates } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";

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
          <motion.h2
            variants={fadeUp}
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          >
            Academic foundation & certifications
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="border-border-hairline mt-14 rounded-2xl border p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-fg-primary text-xl font-bold">{education.degree}</h3>
                  <p className="text-fg-secondary mt-1 text-sm">{education.school}</p>
                </div>
              </div>
              <span className="text-fg-tertiary font-mono text-xs">{education.time}</span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-fg-tertiary font-mono text-xs uppercase">CGPA</p>
                <p className="text-fg-primary mt-2 text-lg font-semibold">
                  {education.cgpa}
                </p>
              </div>
              <div>
                <p className="text-fg-tertiary font-mono text-xs uppercase">Coursework</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {education.coursework.map((item) => (
                    <span
                      key={item}
                      className="bg-bg-elevated text-fg-secondary rounded-md px-2 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-fg-tertiary font-mono text-xs uppercase">Focus Areas</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
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
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="border-border-hairline hover:border-border-hairline-strong flex items-start justify-between gap-4 rounded-xl border p-4 transition-colors"
                >
                  <span className="text-fg-secondary text-sm leading-6">{cert.title}</span>
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