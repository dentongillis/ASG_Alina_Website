import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLine } from "@/components/primitives/SectionLine";

export function TerritoryMap() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionLine variant="short" className="mb-6" />
            <Reveal>
              <h2 className="text-balance">
                North American suppliers. Elkhart County OEMs.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 body-lg text-asg-ink/85">
                We represent manufacturers across the United States, Mexico,
                and Canada, and we sell into the OEMs concentrated in Elkhart
                County, Indiana &mdash; the epicenter of North American RV
                production.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full rounded-md border border-asg-hairline bg-asg-cream p-4 sm:p-6 md:p-10">
              <TerritoryDiagram />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function TerritoryDiagram() {
  // Stylized diagram (not a real map): three supplier nodes (CA, US, MX) on the left,
  // converging on Elkhart County, Indiana on the right via gold lines.
  return (
    <svg
      viewBox="0 0 600 400"
      role="img"
      aria-label={
        "Three supplier regions \u2014 Canada, United States, and Mexico \u2014 converging on the OEMs of Elkhart County, Indiana."
      }
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9A7B3A" />
          <stop offset="50%" stopColor="#E4C77E" />
          <stop offset="100%" stopColor="#C6A15B" />
        </linearGradient>
        <radialGradient id="goldDot" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#E4C77E" />
          <stop offset="100%" stopColor="#9A7B3A" />
        </radialGradient>
      </defs>

      {/* Connecting lines */}
      <g
        stroke="url(#goldLine)"
        strokeWidth="1.25"
        fill="none"
        opacity="0.85"
      >
        <path d="M 210 90 C 320 90, 360 180, 480 200" />
        <path d="M 210 200 L 480 200" />
        <path d="M 210 310 C 320 310, 360 220, 480 200" />
      </g>

      {/* Supplier nodes */}
      {[
        { x: 210, y: 90, label: "Canada", code: "CA" },
        { x: 210, y: 200, label: "United States", code: "US" },
        { x: 210, y: 310, label: "Mexico", code: "MX" },
      ].map((n) => (
        <g key={n.code}>
          <circle
            cx={n.x}
            cy={n.y}
            r="9"
            fill="url(#goldDot)"
            stroke="#9A7B3A"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
          <text
            x={n.x - 22}
            y={n.y - 2}
            textAnchor="end"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="24"
            fontWeight="600"
            fill="#1A1A1A"
          >
            {n.label}
          </text>
          <text
            x={n.x - 22}
            y={n.y + 22}
            textAnchor="end"
            fontFamily="var(--font-cinzel), Georgia, serif"
            fontSize="16"
            letterSpacing="2"
            fill="#9A7B3A"
          >
            {n.code}
          </text>
        </g>
      ))}

      {/* Elkhart node */}
      <g>
        <circle
          cx="480"
          cy="200"
          r="14"
          fill="url(#goldDot)"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="480"
          cy="200"
          r="22"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="1"
          opacity="0.55"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="480"
          cy="200"
          r="32"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="0.75"
          opacity="0.3"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x="480"
          y="160"
          textAnchor="middle"
          fontFamily="var(--font-cinzel), Georgia, serif"
          fontSize="16"
          letterSpacing="2"
          fill="#9A7B3A"
        >
          ELKHART COUNTY
        </text>
        <text
          x="480"
          y="258"
          textAnchor="middle"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontSize="22"
          fontWeight="600"
          fill="#1A1A1A"
        >
          RV OEMs, Indiana
        </text>
      </g>
    </svg>
  );
}
