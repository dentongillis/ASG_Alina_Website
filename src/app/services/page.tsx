import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SalesRep } from "@/components/sections/SalesRep";
import { Categories } from "@/components/sections/Categories";
import { Warehousing } from "@/components/sections/Warehousing";
import { TerritoryMap } from "@/components/sections/TerritoryMap";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Sales representation is the core of what we do. Warehousing and logistics are there when you want to take supply risk off the table.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="CAPABILITIES"
        headline="Representation first. Logistics when you need it."
        subhead={
          "Sales representation is the core of what we do. Warehousing and logistics are there when you want to take supply risk off the table."
        }
      />
      <SalesRep />
      <Categories variant="detailed" tone="light" />
      <Warehousing />
      <TerritoryMap />
      <ProcessSteps />
      <CtaBand />
    </>
  );
}
