import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroDashboardVisual from "@/components/visuals/HeroDashboardVisual";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-4 pt-16 sm:pt-24 lg:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mystic-mint/40 via-arctic-powder to-arctic-powder" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-mystic-mint bg-white/80 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-forsythia animate-pulse-glow" />
            <span className="font-heading text-xs font-medium text-nocturnal-expedition">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 font-heading text-4xl font-bold leading-[1.1] text-oceanic-noir sm:text-5xl lg:text-6xl">
            Automate data workflows with{" "}
            <span className="text-deep-saffron">intelligence in motion.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-nocturnal-expedition/70 sm:text-xl">
            Fluxora AI connects your tools, cleans and routes data, monitors
            workflows, and turns complex operations into automated decisions
            without rebuilding your internal systems from scratch.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#pricing" variant="primary" className="px-8 py-3.5 text-base">
              {siteConfig.primaryCTA}
            </Button>
            <Button href="#pricing" variant="outline" className="px-8 py-3.5 text-base">
              {siteConfig.secondaryCTA}
            </Button>
          </div>
        </div>

        {/* Dashboard visual */}
        <HeroDashboardVisual />
      </Container>
    </section>
  );
}
