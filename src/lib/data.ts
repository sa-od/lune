export interface Note {
  name: string;
  description: string;
}

export interface ScentLayer {
  label: "Top" | "Heart" | "Base";
  notes: Note[];
}

export interface Fragrance {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  narrative: string[];
  scentPyramid: ScentLayer[];
  accords: string[];
  mood: string;
  occasion: string;
  ingredients: {
    name: string;
    origin: string;
    description: string;
  }[];
  details: {
    size: string;
    concentration: string;
    family: string;
  };
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const fragrances: Fragrance[] = [
  {
    slug: "jupitor",
    name: "Jupitor",
    tagline: "The warmth of a thousand golden storms.",
    heroDescription:
      "A radiant amber fragrance that captures the bold, expansive energy of the solar system's grandest planet.",
    narrative: [
      "Jupitor opens like the first light breaking over a golden horizon — bright bergamot and saffron threads ignite against sun-warmed skin, carrying the exhilarating rush of a world waking to its own vastness.",
      "At its heart, a molten core of amber and jasmine absolue spirals like the Great Red Spot — magnetic, enduring, impossible to look away from. Rose de Mai adds a velvety depth that softens the intensity without diminishing it.",
      "The base settles into something ancient and knowing: sandalwood, tonka bean, and a whisper of labdanum resin that clings like the memory of a day you never want to end.",
    ],
    scentPyramid: [
      {
        label: "Top",
        notes: [
          {
            name: "Bergamot",
            description: "Bright, citrus-forward opening with golden effervescence",
          },
          {
            name: "Saffron",
            description: "Warm, honeyed spice that glows like liquid amber",
          },
          {
            name: "Pink Pepper",
            description: "A sparkling, peppery lift that adds dimension",
          },
        ],
      },
      {
        label: "Heart",
        notes: [
          {
            name: "Amber",
            description: "Rich, resinous warmth — the fragrance's golden core",
          },
          {
            name: "Jasmine Absolue",
            description: "Opulent white floral with narcotic depth",
          },
          {
            name: "Rose de Mai",
            description: "Velvety, honeyed rose from the fields of Grasse",
          },
        ],
      },
      {
        label: "Base",
        notes: [
          {
            name: "Sandalwood",
            description: "Creamy, meditative warmth that grounds the composition",
          },
          {
            name: "Tonka Bean",
            description: "Sweet, almond-vanilla warmth with coumarin softness",
          },
          {
            name: "Labdanum",
            description: "Ancient amber resin — smoky, leathery, eternal",
          },
        ],
      },
    ],
    accords: ["Golden Amber", "Warm Spice", "White Floral", "Creamy Wood"],
    mood: "Confident, radiant, expansive. Jupitor is daytime energy distilled — the feeling of stepping into sunlight after a long winter.",
    occasion:
      "For golden-hour gatherings, gallery openings, the first warm day of the year. Wear it when you want to be remembered.",
    ingredients: [
      {
        name: "Saffron",
        origin: "Kashmir, India",
        description:
          "Hand-harvested at dawn from Crocus sativus flowers. Each bloom yields only three stigmas, making it more precious than gold by weight.",
      },
      {
        name: "Rose de Mai",
        origin: "Grasse, France",
        description:
          "Centifolia roses picked in May during a two-week window. Five tons of petals produce just one kilogram of absolue.",
      },
      {
        name: "Sandalwood",
        origin: "Mysore, India",
        description:
          "Sustainably harvested Santalum album, aged for decades. The heartwood develops its characteristic creamy richness over thirty years of growth.",
      },
    ],
    details: {
      size: "50ml / 1.7 fl oz",
      concentration: "Eau de Parfum",
      family: "Amber Floral",
    },
    palette: {
      primary: "#C9874D",
      secondary: "#E8C87A",
      accent: "#8B5E3C",
    },
  },
  {
    slug: "pluto",
    name: "Pluto",
    tagline: "What lingers at the edge of the known.",
    heroDescription:
      "A cool, enigmatic fragrance drawn from the icy silence of the solar system's most distant world.",
    narrative: [
      "Pluto arrives like a breath of frozen air in a dark cathedral — aldehydes and violet leaf create an opening so clean it feels like silence made visible, crystalline and sharp against the void.",
      "The heart is a study in contradictions: iris butter and black tea weave together in smoky, powdery intimacy. Ambrette seed adds an almost imperceptible musk that makes you lean closer, searching for something you can't quite name.",
      "In the base, vetiver and ambergris anchor the composition to something ancient and oceanic, while a thread of incense smoke curls upward and disappears — the last signal from a world four billion miles away.",
    ],
    scentPyramid: [
      {
        label: "Top",
        notes: [
          {
            name: "Aldehydes",
            description: "Crystalline, metallic shimmer — cold light on dark ice",
          },
          {
            name: "Violet Leaf",
            description: "Green, cool, slightly aquatic with silver undertones",
          },
          {
            name: "Juniper Berry",
            description: "Crisp, resinous freshness like frozen conifer forests",
          },
        ],
      },
      {
        label: "Heart",
        notes: [
          {
            name: "Iris Butter",
            description: "Powdery, violet-grey elegance — the soul of the fragrance",
          },
          {
            name: "Black Tea",
            description: "Smoky, tannic warmth that grounds the coolness",
          },
          {
            name: "Ambrette Seed",
            description: "A clean, skin-like musk with barely-there sweetness",
          },
        ],
      },
      {
        label: "Base",
        notes: [
          {
            name: "Vetiver",
            description: "Dark, earthy, smoky — like wet stone in moonlight",
          },
          {
            name: "Ambergris",
            description: "Oceanic, mineral, timeless — the scent of deep water",
          },
          {
            name: "Incense",
            description: "Ethereal smoke that fades into contemplative silence",
          },
        ],
      },
    ],
    accords: ["Icy Aldehyde", "Powdery Iris", "Dark Vetiver", "Smoky Incense"],
    mood: "Mysterious, intimate, contemplative. Pluto is nighttime stillness — the quiet confidence of someone who doesn't need to be seen to be felt.",
    occasion:
      "For candlelit dinners, late-night conversations, winter evenings. Wear it when you want to be discovered, not announced.",
    ingredients: [
      {
        name: "Iris Butter",
        origin: "Florence, Italy",
        description:
          "Orris root aged for three years, then steam-distilled into iris butter. One of perfumery's most precious materials — it takes six tons of roots to produce one kilogram.",
      },
      {
        name: "Ambergris",
        origin: "New Zealand Coast",
        description:
          "Ethically sourced from beach deposits. This oceanic treasure develops its complex, mineral character over decades of saltwater exposure.",
      },
      {
        name: "Vetiver",
        origin: "Haiti",
        description:
          "Wild-harvested roots dried in the Caribbean sun, then distilled. Haitian vetiver is prized for its smoky, chocolate-like depth.",
      },
    ],
    details: {
      size: "50ml / 1.7 fl oz",
      concentration: "Eau de Parfum",
      family: "Woody Aromatic",
    },
    palette: {
      primary: "#2A2D5E",
      secondary: "#7B8CC4",
      accent: "#4A3F6B",
    },
  },
];

export function getFragrance(slug: string): Fragrance | undefined {
  return fragrances.find((f) => f.slug === slug);
}
