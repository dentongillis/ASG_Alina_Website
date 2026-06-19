import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8", className)}
      {...rest}
    />
  );
}
