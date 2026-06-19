import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "light" | "cream" | "dark";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  as?: "section" | "div" | "header" | "footer";
}

const toneClasses: Record<Tone, string> = {
  light: "bg-asg-white text-asg-ink",
  cream: "bg-asg-cream text-asg-ink",
  dark: "bg-asg-black text-asg-white",
};

const sizeClasses: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "py-12 sm:py-16 md:py-20",
  md: "py-16 sm:py-20 md:py-24 lg:py-28",
  lg: "py-20 sm:py-24 md:py-28 lg:py-32",
};

export function Section({
  tone = "light",
  size = "md",
  as = "section",
  className,
  ...rest
}: SectionProps) {
  const Tag = as as "section";
  return (
    <Tag className={cn(toneClasses[tone], sizeClasses[size], className)} {...rest} />
  );
}
