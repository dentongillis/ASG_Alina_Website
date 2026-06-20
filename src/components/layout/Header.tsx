"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { NAV_LINKS, bookACallHref } from "@/lib/config";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-asg-white/95 backdrop-blur border-b border-asg-hairline",
        )}
      >
        <Container className="flex h-16 sm:h-20 lg:h-24 items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="Alinea Sales Group — home"
            className="flex items-center gap-3 shrink-0"
          >
            <span
              className={cn(
                "inline-flex items-center justify-center transition-all duration-300",
                transparent
                  ? "bg-transparent p-0"
                  : "bg-asg-black rounded-[3px] p-1 sm:p-1.5 lg:p-2 ring-1 ring-asg-hairline shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
              )}
            >
              <Image
                src="/asg-logo.png"
                alt="Alinea Sales Group"
                width={1024}
                height={1024}
                priority
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative text-sm font-medium tracking-tight transition-colors py-1",
                    transparent
                      ? "text-asg-white/85 hover:text-asg-gold-light"
                      : "text-asg-ink/80 hover:text-asg-gold-deep",
                    active &&
                      (transparent ? "text-asg-gold-light" : "text-asg-gold-deep"),
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute left-0 right-0 -bottom-1 h-px origin-center transition-transform duration-300 ease-out bg-gold-line",
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              href={bookACallHref()}
              size="md"
              className="px-4 sm:px-5 lg:px-6 text-sm sm:text-[0.95rem]"
            >
              <span className="lg:hidden">Book</span>
              <span className="hidden lg:inline">Book a Call</span>
            </Button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={cn(
                "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[2px] border shrink-0",
                transparent
                  ? "text-asg-white border-asg-white/30"
                  : "text-asg-ink border-asg-hairline",
              )}
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-asg-black text-asg-white flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <Container className="flex h-16 sm:h-20 lg:h-24 items-center justify-between shrink-0">
            <Link href="/" aria-label="Alinea Sales Group — home">
              <Image
                src="/asg-logo.png"
                alt="Alinea Sales Group"
                width={1024}
                height={1024}
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-asg-white/30 text-asg-white"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </Container>
          <nav
            className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-6 sm:gap-7 px-6 py-8"
            aria-label="Mobile primary"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative inline-flex flex-col items-center gap-2 text-xl sm:text-2xl font-medium tracking-tight transition-colors",
                    active
                      ? "text-asg-gold-light"
                      : "text-asg-white/90 hover:text-asg-gold-light",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px w-12 bg-gold-line transition-opacity duration-300",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="pb-8 sm:pb-10 px-6 shrink-0">
            <Container>
              <Button href={bookACallHref()} size="lg" className="w-full">
                Book a Call
              </Button>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
