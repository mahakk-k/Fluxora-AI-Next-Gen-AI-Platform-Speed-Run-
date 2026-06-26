export const ANNUAL_DISCOUNT = 0.2;

export const billingMatrix = {
  monthly: {
    months: 1,
    discountMultiplier: 1,
  },
  annual: {
    months: 12,
    discountMultiplier: 1 - ANNUAL_DISCOUNT,
  },
} as const;

export const currencyMatrix = {
  USD: {
    code: "USD" as const,
    symbol: "$",
    locale: "en-US",
    exchangeRateFromUsd: 1,
    regionalTariff: 1,
  },
  EUR: {
    code: "EUR" as const,
    symbol: "€",
    locale: "de-DE",
    exchangeRateFromUsd: 0.92,
    regionalTariff: 1.08,
  },
  INR: {
    code: "INR" as const,
    symbol: "₹",
    locale: "en-IN",
    exchangeRateFromUsd: 83,
    regionalTariff: 0.82,
  },
} as const;

export const pricingTiers = [
  {
    key: "starter" as const,
    name: "Starter",
    description: "For small teams automating essential data workflows.",
    baseMonthlyUsd: 49,
    features: [
      "5 automated workflows",
      "10 connected sources",
      "Basic AI routing",
      "Email support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    key: "scale" as const,
    name: "Scale",
    description: "For growing teams managing high-volume operations.",
    baseMonthlyUsd: 149,
    features: [
      "Unlimited workflows",
      "Advanced AI routing",
      "Pipeline observability",
      "Priority support",
    ],
    cta: "Start Automating",
    highlighted: true,
  },
  {
    key: "enterprise" as const,
    name: "Enterprise",
    description:
      "For organizations requiring advanced governance and support.",
    baseMonthlyUsd: 399,
    features: [
      "Custom workflow limits",
      "Advanced governance",
      "Dedicated success manager",
      "Enterprise security review",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
] as const;
