import type { Variants } from "framer-motion";

// Matches --ease-expo-out in globals.css — keep these in sync if you change one
export const EASE_EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
} as const;

/** Fade + rise — the default entrance for most content blocks */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_EXPO_OUT },
  },
};

/** Parent wrapper — staggers its children's fadeUp/fadeIn animations */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Simple opacity-only fade, for elements where vertical motion is distracting */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_EXPO_OUT },
  },
};

/** Scale + fade — good for cards, badges, small discrete elements */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_EXPO_OUT },
  },
};

/** Shared viewport config for scroll-triggered reveals — reuse this everywhere
 *  so every section "activates" at a consistent scroll position */
export const scrollViewport = { once: true, margin: "-80px" } as const;