import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sgcm-mining.com"),
  verification: {
    google: "RK4mRHy-DdX-1MGRlwNBHYfY9lXM7r19FHlnb6wNhV8",
  },
  title: "SGCM — Mineral Supply Chain Facilitator",
  description: "Société de Gestion et Consultation Minières (SGCM) is a mineral supply chain facilitator headquartered in Kinshasa, structuring compliant, traceable, and responsible mineral flows from the DRC to international markets.",
  keywords: ["SGCM", "mineral supply chain", "DRC", "copper cathode", "compliance", "traceability", "Kinshasa", "Congo"],
  openGraph: {
    title: "SGCM – Mineral Supply Chain Facilitator",
    description: "Structuring responsible mineral supply chains from the DRC. Compliance, traceability, and logistics for certified copper, gold, and cobalt.",
    url: "https://sgcm-mining.com",
    siteName: "SGCM",
    images: [
    {
      url: "https://sgcm-mining.com/preview.jpg",
      width: 1200,
      height: 630,
      alt: "SGCM – Certified Mineral Supply Chains",
   },
  ],
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
