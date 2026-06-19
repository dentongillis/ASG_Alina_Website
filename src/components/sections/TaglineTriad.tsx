import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { SectionLine } from "@/components/primitives/SectionLine";
import { Reveal } from "@/components/primitives/Reveal";

const TRIAD = [
  {
    title: "RELATIONSHIPS",
    copy:
      "Two and a half decades of trust with the people who decide what goes on the line.",
  },
  {
    title: "ACCESS",
    copy:
      "A direct path to OEM purchasing and engineering in the heart of RV country.",
  },
  {
    title: "RESULTS",
    copy: "A record built on closed deals \u2014 not introductions.",
  },
];

interface TaglineTriadProps {
  expanded?: boolean;
}

export function TaglineTriad({ expanded = false }: TaglineTriadProps) {
  return (
    <Section tone="dark" size="lg">
      <Container>
        <SectionLine variant="full" className="mb-14 opacity-90" />
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {TRIAD.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div>
                <h3 className="font-cinzel uppercase tracking-cinzel text-asg-gold text-xl md:text-2xl">
                  {item.title}
                </h3>
                <SectionLine variant="short" className="mt-4 mb-5 opacity-80" />
                <p
                  className={
                    expanded
                      ? "body-lg text-asg-white/80"
                      : "text-asg-white/75 text-[1.05rem] leading-relaxed"
                  }
                >
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
