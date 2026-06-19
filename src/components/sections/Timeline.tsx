"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";

const HIGHLIGHTS = [
  "Nearly 25 years in the RV industry",
  "Top sales rep \u2014 Keystone RV divisions",
  "Top sales rep \u2014 Forest River RV divisions",
  "Sales manager for prominent industry brands",
  "General manager with full P&L responsibility",
  "Founder of an RV supply company \u2014 millions in first-year sales",
];

export function Timeline() {
  const reduce = useReducedMotion();
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow withLine>CAREER HIGHLIGHTS</Eyebrow>
          <h2 className="mt-6 text-balance">A track record built on the line.</h2>
        </div>

        <div className="mt-14 relative">
          {/* Vertical gold line spine */}
          <motion.span
            aria-hidden
            initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top center" }}
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-asg-gold-deep via-asg-gold-light to-asg-gold-deep md:left-4"
          />

          <ol className="space-y-7">
            {HIGHLIGHTS.map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: reduce ? 0 : 0.45,
                  delay: reduce ? 0 : i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-10 md:pl-14"
              >
                <span
                  aria-hidden
                  className="absolute left-[0.4rem] md:left-[0.65rem] top-2 h-2.5 w-2.5 rounded-full bg-gold-gradient ring-4 ring-asg-white"
                />
                <p className="text-asg-ink text-lg md:text-xl font-medium">
                  {item}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
