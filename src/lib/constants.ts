export const SITE = {
  name: "LUNE",
  tagline: "Celestial Fragrances",
  description:
    "LUNE Perfumes — two celestial fragrances born from the cosmos. Jupitor radiates golden warmth; Pluto whispers icy mystery.",
  url: "https://luneperfumes.com",
} as const;

export const NAV_LINKS = [
  { label: "Jupitor", href: "/jupitor" },
  { label: "Pluto", href: "/pluto" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const COLORS = {
  bgPrimary: "#0B1026",
  bgSecondary: "#F2E8D8",
  textLight: "#F7F8FB",
  textMuted: "#D6D9E6",
  accentGold: "#C9A227",
  accentBrass: "#B48A5A",
} as const;
