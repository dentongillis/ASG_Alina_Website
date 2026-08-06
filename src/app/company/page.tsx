import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { FounderBio } from "@/components/sections/FounderBio";
import { PartnerBio } from "@/components/sections/PartnerBio";
import { Timeline } from "@/components/sections/Timeline";
import { NameStory } from "@/components/sections/NameStory";
import { TaglineTriad } from "@/components/sections/TaglineTriad";
import { CtaBand } from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Alinea Sales Group is an independent manufacturer\u2019s sales rep firm built for the RV industry, led by principals Adam Smith and Jeff Wagner \u2014 representing component suppliers across the U.S., Mexico, and Canada to the OEMs of Elkhart County.",
};

export default function CompanyPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="ABOUT ALINEA SALES GROUP"
        headline="Built on relationships. Driven by results."
      />
      <WhoWeAre />
      <FounderBio />
      <PartnerBio />
      <Timeline />
      <NameStory />
      <TaglineTriad expanded />
      <CtaBand />
    </>
  );
}
