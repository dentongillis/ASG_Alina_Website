import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { SectionLine } from "@/components/primitives/SectionLine";
import {
  EMAIL,
  NAV_LINKS,
  PHONE,
  SITE_NAME,
  TAGLINE,
} from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-asg-black text-asg-white/85">
      <Container className="py-16 md:py-20">
        <SectionLine variant="full" className="mb-12 opacity-60" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label={`${SITE_NAME} — home`} className="inline-block">
              <Image
                src="/asg-logo.png"
                alt={SITE_NAME}
                width={180}
                height={180}
                className="h-20 w-auto"
              />
            </Link>
            <p className="font-cinzel uppercase tracking-eyebrow text-asg-gold text-sm">
              {TAGLINE}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-cinzel uppercase tracking-eyebrow text-asg-gold-light/90 text-xs mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-asg-white/80 hover:text-asg-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-cinzel uppercase tracking-eyebrow text-asg-gold-light/90 text-xs mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                {PHONE ? (
                  <a
                    href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                    className="hover:text-asg-gold-light transition-colors"
                  >
                    {PHONE}
                  </a>
                ) : (
                  <span className="text-asg-white/60">
                    Phone &mdash; <em className="not-italic text-asg-white/40">[ADAM TODO]</em>
                  </span>
                )}
              </li>
              <li>
                {EMAIL ? (
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-asg-gold-light transition-colors"
                  >
                    {EMAIL}
                  </a>
                ) : (
                  <span className="text-asg-white/60">
                    Email &mdash; <em className="not-italic text-asg-white/40">[ADAM TODO]</em>
                  </span>
                )}
              </li>
              <li className="text-asg-white/60 italic">Office address coming soon.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-asg-white/60">
          <p>
            Representing suppliers across the U.S., Mexico &amp; Canada to the RV OEMs
            of Elkhart County.
          </p>
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
