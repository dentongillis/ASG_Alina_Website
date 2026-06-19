import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

export function WhoWeAre() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="max-w-3xl">
          <SectionLine variant="short" className="mb-6" />
          <Reveal>
            <h2 className="text-balance">
              An independent rep firm with an inside track.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 body-lg text-asg-ink/85">
              Alinea Sales Group is an independent manufacturer&rsquo;s sales
              representative firm built for the RV industry. We represent
              component suppliers across the U.S., Mexico, and Canada and bring
              their products to the OEMs concentrated in Elkhart County &mdash;
              the heart of North American RV manufacturing. Our model is
              simple: we sell on your behalf to the people we already know, and
              we treat your line like it&rsquo;s our own.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
