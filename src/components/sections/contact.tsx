"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, socials } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, scrollViewport } from "@/lib/animations";
import { TextReveal } from "@/components/motion/TextReveal";

const Mail = getIcon("mail");
const Phone = getIcon("phone");
const MapPin = getIcon("mapPin");
const ArrowRight = getIcon("arrowRight");

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail (permissions/insecure context) — fail silently,
      // the mailto link right next to it still works as a fallback.
    }
  }

  return (
    <section
      id="contact"
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
            Contact
          </motion.p>

          <TextReveal
            as="h2"
            text="Let's build something together"
            className="text-fg-primary max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          />

          <motion.p
            variants={fadeUp}
            className="text-fg-secondary mt-4 max-w-xl text-base leading-7"
          >
            I&apos;m open to internship opportunities, collaboration, and professional
            networking. The fastest way to reach me is email.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-3">
            <button
              onClick={handleCopyEmail}
              className="border-border-hairline hover:border-border-hairline-strong hover:bg-bg-elevated group flex flex-col items-start rounded-2xl border p-6 text-left transition-colors"
            >
              <div className="bg-brand/10 text-brand flex h-10 w-10 items-center justify-center rounded-xl">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-fg-tertiary font-mono mt-4 text-xs uppercase">
                Email
              </span>
              <span className="text-fg-primary mt-1 text-sm font-medium break-all">
                {copied ? "Copied to clipboard" : contact.email}
              </span>
            </button>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="border-border-hairline hover:border-border-hairline-strong hover:bg-bg-elevated flex flex-col items-start rounded-2xl border p-6 transition-colors"
            >
              <div className="bg-brand/10 text-brand flex h-10 w-10 items-center justify-center rounded-xl">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-fg-tertiary font-mono mt-4 text-xs uppercase">
                Phone
              </span>
              <span className="text-fg-primary mt-1 text-sm font-medium">
                {contact.phone}
              </span>
            </a>

            <div className="border-border-hairline flex flex-col items-start rounded-2xl border p-6">
              <div className="bg-brand/10 text-brand flex h-10 w-10 items-center justify-center rounded-xl">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-fg-tertiary font-mono mt-4 text-xs uppercase">
                Location
              </span>
              <span className="text-fg-primary mt-1 text-sm font-medium">
                {contact.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-border-hairline mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border p-6 sm:flex-row sm:items-center"
          >
            <div className="flex gap-3">
              {socials.map(({ label, href, iconKey }) => {
                const Icon = getIcon(iconKey);
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="border-border-hairline text-fg-secondary hover:text-brand hover:border-border-hairline-strong inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="bg-brand text-brand-foreground group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              Send an email
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}