import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import RevealProvider from "@/components/RevealProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sabshots.vercel.app"),
  title: "SabShots — Paris Photographer | Private Photo Sessions",
  description:
    "Private photo sessions in Paris with SabShots, a professional photographer with 8 years of experience. Eiffel Tower shoots, Instagrammable spots, and custom sessions for over 500 clients worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <RevealProvider />
        {children}
      </body>
    </html>
  );
}
