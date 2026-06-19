import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    copy: "we learn your products, capacity, and goals.",
  },
  {
    n: "02",
    title: "Line evaluation",
    copy: "we confirm it\u2019s a fit for the OEMs we serve.",
  },
  {
    n: "03",
    title: "Representation agreement",
    copy: "clear terms, clear territory.",
  },
  {
    n: "04",
    title: "Market entry",
    copy: "introductions, positioning, and first orders.",
  },
  {
    n: "05",
    title: "Ongoing management",
    copy:
      "reorders, feedback, and growth (with optional warehousing & logistics layered in).",
  },
];

export function ProcessSteps() {
  return (
    <Section tone="dark" size="lg">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow tone="dark" withLine>
            ENGAGEMENT
          </Eyebrow>
          <h2 className="mt-6 text-asg-white text-balance">
            How an engagement works.
          </h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06} as="li">
              <article className="h-full rounded-md border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="font-cinzel text-asg-gold text-2xl tracking-cinzel">
                    {step.n}
                  </span>
                  <SectionLine variant="short" className="opacity-80 w-10" />
                </div>
                <h3 className="mt-5 text-asg-white text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-asg-white/70 text-[0.975rem]">
                  {step.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
