"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

const ADAM_HIGHLIGHTS = [
  "Top sales rep \u2014 Keystone RV divisions",
  "Top sales rep \u2014 Forest River RV divisions",
  "Sales manager for prominent industry brands",
  "General manager with full P&L responsibility",
  "Founder of an RV supply company \u2014 millions in first-year sales",
];

const JEFF_HIGHLIGHTS = [
  "High-performing sales professional at Keystone RV and Forest River",
  "Product management at Thor Industries and Forest River",
  "General manager for significant Keystone product lines",
  "Deep command of the OEM product development cycle",
  "Proven at moving products from concept to production",
];

interface TrackProps {
  name: string;
  role: string;
  items: readonly string[];
  columnIndex: number;
}

function Track({ name, role, items, columnIndex }: TrackProps) {
  const reduce = useReducedMotion();
  return (
    <div>
      <p className="font-cinzel uppercase tracking-eyebrow text-[0.8rem] text-asg-gold-deep">
        {role}
      </p>
      <h3 className="mt-2 text-2xl md:text-3xl font-serif text-asg-ink">
        {name}
      </h3>

      <div className="mt-8 relative">
        <motion.span
          aria-hidden
          initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{
            duration: reduce ? 0 : 0.9,
            delay: reduce ? 0 : columnIndex * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "top center" }}
          className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-asg-gold-deep via-asg-gold-light to-asg-gold-deep md:left-4"
        />

        <ol className="space-y-6">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: reduce ? 0 : 0.45,
                delay: reduce ? 0 : columnIndex * 0.15 + i * 0.06,
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
    </div>
  );
}

export function Timeline() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow withLine>LEADERSHIP TRACK RECORD</Eyebrow>
          <Reveal>
            <h2 className="mt-6 text-balance">
              A track record built on the line.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 body-lg text-asg-ink/85">
              Nearly 50 years of combined RV industry experience across sales,
              product management, and general management &mdash; and a shared
              understanding of what it takes to move products from the factory
              floor to the assembly line.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-12 md:gap-10 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-asg-hairline">
          <div className="md:pr-10 lg:pr-16">
            <Track
              name="Adam Smith"
              role="Founder & Principal"
              items={ADAM_HIGHLIGHTS}
              columnIndex={0}
            />
          </div>
          <div className="pt-12 md:pt-0 md:pl-10 lg:pl-16">
            <Track
              name="Jeff Wagner"
              role="Partner & Principal"
              items={JEFF_HIGHLIGHTS}
              columnIndex={1}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
