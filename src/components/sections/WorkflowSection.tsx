import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import WorkflowDiagram from "@/components/visuals/WorkflowDiagram";

export default function WorkflowSection() {
  return (
    <section id="platform" className="py-20">
      <Container>
        <SectionHeader
          label="Platform"
          title="From fragmented tools to intelligent automation"
          description="Fluxora AI brings your disconnected systems together into a unified, intelligent automation layer that connects, routes, monitors, and optimizes your data workflows."
        />
        <WorkflowDiagram />
      </Container>
    </section>
  );
}
