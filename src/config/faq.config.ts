export const faqItems = [
  {
    question: "What tools can Fluxora AI connect to?",
    answer:
      "Fluxora AI integrates with a wide range of data sources including CRMs like Salesforce and HubSpot, databases like PostgreSQL and BigQuery, SaaS tools like Stripe and Zendesk, spreadsheet platforms, REST and GraphQL APIs, and custom internal systems. Our integration layer is designed to be extensible, so if you need a connector we don't yet offer, our team can build it quickly.",
  },
  {
    question: "Does Fluxora AI replace my data warehouse?",
    answer:
      "No. Fluxora AI is an automation and intelligence layer that works alongside your data warehouse. It connects your tools, routes and transforms data before it reaches your warehouse, and monitors pipeline health. Think of it as the intelligent orchestration layer that sits between your sources and your storage or analytics systems.",
  },
  {
    question: "How does AI workflow routing work?",
    answer:
      "Fluxora AI uses contextual rules, anomaly detection, and business logic to automatically route data tasks to the right destination. You define the rules and conditions — or let our AI suggest them — and Fluxora handles the execution, retries, and alerting. This reduces manual routing decisions and ensures data reaches the right team or system at the right time.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Fluxora AI is built with security-first principles. All data in transit is encrypted via TLS 1.3, and data at rest uses AES-256 encryption. We support role-based access controls, audit trails, and SOC 2 compliance. Enterprise customers receive a dedicated security review and can configure custom governance policies.",
  },
  {
    question: "Can engineers customize automations?",
    answer:
      "Yes. Fluxora AI provides both a visual workflow builder for non-technical users and a code-first automation SDK for engineers. You can write custom transformations in Python or SQL, define complex branching logic, and integrate with version control systems. Engineers get full observability into automation execution logs.",
  },
  {
    question: "What happens when a workflow fails?",
    answer:
      "Fluxora AI provides real-time monitoring and alerting for all workflows. When a failure occurs, you receive instant notifications via email, Slack, or webhook. The system automatically retries based on configurable policies, logs detailed error context, and surfaces the failure in your observability dashboard so your team can resolve issues quickly.",
  },
  {
    question: "Can I switch currency or billing cycle?",
    answer:
      "Yes. You can switch between monthly and annual billing at any time. Annual billing includes a flat 20% discount. You can also view pricing in INR, USD, or EUR. If you switch billing mid-cycle, prorated credits are applied to your next invoice.",
  },
  {
    question: "Do you support enterprise deployment?",
    answer:
      "Yes. Our Enterprise plan includes dedicated infrastructure, advanced governance controls, custom security reviews, SSO integration, a dedicated success manager, and SLA guarantees. We also support private cloud and on-premises deployment for organizations with strict compliance requirements.",
  },
  {
    question: "How quickly can a team get started?",
    answer:
      "Most teams are up and running within minutes. You can connect your first data source, create an automated workflow, and see results in under 15 minutes. Our onboarding wizard guides you through the setup, and our documentation covers common patterns and use cases. For enterprise teams, we offer a white-glove onboarding experience.",
  },
];
