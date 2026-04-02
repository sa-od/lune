import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { fragrances } from "@/lib/data";

export default function FragranceShowcase() {
  return (
    <section id="collection" className="bg-bg-primary px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
              The Collection
            </p>
            <h2 className="font-display text-3xl font-light text-text-light md:text-4xl lg:text-5xl">
              Two worlds. One constellation.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
          {fragrances.map((fragrance, i) => (
            <FadeIn key={fragrance.slug} delay={i * 0.15} direction="up">
              <Link
                href={`/${fragrance.slug}`}
                className="group relative block overflow-hidden"
              >
                {/* Card */}
                <div
                  className="flex flex-col items-center rounded-sm border border-white/5 px-8 py-20 text-center transition-all duration-500 hover:border-white/10 md:py-28"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${fragrance.palette.primary}15 0%, transparent 70%)`,
                  }}
                >
                  {/* Fragrance name */}
                  <span className="mb-2 text-xs font-light tracking-[0.2em] uppercase text-accent-gold/70">
                    {fragrance.details.family}
                  </span>
                  <h3
                    className="font-display text-4xl font-light text-text-light md:text-5xl lg:text-6xl"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {fragrance.name}
                  </h3>

                  {/* Divider */}
                  <div
                    className="my-8 h-px w-12 transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: fragrance.palette.primary }}
                  />

                  {/* Tagline */}
                  <p className="max-w-xs text-sm font-light leading-relaxed text-text-muted">
                    {fragrance.tagline}
                  </p>

                  {/* Accords */}
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {fragrance.accords.slice(0, 3).map((accord) => (
                      <span
                        key={accord}
                        className="text-[11px] font-light tracking-[0.15em] uppercase text-text-muted/50"
                      >
                        {accord}
                      </span>
                    ))}
                  </div>

                  {/* Discover link */}
                  <span className="mt-10 text-xs font-light tracking-[0.15em] uppercase text-accent-gold/60 transition-colors duration-300 group-hover:text-accent-gold">
                    Discover {fragrance.name}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
