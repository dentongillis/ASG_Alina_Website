"use client";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { Input, Select, Textarea } from "@/components/primitives/Field";
import { SectionLine } from "@/components/primitives/SectionLine";
import { Reveal } from "@/components/primitives/Reveal";
import { useFormspree } from "@/lib/useFormspree";
import { bookACallHref, FORMSPREE_IS_PLACEHOLDER } from "@/lib/config";

const CATEGORIES = [
  "Interior",
  "Electrical",
  "Chassis",
  "Emerging Tech",
  "Other",
] as const;

export function PartnerForm() {
  const { status, error, submit, reset } = useFormspree();
  const isSuccess = status === "success";
  const isSubmitting = status === "submitting";

  return (
    <Section tone="light" size="md">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLine variant="short" className="mb-6" />
            <h2 className="text-balance">Tell us about your products.</h2>
            <p className="mt-5 text-asg-ink/80">
              Share a quick overview and Adam will follow up to set a call.
            </p>
            <p className="mt-8 text-sm text-asg-muted">
              Prefer to talk it through first?{" "}
              <a
                href={bookACallHref()}
                className="font-medium text-asg-gold-deep hover:text-asg-gold transition-colors underline underline-offset-4"
              >
                Book a Call
              </a>
            </p>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="rounded-md border border-asg-hairline bg-asg-white p-6 sm:p-8 lg:p-10 shadow-card">
              {isSuccess ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-8 text-center"
                >
                  <SectionLine variant="short" className="mb-6 mx-auto" />
                  <h3 className="text-asg-ink">
                    Thanks &mdash; Adam will be in touch shortly.
                  </h3>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-6 text-sm font-medium text-asg-gold-deep hover:text-asg-gold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      name="name"
                      label="Name"
                      autoComplete="name"
                      required
                    />
                    <Input
                      name="company"
                      label="Company"
                      autoComplete="organization"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      name="email"
                      label="Email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <Input
                      name="phone"
                      label="Phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Select
                      name="product_category"
                      label="Product category"
                      options={CATEGORIES}
                    />
                    <Input
                      name="website"
                      label="Website"
                      type="url"
                      placeholder="https://"
                      autoComplete="url"
                    />
                  </div>
                  <Textarea
                    name="message"
                    label="Message"
                    placeholder="Tell us about your products and your capacity."
                  />

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {error && (
                    <p role="alert" className="text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Button type="submit" disabled={isSubmitting} size="lg">
                      {isSubmitting ? "Sending\u2026" : "Send Message"}
                    </Button>
                    {FORMSPREE_IS_PLACEHOLDER && (
                      <span className="text-xs text-asg-muted">
                        [ADAM TODO] Formspree endpoint not configured yet.
                      </span>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
