import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

export function PartnerBio() {
  return (
    <Section tone="cream" size="md" className="pt-0">
      <Container>
        <div className="border-t border-asg-hairline pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 lg:order-2">
              <figure className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-md border border-asg-hairline shadow-card">
                <Image
                  src="/jeff-wagner.png"
                  alt="Portrait of Jeff Wagner, Partner &amp; Principal"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div className="lg:col-span-7 lg:order-1">
              <SectionLine variant="short" className="mb-6" />
              <Reveal>
                <p className="font-cinzel uppercase tracking-eyebrow text-[0.85rem] text-asg-gold-deep">
                  Partner &amp; Principal
                </p>
              </Reveal>
              <Reveal>
                <h2 className="mt-3 text-balance">Jeff Wagner</h2>
              </Reveal>

              <div className="mt-7 space-y-5 text-asg-ink/85 body-lg max-w-prose">
                <Reveal>
                  <p>
                    Jeff Wagner has spent nearly 25 years inside the RV
                    industry, building a career centered on product
                    development, commercial leadership, and bringing products
                    from concept to production.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    He built his reputation as a high-performing sales
                    professional at Keystone RV and Forest River before moving
                    into product management roles with Thor Industries and
                    Forest River. He later served as General Manager for
                    significant Keystone product lines, giving him firsthand
                    experience leading products through development while
                    working across engineering, purchasing, manufacturing, and
                    supplier relationships.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    Jeff&rsquo;s experience spans every stage of the OEM
                    product development cycle. Having worked in sales, product
                    management, and general management, he understands what it
                    takes to move products from an idea to the production line
                    &mdash; and the collaboration required to help
                    manufacturers execute successfully.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
