// Single source of truth for external integrations and contact info.
// All [ADAM TODO] values can be swapped here once finalized.

export const SITE_NAME = "Alinea Sales Group";
export const SITE_DOMAIN = "alineasalesgroup.com";
export const SITE_URL = "https://alineasalesgroup.com";
export const TAGLINE = "Relationships. Access. Results.";

// [ADAM TODO] — fill these in before launch
export const PHONE: string = "(574) 370-1614";
export const PHONE_SECONDARY: string = "(574) 268-8871";
export const EMAIL: string = "sales@alineasalesgroup.com";

export const PHONES: string[] = [PHONE, PHONE_SECONDARY].filter(Boolean);

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export const ADDRESS = {
  line1: "223 S Main St",
  city: "Elkhart",
  region: "IN",
  postalCode: "46514",
  country: "USA",
} as const;

export const ADDRESS_LINE = `${ADDRESS.line1}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`;

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/REPLACE_ME"; // [ADAM TODO]
export const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "https://formspree.io/f/REPLACE_ME"; // [ADAM TODO]

export const CALENDLY_IS_PLACEHOLDER = CALENDLY_URL.includes("REPLACE_ME");
export const FORMSPREE_IS_PLACEHOLDER = FORMSPREE_URL.includes("REPLACE_ME");

export const BOOK_A_CALL_MAILTO =
  "mailto:" +
  (EMAIL || "") +
  "?subject=" +
  encodeURIComponent("Booking a call with ASG");

export function bookACallHref(): string {
  return CALENDLY_IS_PLACEHOLDER ? BOOK_A_CALL_MAILTO : CALENDLY_URL;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/services", label: "Services" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Contact" },
] as const;
