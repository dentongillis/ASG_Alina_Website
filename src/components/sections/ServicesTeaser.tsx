import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionLine } from "@/components/primitives/SectionLine";
import { Reveal } from "@/components/primitives/Reveal";

export function ServicesTeaser() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow withLine>HOW WE WORK</Eyebrow>
          <Reveal>
            <h2 className="mt-6 text-balance">
              Representation first. Logistics when you need it.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <article className="h-full rounded-md border border-asg-hairline bg-asg-cream p-8 lg:p-10">
              <SectionLine variant="short" className="mb-6" />
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-asg-ink">Sales Representation</h3>
                <span className="font-cinzel uppercase tracking-eyebrow text-[0.7rem] text-asg-gold-deep">
                  Core
                </span>
              </div>
              <p className="mt-4 text-asg-ink/85">
                Your products, carried to the OEMs by someone they already
                trust.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-md border border-asg-hairline bg-asg-cream p-8 lg:p-10">
              <SectionLine variant="short" className="mb-6" />
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-asg-ink">Warehousing &amp; Logistics</h3>
                <span className="font-cinzel uppercase tracking-eyebrow text-[0.7rem] text-asg-gold-deep">
                  Value-add &middot; Available at additional cost
                </span>
              </div>
              <p className="mt-4 text-asg-ink/85">
                Regional warehousing and just-in-time delivery to keep your
                parts on the line and off the critical path.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-medium text-asg-gold-deep hover:text-asg-gold transition-colors"
          >
            Explore our capabilities
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
