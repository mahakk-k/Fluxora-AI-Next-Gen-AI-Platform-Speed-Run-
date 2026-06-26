export const features = [
  {
    title: "AI Workflow Routing",
    description:
      "Automatically route data tasks based on rules, context, anomalies, and business logic.",
    icon: "arrow-path",
  },
  {
    title: "Smart Data Transformation",
    description:
      "Clean, normalize, deduplicate, and enrich operational data before it reaches your teams.",
    icon: "cube-16-solid",
  },
  {
    title: "Pipeline Observability",
    description:
      "Monitor workflow health, sync status, failures, latency, and automation reliability.",
    icon: "chart-pie",
  },
  {
    title: "Integration Layer",
    description:
      "Connect APIs, databases, SaaS tools, spreadsheets, and internal systems from one automation layer.",
    icon: "link",
  },
  {
    title: "Decision Analytics",
    description:
      "Turn workflow events into operational insights your team can act on immediately.",
    icon: "arrow-trending-up",
  },
  {
    title: "Governance Controls",
    description:
      "Manage permissions, audit trails, workflow ownership, and secure execution paths.",
    icon: "cog-8-tooth",
  },
] as const;

export type FeatureKey = (typeof features)[number]["icon"];
