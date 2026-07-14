import type { Transition, Variants } from "motion/react";

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  hero: { duration: 0.48, ease: smoothEase },
  reveal: { duration: 0.36, ease: smoothEase },
  quick: { duration: 0.24, ease: smoothEase },
  spring: { type: "spring", stiffness: 170, damping: 26, mass: 0.7 },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: transitions.reveal },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.reveal },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 22 },
  visible: { opacity: 1, x: 0, transition: transitions.reveal },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -22 },
  visible: { opacity: 1, x: 0, transition: transitions.reveal },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.quick },
};

export function staggerDelay(index: number, max = 0.24) {
  return Math.min(index * 0.04, max);
}
