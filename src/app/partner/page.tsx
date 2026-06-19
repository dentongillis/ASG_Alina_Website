import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { IdealPartner } from "@/components/sections/IdealPartner";
import { PartnerForm } from "@/components/sections/PartnerForm";
import { CtaBand } from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "If you build components for the RV market, ASG can be the fastest path to the OEMs that matter. Tell us about your products and your capacity.",
};

export default function PartnerPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="FOR SUPPLIERS"
        headline="Ready to get your products on the line?"
        subhead="If you build components for the RV market, ASG can be the fastest path to the OEMs that matter."
      />
      <BenefitsGrid />
      <IdealPartner />
      <PartnerForm />
      <CtaBand />
    </>
  );
}
