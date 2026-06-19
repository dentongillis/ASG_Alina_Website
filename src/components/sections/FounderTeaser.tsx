import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

export function FounderTeaser() {
  return (
    <Section tone="cream" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-md border border-asg-hairline">
              <Image
                src="/adam-smith.png"
                alt="Adam Smith, Founder &amp; Principal of Alinea Sales Group"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Eyebrow withLine>THE FOUNDER</Eyebrow>
            <Reveal>
              <h2 className="mt-6 text-balance">Meet Adam Smith.</h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 body-lg text-asg-ink/85">
                Nearly 25 years in the RV industry. Top sales rep across
                Keystone and Forest River divisions, sales manager for
                prominent brands, GM with full P&amp;L responsibility, and the
                founder of an RV supply company that did millions in its first
                year. Adam built ASG to give manufacturers a rep who already
                has the relationships.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <Link
                  href="/company"
                  className="inline-flex items-center gap-2 font-medium text-asg-gold-deep hover:text-asg-gold transition-colors"
                >
                  Read Adam&rsquo;s story
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
