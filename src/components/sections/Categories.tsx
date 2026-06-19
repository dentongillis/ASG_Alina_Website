import { Armchair, Zap, Cog, Cpu } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { LucideIcon } from "lucide-react";

interface Category {
  title: string;
  copy: string;
  Icon: LucideIcon;
}

interface CategoriesProps {
  variant?: "teaser" | "detailed";
  tone?: "light" | "cream";
}

const TEASER: Category[] = [
  {
    title: "Interior Components",
    copy:
      "seating, cabinetry, flooring, soft goods, and the finishes that define the living space.",
    Icon: Armchair,
  },
  {
    title: "Electrical Components",
    copy:
      "power, wiring, lighting, and the systems that keep coaches running.",
    Icon: Zap,
  },
  {
    title: "Chassis Components",
    copy:
      "frames, suspension, and the structural hardware every build depends on.",
    Icon: Cog,
  },
  {
    title: "Emerging Tech",
    copy:
      "connectivity, smart systems, and the next generation of solutions entering the RV market.",
    Icon: Cpu,
  },
];

// Slightly deeper copy for Services page
const DETAILED: Category[] = [
  {
    title: "Interior Components",
    copy:
      "Seating, cabinetry, flooring, soft goods, and the finishes that define the living space. The pieces buyers see and feel \u2014 and that drive perceived quality on the showroom floor.",
    Icon: Armchair,
  },
  {
    title: "Electrical Components",
    copy:
      "Power, wiring, lighting, and the systems that keep coaches running. Reliability matters; OEM purchasing teams expect partners who can hold tolerances at line speed.",
    Icon: Zap,
  },
  {
    title: "Chassis Components",
    copy:
      "Frames, suspension, and the structural hardware every build depends on. Engineered hardware where consistency, capacity, and on-time delivery are non-negotiable.",
    Icon: Cog,
  },
  {
    title: "Emerging Tech",
    copy:
      "Connectivity, smart systems, and the next generation of solutions entering the RV market. New categories we help position with OEMs that are actively spec\u2019ing forward.",
    Icon: Cpu,
  },
];

export function Categories({ variant = "teaser", tone = "light" }: CategoriesProps) {
  const items = variant === "detailed" ? DETAILED : TEASER;

  return (
    <Section tone={tone} size="md">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow withLine>WHAT WE REPRESENT</Eyebrow>
          <Reveal>
            <h2 className="mt-6 text-balance">
              Four categories. One trusted rep.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, copy, Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
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
