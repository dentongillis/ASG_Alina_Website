import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

export function FounderBio() {
  return (
    <Section tone="cream" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <figure className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-md border border-asg-hairline shadow-card">
              <Image
                src="/adam-smith.png"
                alt="Portrait of Adam Smith, Founder &amp; Principal"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionLine variant="short" className="mb-6" />
            <Reveal>
              <p className="font-cinzel uppercase tracking-eyebrow text-[0.85rem] text-asg-gold-deep">
                Founder &amp; Principal
              </p>
            </Reveal>
            <Reveal>
              <h2 className="mt-3 text-balance">Adam Smith</h2>
            </Reveal>

            <div className="mt-7 space-y-5 text-asg-ink/85 body-lg max-w-prose">
              <Reveal>
                <p>
                  Adam Smith has spent nearly 25 years inside the RV industry
                  &mdash; long enough to know the people, the products, and the
                  pace of the line.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  He built his reputation as a top-producing sales
                  representative across multiple Keystone RV and Forest River
                  divisions, went on to lead as a sales manager for prominent
                  industry brands, and stepped into a general manager role
                  carrying full P&amp;L responsibility. Along the way, he
                  founded his own RV supply company and grew it to millions in
                  sales in its first year alone.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Alinea Sales Group is the natural next chapter. Adam started
                  ASG to give component manufacturers something that&rsquo;s
                  hard to buy and impossible to fake: a representative who
                  already has the relationships, the access, and the results to
                  move products from the factory floor to the assembly line.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
