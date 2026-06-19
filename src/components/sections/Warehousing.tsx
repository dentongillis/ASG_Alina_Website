import { Check } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

const SERVICES = [
  "Regional warehousing near the OEMs",
  "Inventory staging & management",
  "Just-in-time delivery to the line",
  "Freight & logistics coordination",
];

export function Warehousing() {
  return (
    <Section tone="cream" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow withLine>
              VALUE-ADD &middot; AVAILABLE AT ADDITIONAL COST
            </Eyebrow>
            <Reveal>
              <h2 className="mt-6 text-balance">
                Keep your parts on the line, not on a truck somewhere.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <p className="body-lg text-asg-ink/85">
                For partners who want it, ASG can warehouse product close to
                the OEM cluster and handle just-in-time delivery to the line.
                It&rsquo;s an optional layer on top of representation &mdash;
                priced separately &mdash; that shortens lead times and takes
                supply headaches off your plate.
              </p>
            </Reveal>
            <Reveal>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {SERVICES.map((item) => (
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
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
