"use client";

import { motion } from "framer-motion";
import { EASE_EXPO_OUT, scrollViewport } from "@/lib/animations";

// Pre-created once at module load — never created during render, since
// react-hooks/static-components flags component creation inside a
// component body even when wrapped in useMemo.
const MOTION_TAGS = {
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  h3: motion.create("h3"),
  h4: motion.create("h4"),
  p: motion.create("p"),
  span: motion.create("span"),
} as const;

type SupportedTag = keyof typeof MOTION_TAGS;

interface TextRevealProps {
  text: string;
  className?: string;
  as?: SupportedTag;
}

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

/**
 * Word-by-word reveal for headings, triggered once on scroll into view.
 * Mirrors Hero's inline RevealWords so the same "signature" motion is
 * reusable across section headings without duplicating the animation values.
 */
export function TextReveal({ text, className, as = "span" }: TextRevealProps) {
  const words = text.split(" ");
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={container}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span variants={wordVariant} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}