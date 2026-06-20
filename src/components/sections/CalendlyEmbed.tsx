import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { SectionLine } from "@/components/primitives/SectionLine";
import { Reveal } from "@/components/primitives/Reveal";
import {
  bookACallHref,
  CALENDLY_IS_PLACEHOLDER,
  CALENDLY_URL,
} from "@/lib/config";

export function CalendlyEmbed() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="max-w-3xl">
          <SectionLine variant="short" className="mb-6" />
          <Reveal>
            <h2 className="text-balance">Book a call with Alinea Sales Group.</h2>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-asg-ink/80">
              Pick a time that works for you. If nothing fits, drop a note
              below and we&rsquo;ll find one.
            </p>
          </Reveal>
        </div>

        <div className="mt-10">
          {CALENDLY_IS_PLACEHOLDER ? (
            <Reveal>
              <div className="rounded-md border border-dashed border-asg-hairline bg-asg-cream p-10 sm:p-14 text-center">
                <p className="font-cinzel uppercase tracking-eyebrow text-[0.78rem] text-asg-gold-deep">
                  Scheduler coming soon
                </p>
                <p className="mt-4 text-asg-ink/80 max-w-lg mx-auto">
                  The Calendly scheduler will appear here once it&rsquo;s
                  configured. In the meantime, you can request a call by email.
                </p>
                <div className="mt-7 inline-flex">
                  <Button href={bookACallHref()} size="lg">
                    Book a Call
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="overflow-hidden rounded-md border border-asg-hairline bg-asg-white">
                <iframe
                  src={CALENDLY_URL}
                  title="Book a call with Adam Smith"
                  className="w-full h-[640px] sm:h-[720px] border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
