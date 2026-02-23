import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUNE — Cosmic Fragrances | Jupiter & Pluto",
  description:
    "Discover Jupiter and Pluto — luxury eau de parfum by Lune. Cosmic fragrances born from ancient forests and celestial oceans. Shop at shoplune.in",
  keywords: [
    "perfume",
    "luxury fragrance",
    "Lune",
    "Jupiter",
    "Pluto",
    "eau de parfum",
    "cosmic fragrance",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "LUNE — Cosmic Fragrances",
    description: "Jupiter & Pluto. Two universes. One brand.",
    url: "https://shoplune.in",
    siteName: "Lune",
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
      <head></head>
      <body className="bg-cosmic-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
