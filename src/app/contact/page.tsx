import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { DirectContact } from "@/components/sections/DirectContact";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let\u2019s talk. The best place to start is a short call \u2014 Adam will learn what you offer and whether a partnership is a fit.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="GET IN TOUCH"
        headline={"Let\u2019s talk."}
        subhead={
          "The best place to start is a short call \u2014 Adam will learn what you offer and whether a partnership is a fit."
        }
      />
      <CalendlyEmbed />
      <DirectContact />
      <ContactForm />
    </>
  );
}
