import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import { LangProvider } from "@/components/LangProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eldorsattarov.uz"),
  title: "Eldor Sattarov — Middle+ Frontend Engineer (React/Next.js)",
  description:
    "Middle+ Frontend Engineer from Tashkent: React, Next.js, TypeScript, plus backend. Interfaces for aviation, banking and security systems. Open to work.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Eldor Sattarov — Middle+ Frontend Engineer (React/Next.js)",
    description: "React · Next.js · TypeScript — Tashkent, Uzbekistan. Open to work.",
    url: "/",
    siteName: "Eldor Sattarov",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#070a10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="font-sans">
        <LangProvider>
          <SmoothScroll />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
