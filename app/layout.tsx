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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cosmic-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
