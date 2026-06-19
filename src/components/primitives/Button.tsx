import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";
type Size = "md" | "lg";

interface CommonProps {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

type PlainButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    type?: "button" | "submit" | "reset";
    href?: undefined;
  };

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-medium tracking-tight transition-all duration-200 ease-out " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-asg-gold " +
  "disabled:opacity-60 disabled:cursor-not-allowed select-none whitespace-nowrap";

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

function variantClasses(variant: Variant, tone: Tone) {
  if (variant === "primary") {
    return [
      "bg-gold-gradient text-asg-black border border-transparent",
      "shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_rgba(198,161,91,0.18)]",
      "hover:-translate-y-0.5 hover:brightness-110",
      "active:translate-y-0 active:brightness-100",
    ].join(" ");
  }
  // secondary
  return tone === "dark"
    ? [
        "bg-transparent text-asg-gold border border-asg-hairline",
        "hover:-translate-y-0.5 hover:border-asg-gold hover:text-asg-gold-light",
      ].join(" ")
    : [
        "bg-transparent text-asg-ink border border-asg-hairline",
        "hover:-translate-y-0.5 hover:border-asg-gold hover:text-asg-gold-deep",
      ].join(" ");
}

export function Button(props: LinkButtonProps | PlainButtonProps) {
  const {
    variant = "primary",
    tone = "light",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses(variant, tone),
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as LinkButtonProps;
    const isExternal =
      external ??
      (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as PlainButtonProps;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
