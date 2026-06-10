import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ImageProtection from "@/components/ImageProtection";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabshots.com"),
  verification: { google: "CvCCu1Gz0bN5_sdtVEwm3wVAVYHmqIWMkVxm-vNBIB8" },
  title: "SabShots | Paris Photographer for Private Photo Sessions",
  description:
    "Book a private photo session in Paris with SabShots. With 8 years of experience, turn your moments at the Eiffel Tower and beyond into timeless photos.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SabShots",
    locale: "en_US",
    url: "https://www.sabshots.com",
    title: "SabShots | Paris Photographer for Private Photo Sessions",
    description:
      "Private photo sessions in Paris with SabShots, turning your Eiffel Tower moments and city walks into timeless photos.",
    images: [
      {
        url: "/assets/sabshots-hero.png",
        width: 1923,
        height: 876,
        alt: "SabShots, professional photographer in Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SabShots | Paris Photographer for Private Photo Sessions",
    description:
      "Private photo sessions in Paris with SabShots, turning your Eiffel Tower moments and city walks into timeless photos.",
    images: ["/assets/sabshots-hero.png"],
  },
};

// Structured data (JSON-LD): tells Google and AI assistants that SabShots is a
// Paris photography business run by Yassir, with links to GetYourGuide and
// Instagram. Helps the brand get recognized and cited.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sabshots.com/#business",
      name: "SabShots",
      description:
        "Private photo sessions in Paris by SabShots, a photographer with 8 years of experience.",
      url: "https://www.sabshots.com",
      image: "https://www.sabshots.com/assets/sabshots-hero.png",
      logo: "https://www.sabshots.com/assets/logo-dark.svg",
      email: "sabounjiyassir@gmail.com",
      areaServed: { "@type": "City", name: "Paris" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      founder: { "@type": "Person", name: "Yassir" },
      knowsLanguage: ["English", "French", "Arabic", "Spanish"],
      sameAs: [
        "https://www.getyourguide.com/yassir-sabounji-s514149/",
        "https://www.instagram.com/sab.shots/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sabshots.com/#website",
      name: "SabShots",
      url: "https://www.sabshots.com",
      inLanguage: "en",
      publisher: { "@id": "https://www.sabshots.com/#business" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ImageProtection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
