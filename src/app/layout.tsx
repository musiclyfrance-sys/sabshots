import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabshots.com"),
  title: "Paris Photographer for Private Photo Sessions | SabShots",
  description:
    "Book a private photo session in Paris with SabShots, a photographer with 8 years of experience capturing the Eiffel Tower, couples, proposals and more.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SabShots",
    locale: "en_US",
    url: "https://www.sabshots.com",
    title: "Paris Photographer for Private Photo Sessions | SabShots",
    description:
      "Private photo sessions in Paris with SabShots: Eiffel Tower shoots, Instagrammable spots, couples and proposals.",
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
    title: "Paris Photographer for Private Photo Sessions | SabShots",
    description:
      "Private photo sessions in Paris with SabShots: Eiffel Tower shoots, Instagrammable spots, couples and proposals.",
    images: ["/assets/sabshots-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
