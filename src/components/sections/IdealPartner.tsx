import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

export function IdealPartner() {
  return (
    <Section tone="cream" size="md">
      <Container>
        <div className="max-w-3xl">
          <SectionLine variant="short" className="mb-6" />
          <Reveal>
            <h2 className="text-balance">Who we represent best.</h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 body-lg text-asg-ink/85">
              We&rsquo;re a strong fit for manufacturers of interior,
              electrical, chassis, or emerging-tech components who make quality
              products and have the capacity to scale with OEM demand. If
              that&rsquo;s you, let&rsquo;s talk.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
