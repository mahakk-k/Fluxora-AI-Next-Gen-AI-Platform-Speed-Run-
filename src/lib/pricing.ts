import { billingMatrix, currencyMatrix } from "@/config/pricing.config";
import type { BillingCycle, CurrencyCode } from "@/types/pricing";

export function computePrice(
  baseMonthlyUsd: number,
  currency: CurrencyCode,
  billing: BillingCycle
): number {
  const currencyConfig = currencyMatrix[currency];
  const billingConfig = billingMatrix[billing];

  return (
    baseMonthlyUsd *
    currencyConfig.exchangeRateFromUsd *
    currencyConfig.regionalTariff *
    billingConfig.months *
    billingConfig.discountMultiplier
  );
}
