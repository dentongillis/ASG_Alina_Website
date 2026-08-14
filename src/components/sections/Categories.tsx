import { Armchair, Palette, Hammer, Cpu } from "lucide-react";
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
      "seating, cabinetry, hardware, fixtures, and the functional pieces that complete the living space.",
    Icon: Armchair,
  },
  {
    title: "Interior Decor",
    copy:
      "countertops, solid surfaces, decorative finishes, and the materials that shape the look and feel of the interior.",
    Icon: Palette,
  },
  {
    title: "Construction",
    copy:
      "materials, components, and solutions used throughout the RV construction and assembly process.",
    Icon: Hammer,
  },
  {
    title: "Emerging Tech",
    copy:
      "connectivity, smart systems, automation, and the next generation of solutions entering the RV market.",
    Icon: Cpu,
  },
];

// Slightly deeper copy for Services page
const DETAILED: Category[] = [
  {
    title: "Interior Components",
    copy:
      "Seating, cabinetry, hardware, fixtures, and the functional pieces that complete the living space. The pieces buyers see and touch \u2014 and that drive perceived quality on the showroom floor.",
    Icon: Armchair,
  },
  {
    title: "Interior Decor",
    copy:
      "Countertops, solid surfaces, decorative finishes, and the materials that shape the look and feel of the interior. Design-driven categories where color, texture, and durability all have to line up.",
    Icon: Palette,
  },
  {
    title: "Construction",
    copy:
      "Materials, components, and solutions used throughout the RV construction and assembly process. Line-critical supply where consistency, capacity, and on-time delivery are non-negotiable.",
    Icon: Hammer,
  },
  {
    title: "Emerging Tech",
    copy:
      "Connectivity, smart systems, automation, and the next generation of solutions entering the RV market. New categories we help position with OEMs that are actively spec\u2019ing forward.",
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
