import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingIsland from "@/components/interactive/PricingIsland";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeader
          label="Pricing"
          title="Simple, transparent pricing"
          description="Choose the plan that fits your team. Switch currencies or billing cycles — prices update instantly without reloading the page."
        />
        <PricingIsland />
      </Container>
    </section>
  );
}
