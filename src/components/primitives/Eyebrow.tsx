import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { SectionLine } from "./SectionLine";

interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  withLine?: boolean;
  tone?: "light" | "dark";
}

export function Eyebrow({
  withLine = false,
  tone = "light",
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...rest}>
      <span
        className={cn(
          "font-cinzel uppercase font-medium tracking-eyebrow text-[0.8rem]",
          tone === "dark" ? "text-asg-gold-light" : "text-asg-gold",
        )}
      >
        {children}
      </span>
      {withLine && <SectionLine variant="short" />}
    </div>
  );
}
