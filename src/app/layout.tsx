import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} \u2014 RV Component Sales Representation`,
    template: `%s \u2014 ${SITE_NAME}`,
  },
  description:
    "Alinea Sales Group represents component suppliers across the U.S., Mexico, and Canada to the RV OEMs of Northern Indiana \u2014 backed by nearly 25 years of relationships, access, and results.",
  keywords: [
    "RV component sales rep",
    "RV manufacturer's representative",
    "RV OEM",
    "Elkhart County",
    "RV industry sales",
    "Alinea Sales Group",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} \u2014 RV Component Sales Representation`,
    description:
      "Independent manufacturer\u2019s sales representation for the RV industry \u2014 relationships, access, results.",
    images: [
      {
        url: "/asg-logo.png",
        width: 1200,
        height: 1200,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} \u2014 RV Component Sales Representation`,
    description:
      "Independent manufacturer\u2019s sales representation for the RV industry.",
    images: ["/asg-logo.png"],
  },
  icons: {
    icon: "/asg-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="min-h-screen flex flex-col bg-asg-white text-asg-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
