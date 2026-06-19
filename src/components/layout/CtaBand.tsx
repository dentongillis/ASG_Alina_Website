import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { SectionLine } from "@/components/primitives/SectionLine";
import { Reveal } from "@/components/primitives/Reveal";
import { bookACallHref } from "@/lib/config";

interface CtaBandProps {
  heading?: string;
  subhead?: string;
  cta?: string;
}

export function CtaBand({
  heading = "Let\u2019s find out if we\u2019re a fit.",
  subhead = "A short call is the fastest way to see whether your products belong on the line.",
  cta = "Book a Call",
}: CtaBandProps) {
  return (
    <Section tone="dark" size="md">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionLine variant="divider" className="mb-8" />
          <Reveal>
            <h2 className="text-asg-white text-balance">{heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 body-lg text-asg-white/75 max-w-2xl">{subhead}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href={bookACallHref()} size="lg">
                {cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
