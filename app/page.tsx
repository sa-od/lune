import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./components/SmoothScroll"), {
  ssr: false,
});
const ParticleBackground = dynamic(
  () => import("./components/ParticleBackground"),
  { ssr: false }
);
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const JupiterSection = dynamic(
  () => import("./components/JupiterSection"),
  { ssr: false }
);
const PlutoSection = dynamic(() => import("./components/PlutoSection"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <ParticleBackground />
      <main className="relative z-10">
        <Hero />
        <JupiterSection />
        <PlutoSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
