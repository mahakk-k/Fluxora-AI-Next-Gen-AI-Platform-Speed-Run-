import { currencyMatrix } from "@/config/pricing.config";
import type { CurrencyCode } from "@/types/pricing";

export function formatCurrency(
  value: number,
  currency: CurrencyCode
): string {
  const config = currencyMatrix[currency];

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}
