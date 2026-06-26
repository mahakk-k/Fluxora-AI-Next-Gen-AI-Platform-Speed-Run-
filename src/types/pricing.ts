export type CurrencyCode = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";
export type PricingTierKey = "starter" | "scale" | "enterprise";

export type PricingTier = {
  key: PricingTierKey;
  name: string;
  description: string;
  baseMonthlyUsd: number;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export type CurrencyConfig = {
  code: CurrencyCode;
  symbol: string;
  locale: string;
  exchangeRateFromUsd: number;
  regionalTariff: number;
};
