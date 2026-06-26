import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoAccordionIsland from "@/components/interactive/BentoAccordionIsland";

export default function FeatureShowcase() {
  return (
    <section className="bg-white/40 py-20" aria-labelledby="features-heading">
      <Container>
        <SectionHeader
          label="Features"
          title="Built for teams that move data with intelligence"
          description="Every capability in Fluxora AI is designed to reduce manual work, improve reliability, and turn operational data into actionable decisions."
        />
        <BentoAccordionIsland />
      </Container>
    </section>
  );
}
