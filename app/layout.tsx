import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGCM — Mineral Supply Chain Facilitator",
  description: "Société de Gestion et Consultation Minières (SGCM) is a mineral supply chain facilitator headquartered in Kinshasa, structuring compliant, traceable, and responsible mineral flows from the DRC to international markets.",
  keywords: ["SGCM", "mineral supply chain", "DRC", "copper cathode", "compliance", "traceability", "Kinshasa", "Congo"],
  openGraph: {
    title: "SGCM — Mineral Supply Chain Facilitator",
    description: "Structuring responsible mineral supply chains from the DRC. Compliance, traceability, and logistics for certified copper, gold, and cobalt.",
    siteName: "SGCM",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
