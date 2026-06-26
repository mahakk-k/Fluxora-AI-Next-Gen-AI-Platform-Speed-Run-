const steps = [
  {
    step: "01",
    title: "Connect",
    description: "Link your tools, APIs, and data sources.",
    accent: "bg-forsythia",
  },
  {
    step: "02",
    title: "Automate",
    description: "Build intelligent workflows with AI routing.",
    accent: "bg-deep-saffron",
  },
  {
    step: "03",
    title: "Monitor",
    description: "Track pipeline health in real time.",
    accent: "bg-nocturnal-expedition",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Improve decisions with operational insights.",
    accent: "bg-forsythia",
  },
];

export default function WorkflowDiagram() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((item, i) => (
        <div key={item.step} className="relative">
          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-mystic-mint lg:block" />
          )}
          <div className="rounded-xl border border-mystic-mint bg-white p-5 transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-forsythia hover:shadow-md">
            <div
              className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg ${item.accent} font-heading text-xs font-bold text-oceanic-noir`}
            >
              {item.step}
            </div>
            <h3 className="font-heading text-base font-bold text-oceanic-noir">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-nocturnal-expedition/60">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
