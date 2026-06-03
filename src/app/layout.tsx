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
  title: "SabShots | Paris Photographer for Private Photo Sessions",
  description:
    "Book a private photo session in Paris with SabShots. With 8 years of experience, I turn your moments at the Eiffel Tower and beyond into timeless photos.",
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
