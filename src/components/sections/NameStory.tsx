import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

export function NameStory() {
  return (
    <Section tone="cream" size="md">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow withLine className="items-center text-center [&>*]:mx-auto">
            WHY &ldquo;ALINEA&rdquo;
          </Eyebrow>
          <Reveal>
            <p className="mt-8 body-lg text-asg-ink/85">
              The name draws on the Latin <em>a linea</em> &mdash; the idea of
              starting a new line. It&rsquo;s fitting for what we do: opening
              new lines of business for the suppliers we represent, and getting
              their products onto the assembly line. A new line. A cleaner path
              to the OEM.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
