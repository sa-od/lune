import type { Metadata } from "next";
import { getFragrance } from "@/lib/data";
import { SITE } from "@/lib/constants";
import FragranceHero from "@/components/sections/FragranceHero";
import FragranceNarrative from "@/components/sections/FragranceNarrative";
import ScentPyramid from "@/components/sections/ScentPyramid";
import Accords from "@/components/sections/Accords";
import MoodOccasion from "@/components/sections/MoodOccasion";
import IngredientSpotlight from "@/components/sections/IngredientSpotlight";
import FragranceInterlude from "@/components/sections/FragranceInterlude";
import FragranceDetails from "@/components/sections/FragranceDetails";

const fragrance = getFragrance("pluto")!;

export const metadata: Metadata = {
  title: `${fragrance.name} — ${fragrance.details.family}`,
  description: fragrance.heroDescription,
};

export default function PlutoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${SITE.name} ${fragrance.name}`,
            description: fragrance.heroDescription,
            brand: {
              "@type": "Brand",
              name: SITE.name,
            },
            category: fragrance.details.family,
          }),
        }}
      />
      <FragranceHero fragrance={fragrance} />
      <FragranceNarrative fragrance={fragrance} />
      <ScentPyramid fragrance={fragrance} />
      <Accords fragrance={fragrance} />
      <MoodOccasion fragrance={fragrance} />
      <IngredientSpotlight fragrance={fragrance} />
      <FragranceInterlude fragrance={fragrance} />
      <FragranceDetails fragrance={fragrance} />
    </>
  );
}
