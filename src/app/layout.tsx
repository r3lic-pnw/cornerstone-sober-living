import type { Metadata } from "next";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Home } from "lucide-react";
import NavMenu from "@/components/Navigation/NavMenu";
import Footer from "@/components/Layout/Footer";
import { ministry, siteUrl } from "@/lib/ministry";

/* Heading face for the whole site. globals.css reads --font-brand-serif
   through --font-serif, so every `font-serif` heading picks it up.
   Low-contrast on purpose: a Didone's hairlines break up at 20–30px on the
   low-density screens most of our readers are on. */
const brandSerif = Source_Serif_4({
  variable: "--font-brand-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // The home page's title. Location is in it because that's how people
    // search: "sober living Snohomish County", "men's sober housing WA".
    default:
      "Cornerstone Sober Living | Christian Sober Housing for Men in Snohomish County, WA",
    template: "%s | Cornerstone Sober Living",
  },
  description:
    "Christian-centered sober living for men in Snohomish County, Washington, rebuilding their lives after addiction and incarceration. Apply online or call to ask a question.",
  openGraph: {
    siteName: "Cornerstone Sober Living",
    locale: "en_US",
    type: "website",
  },
  // The image itself comes from src/app/opengraph-image.tsx — the file
  // convention injects og:image for us. This only asks X to render it big
  // rather than as a thumbnail; X falls back to og:image when there's no
  // twitter:image.
  twitter: { card: "summary_large_image" },
};

/* Structured data for search engines: who we are, how to reach us, where we
   serve. Built only from ministry.ts so nothing here can drift from what the
   pages say. The mailing address is the intake house, already public on the
   Contact page; no per-house addresses. */
const address = ministry.mailingAddress;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: ministry.name,
  url: siteUrl,
  logo: `${siteUrl}/csl_logo_concept.svg`,
  email: ministry.email,
  ...(ministry.phone && { telephone: ministry.phone }),
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${ministry.serviceArea}, ${ministry.state}`,
  },
  // Same guard as the footer: only claimed once verified against the IRS.
  ...(ministry.nonprofitStatusVerified && {
    nonprofitStatus: "Nonprofit501c3",
    taxID: ministry.ein,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${brandSerif.variable} h-full antialiased`}>
      {/* Sticky-footer column. The content wrapper is plain block flow, not
          flex — as a flex child it would shrink full-bleed sections below
          their content height and collapse them. */}
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <header className="on-navy grid grid-cols-3 items-center px-4 py-2 h-16 bg-surface-navy text-on-navy sticky top-0 w-full z-20 shrink-0">
          {/* min-w/h, not padding: the 44px tap target has to hold even if the
              icon size changes. The header is h-16, so it fits. */}
          <Link
            href="/"
            aria-label="Cornerstone Sober Living home"
            className="justify-self-start inline-flex items-center justify-center min-w-11 min-h-11 rounded hover:bg-navy-600"
          >
            <Home className="w-6 h-6 text-accent" />
          </Link>
          <span className="text-xl lg:text-2xl font-bold justify-self-center col-start-2 text-center">
            Cornerstone Sober Living
          </span>
          <NavMenu />
        </header>
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
