import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { ADDRESS, ADDRESS_LINE, EMAIL, PHONES, telHref } from "@/lib/config";

export function DirectContact() {
  return (
    <Section tone="light" size="md">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal>
            <article className="h-full rounded-md border border-asg-hairline bg-asg-white p-7">
              <span
                aria-hidden
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-asg-hairline text-asg-gold-deep"
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-asg-ink">Phone</h3>
              {PHONES.length > 0 ? (
                <ul className="mt-3 space-y-1">
                  {PHONES.map((phone) => (
                    <li key={phone}>
                      <a
                        href={telHref(phone)}
                        className="inline-block text-asg-ink/85 hover:text-asg-gold-deep transition-colors"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-asg-muted italic">
                  [ADAM TODO] Phone number coming soon.
                </p>
              )}
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="h-full rounded-md border border-asg-hairline bg-asg-white p-7">
              <span
                aria-hidden
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-asg-hairline text-asg-gold-deep"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-asg-ink">Email</h3>
              {EMAIL ? (
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 inline-block text-asg-ink/85 hover:text-asg-gold-deep transition-colors break-all"
                >
                  {EMAIL}
                </a>
              ) : (
                <p className="mt-3 text-asg-muted italic">
                  [ADAM TODO] Email address coming soon.
                </p>
              )}
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full rounded-md border border-asg-hairline bg-asg-white p-7">
              <span
                aria-hidden
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-asg-hairline text-asg-gold-deep"
              >
                <MapPin className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-asg-ink">Office</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-asg-ink/85 hover:text-asg-gold-deep transition-colors"
              >
                <span className="block">{ADDRESS.line1}</span>
                <span className="block">
                  {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postalCode}
                </span>
              </a>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
