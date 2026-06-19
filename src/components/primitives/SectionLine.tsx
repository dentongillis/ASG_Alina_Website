"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "full" | "short" | "divider";

interface SectionLineProps {
  variant?: Variant;
  className?: string;
  ariaHidden?: boolean;
}

const variantClasses: Record<Variant, string> = {
  full: "h-px w-full",
  short: "h-px w-16",
  divider: "h-px w-24",
};

export function SectionLine({
  variant = "full",
  className,
  ariaHidden = true,
}: SectionLineProps) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden={ariaHidden}
      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: reduce ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: "left center" }}
      className={cn(
        "block bg-gold-line origin-left",
        variantClasses[variant],
        className,
      )}
    />
  );
}
