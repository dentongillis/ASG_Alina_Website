import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import {
  Handshake,
  ShieldCheck,
  Trophy,
  Globe2,
  Phone,
  Truck,
  type LucideIcon,
} from "lucide-react";

interface Benefit {
  title: string;
  copy: string;
  Icon: LucideIcon;
}

const BENEFITS: Benefit[] = [
  {
    title: "Instant access",
    copy: "direct relationships with OEM decision-makers in Elkhart County.",
    Icon: Handshake,
  },
  {
    title: "25 years of trust",
    copy: "a rep the buyers already know and take calls from.",
    Icon: ShieldCheck,
  },
  {
    title: "A proven record",
    copy: "built on closed deals across major divisions.",
    Icon: Trophy,
  },
  {
    title: "North American reach",
    copy: "representation across the U.S., Mexico, and Canada.",
    Icon: Globe2,
  },
  {
    title: "One point of contact",
    copy: "no layers, no handoffs.",
    Icon: Phone,
  },
  {
    title: "Optional logistics",
    copy: "warehousing and JIT delivery when you want it.",
    Icon: Truck,
  },
];

export function BenefitsGrid() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow withLine>WHY PARTNER WITH ASG</Eyebrow>
          <Reveal>
            <h2 className="mt-6 text-balance">
              Six reasons suppliers choose ASG.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map(({ title, copy, Icon }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article className="group h-full rounded-md border border-asg-hairline bg-asg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-asg-hairline text-asg-gold-deep group-hover:text-asg-gold transition-colors"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-asg-ink">
                  {title}
                </h3>
                <p className="mt-3 text-asg-ink/75 text-[0.975rem]">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
