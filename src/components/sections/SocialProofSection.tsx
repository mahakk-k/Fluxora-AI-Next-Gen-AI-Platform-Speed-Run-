import Container from "@/components/ui/Container";

const metrics = [
  { value: "10M+", label: "Records Automated" },
  { value: "99.9%", label: "Workflow Uptime" },
  { value: "42%", label: "Reduction in Manual Ops" },
  { value: "5min", label: "Average Setup Time" },
];

export default function SocialProofSection() {
  return (
    <section className="border-y border-mystic-mint/60 bg-white/50 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-oceanic-noir sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-nocturnal-expedition/50">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-nocturnal-expedition/40">
          Built for data, engineering, and operations teams
        </p>
      </Container>
    </section>
  );
}
