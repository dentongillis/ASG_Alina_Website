import { Check } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

const INCLUDED = [
  "Line representation & market entry",
  "OEM introductions and meetings",
  "Product positioning and quoting support",
  "Ongoing account management",
  "Market and competitive feedback",
];

export function SalesRep() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionLine variant="short" className="mb-6" />
            <Reveal>
              <h2 className="text-balance">
                Your sales force inside Elkhart County.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <p className="body-lg text-asg-ink/85">
                We carry your line directly to OEM purchasing and engineering
                teams, position your products to get specified, manage the
                account through every reorder, and keep you informed on what
                the market needs next. One rep, one relationship, full
                accountability &mdash; across the U.S., Mexico, and Canada.
              </p>
            </Reveal>
            <Reveal>
              <div>
                <p className="font-cinzel uppercase tracking-eyebrow text-[0.78rem] text-asg-gold-deep">
                  What&rsquo;s included
                </p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-asg-ink/85"
                    >
                      <Check
                        className="mt-1 h-4 w-4 text-asg-gold-deep shrink-0"
                        strokeWidth={2}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
