// lib/motion.ts

/**
 * Central motion configuration — the "signature feel" of the entire site.
 * Every animated component should pull from here rather than hardcoding
 * its own easing/duration/spring values. This is what makes dozens of
 * separate animations feel like one designed system.
 */

import type { Transition } from "framer-motion";

/**
 * Signature easing curve — a custom cubic-bezier "expo-out" feel.
 * Snappy start, smooth glide to rest. Used for anything entrance/exit based
 * (reveals, page transitions, non-physics-driven movement).
 */
export const EASE_SIGNATURE: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

/**
 * Spring configs — used for anything that should feel physically "alive"
 * (magnetic elements, cursor follow, tilt release, drag-back).
 */
export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.5,
};

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

export const SPRING_CURSOR: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 0.3,
};

/**
 * Standard durations (seconds) for non-spring, ease-based transitions.
 */
export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  reveal: 1.0,
} as const;

/**
 * Reusable entrance transition — pairs EASE_SIGNATURE with DURATION.base.
 * Use for fade/slide-up reveals (e.g. TextReveal, section entrances).
 */
export const ENTRANCE_TRANSITION: Transition = {
  duration: DURATION.base,
  ease: EASE_SIGNATURE,
};

/**
 * Stagger timing for parent containers animating groups of children
 * (e.g. skill tags, project grid, nav links).
 */
export const STAGGER_CONFIG = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: ENTRANCE_TRANSITION,
    },
  },
} as const;