import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionLine } from "@/components/primitives/SectionLine";
import { Reveal } from "@/components/primitives/Reveal";

export function ValueProp() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow withLine>WHY ASG</Eyebrow>
            <Reveal>
              <h2 className="mt-6 text-balance">
                We&rsquo;re already inside the room.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="body-lg text-asg-ink/85">
                Getting a component onto an RV line isn&rsquo;t about cold
                calls &mdash; it&rsquo;s about who answers them. ASG turns
                nearly 25 years of OEM relationships into a direct path for the
                suppliers we represent.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <article className="group h-full rounded-md border border-asg-hairline bg-asg-white p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <SectionLine variant="short" className="mb-6" />
              <h3 className="text-asg-ink">For Suppliers</h3>
              <p className="mt-4 text-asg-ink/80">
                Think of us as your dedicated sales force in Elkhart County. We
                carry your line to the purchasing and engineering teams who
                decide what gets specified &mdash; and we manage the
                relationship long after the first order.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="group h-full rounded-md border border-asg-hairline bg-asg-white p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <SectionLine variant="short" className="mb-6" />
              <h3 className="text-asg-ink">For OEMs</h3>
              <p className="mt-4 text-asg-ink/80">
                We bring you vetted, reliable component partners and stand
                behind every line we represent &mdash; so you get quality
                suppliers and a single, accountable point of contact.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
