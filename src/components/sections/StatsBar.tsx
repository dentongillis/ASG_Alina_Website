import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

const STATS = [
  { value: "25 Years", label: "in the RV industry" },
  { value: "Top Producer", label: "Keystone & Forest River divisions" },
  { value: "$Millions", label: "first-year supply-company sales" },
  { value: "Full P&L", label: "general manager leadership" },
];

export function StatsBar() {
  return (
    <Section tone="cream" size="sm">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {STATS.map((stat, i) => (
            <li key={stat.label} className="text-center md:text-left">
              <Reveal delay={i * 0.06}>
                <p className="text-gold-gradient font-semibold text-3xl md:text-4xl tracking-tight leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-asg-muted text-sm md:text-base">
                  {stat.label}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
