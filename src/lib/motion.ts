import type { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const heroContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const lineDraw: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const reducedMotionVariant = {
  hidden: { opacity: 1, y: 0, scaleX: 1 },
  show: { opacity: 1, y: 0, scaleX: 1 },
};
