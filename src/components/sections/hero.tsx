"use client";

import { motion } from "framer-motion";
import { personal, contact } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { EASE_EXPO_OUT } from "@/lib/animations";
import { NodeNetwork } from "@/components/motion/NodeNetwork";
import { getLenis } from "@/components/providers/smooth-scroll-provider";

const ArrowRight = getIcon("arrowRight");
const Download = getIcon("download");
const MapPin = getIcon("mapPin");
const ChevronDown = getIcon("chevronDown");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: EASE_EXPO_OUT },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO_OUT },
  },
};

function RevealWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span variants={wordVariant} className="inline-block">
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  function scrollToAbout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("about");
    if (!el) return;

    window.dispatchEvent(new Event("portfolio:navjumpstart"));

    function release() {
      window.dispatchEvent(new Event("portfolio:navjumpend"));
    }

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: release,
      });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      release();
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <NodeNetwork />
      {/* Background texture: fine grid + soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,241,243,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,241,243,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="bg-brand pointer-events-none absolute top-1/4 left-1/2 -z-10 h-128 w-lg -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="border-border-hairline-strong bg-bg-elevated/60 inline-flex items-center gap-2 rounded-full border px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-brand absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-brand relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            <span className="text-fg-primary font-mono text-[11px] tracking-[0.15em] uppercase">
              Open to backend & full-stack internships
            </span>
          </span>

          <span className="text-fg-tertiary font-mono inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase">
            <MapPin className="h-3 w-3" />
            {contact.location}
          </span>
        </motion.div>

        <h1 className="text-fg-primary text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <RevealWords text="Muhammad Furqan" />
          <br />
          <RevealWords text="Arshad" className="text-fg-secondary" />
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-fg-secondary mt-8 max-w-2xl text-lg leading-8 sm:text-xl"
        >
          {personal.summary}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-brand text-brand-foreground group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/Muhammad_Furqan_Arshad_CV.pdf"
            download
            className="border-border-hairline-strong text-fg-primary hover:bg-bg-elevated inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        onClick={scrollToAbout}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        aria-label="Scroll to About section"
        className="text-fg-tertiary hover:text-brand absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 transition-colors md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}