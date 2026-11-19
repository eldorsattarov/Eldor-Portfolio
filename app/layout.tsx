import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import { LangProvider } from "@/components/LangProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Eldor Sattarov — Full-stack developer",
  description:
    "Full-stack developer from Tashkent. Interfaces and products for aviation, banking and security systems — React, Next.js, NestJS, TypeScript.",
  openGraph: {
    title: "Eldor Sattarov — Full-stack developer",
    description: "React · Next.js · NestJS · TypeScript — Tashkent, Uzbekistan",
    images: ["/images/eldor.jpg"],
    type: "website",
  },
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
