"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { SectionLine } from "@/components/primitives/SectionLine";
import { bookACallHref } from "@/lib/config";
import { heroContainer, heroItem } from "@/lib/motion";

interface HeroProps {
  eyebrow: string;
  headline: string;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "full" | "compact";
}

export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta = { label: "Book a Call", href: bookACallHref() },
  secondaryCta,
  variant = "full",
}: HeroProps) {
  const reduce = useReducedMotion();
  const isFull = variant === "full";
  return (
    <section
      aria-label="Hero"
      className={
        "relative isolate overflow-hidden bg-asg-black text-asg-white " +
        (isFull
          ? "min-h-[88vh] flex items-center pt-24 pb-20 sm:pt-28"
          : "pt-32 pb-20 sm:pt-36 md:pt-40 md:pb-24")
      }
    >
      {/* Dark backdrop layer (replaceable RV/manufacturing imagery) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        // [ADAM TODO: swap image] — replace with a real, dark RV-manufacturing photo (e.g. /hero-rv.jpg) and add an <Image fill /> below.
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(198,161,91,0.10) 0%, rgba(11,11,12,0) 55%), linear-gradient(180deg, #0B0B0C 0%, #131316 100%)",
        }}
      />
      {/* Subtle gold filament accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gold-line opacity-50"
      />

      <Container>
        <motion.div
          initial={reduce ? "show" : "hidden"}
          animate="show"
          variants={heroContainer}
          className="max-w-4xl"
        >
          <motion.div variants={heroItem} className="flex items-center gap-4 mb-6">
            <span className="font-cinzel uppercase tracking-eyebrow text-[0.8rem] text-asg-gold-light">
              {eyebrow}
            </span>
            <SectionLine variant="short" className="opacity-80" />
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-asg-white text-balance"
          >
            {headline}
          </motion.h1>

          {subhead && (
            <motion.p
              variants={heroItem}
              className="mt-6 body-lg text-asg-white/75 max-w-2xl"
            >
              {subhead}
            </motion.p>
          )}

          {isFull && (
            <motion.div
              variants={heroItem}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="secondary"
                  tone="dark"
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
