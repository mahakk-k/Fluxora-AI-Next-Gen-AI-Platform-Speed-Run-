import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluxora AI — AI Data Automation Platform",
  description:
    "Fluxora AI helps teams automate data workflows, connect tools, monitor pipelines, and transform operational data into intelligent decisions.",
  openGraph: {
    title: "Fluxora AI — Intelligence in Motion",
    description:
      "Automate data workflows, connect systems, and turn operational data into intelligent decisions.",
    type: "website",
    url: "https://fluxora-ai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluxora AI — Intelligence in Motion",
    description:
      "Automate data workflows, connect systems, and turn operational data into intelligent decisions.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-arctic-powder text-oceanic-noir antialiased">
        {children}
      </body>
    </html>
  );
}
