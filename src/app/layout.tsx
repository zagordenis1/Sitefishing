import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Sitefishing — Магазин рибальських снастей",
    template: "%s · Sitefishing",
  },
  description:
    "Магазин якісних рибальських снастей: вудилища, котушки, приманки, аксесуари. Доставка по Україні.",
  keywords: [
    "Sitefishing",
    "рибальський магазин",
    "fishing shop",
    "fishing tackle",
    "вудилища",
    "спінінг",
    "snasti",
    "fishing rods",
    "приманки",
  ],
  openGraph: {
    type: "website",
    title: "Sitefishing — Магазин рибальських снастей",
    description:
      "Преміальні снасті для спінінгістів та фідеристів. Доставка по Україні.",
    siteName: "Sitefishing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecfeff" },
    { media: "(prefers-color-scheme: dark)", color: "#060c16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
