import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ValueProp } from "@/components/sections/ValueProp";
import { Categories } from "@/components/sections/Categories";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { TaglineTriad } from "@/components/sections/TaglineTriad";
import { FounderTeaser } from "@/components/sections/FounderTeaser";
import { CtaBand } from "@/components/layout/CtaBand";
import { bookACallHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Alinea Sales Group \u2014 RV Component Sales Representation",
  description:
    "From your factory to the RV line \u2014 represented right. Alinea Sales Group represents component suppliers across the U.S., Mexico, and Canada to the RV OEMs of Elkhart County.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="ALINEA SALES GROUP"
        headline={"From your factory to the RV line \u2014 represented right."}
        subhead={
          "Alinea Sales Group represents component suppliers across the U.S., Mexico, and Canada to the RV OEMs of Elkhart County \u2014 backed by nearly 25 years of relationships, access, and results."
        }
        primaryCta={{ label: "Book a Call", href: bookACallHref() }}
        secondaryCta={{ label: "See What We Represent", href: "#what-we-represent" }}
      />
      <StatsBar />
      <ValueProp />
      <div id="what-we-represent" className="scroll-mt-24">
        <Categories variant="teaser" />
      </div>
      <ServicesTeaser />
      <TaglineTriad />
      <FounderTeaser />
      <CtaBand />
    </>
  );
}
