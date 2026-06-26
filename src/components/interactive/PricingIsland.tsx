"use client";

import { useEffect, useRef } from "react";
import { pricingTiers, currencyMatrix, billingMatrix } from "@/config/pricing.config";
import { computePrice } from "@/lib/pricing";
import { formatCurrency } from "@/lib/formatCurrency";
import type { CurrencyCode, BillingCycle } from "@/types/pricing";

export default function PricingIsland() {
  const currencyRef = useRef<CurrencyCode>("USD");
  const billingRef = useRef<BillingCycle>("monthly");
  const isUpdatingRef = useRef(false);

  const updatePrices = () => {
    if (isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const currency = currencyRef.current;
    const billing = billingRef.current;

    // Update only the price text nodes
    const priceNodes = document.querySelectorAll<HTMLElement>("[data-price-node]");
    priceNodes.forEach((node) => {
      const tierKey = node.getAttribute("data-tier") as "starter" | "scale" | "enterprise";
      const tier = pricingTiers.find((t) => t.key === tierKey);
      if (tier) {
        const price = computePrice(tier.baseMonthlyUsd, currency, billing);
        node.textContent = formatCurrency(price, currency);
      }
    });

    // Update the period label
    const periodNodes = document.querySelectorAll<HTMLElement>("[data-period-node]");
    periodNodes.forEach((node) => {
      node.textContent = billing === "annual" ? "/mo (billed annually)" : "/mo";
    });

    // Update savings badge
    const savingsNodes = document.querySelectorAll<HTMLElement>("[data-savings-node]");
    savingsNodes.forEach((node) => {
      if (billing === "annual") {
        node.style.display = "inline-block";
      } else {
        node.style.display = "none";
      }
    });

    isUpdatingRef.current = false;
  };

  const handleCurrencyChange = (code: CurrencyCode) => {
    currencyRef.current = code;

    // Update currency selector UI
    const currencyButtons = document.querySelectorAll<HTMLElement>("[data-currency-option]");
    currencyButtons.forEach((btn) => {
      btn.setAttribute("data-active", btn.getAttribute("data-currency-code") === code ? "true" : "false");
    });

    updatePrices();
  };

  const handleBillingChange = (cycle: BillingCycle) => {
    billingRef.current = cycle;

    // Update billing toggle UI
    const billingButtons = document.querySelectorAll<HTMLElement>("[data-billing-option]");
    billingButtons.forEach((btn) => {
      btn.setAttribute("data-active", btn.getAttribute("data-billing-cycle") === cycle ? "true" : "false");
    });

    updatePrices();
  };

  useEffect(() => {
    // Initialize prices on mount
    updatePrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currencyCodes: CurrencyCode[] = ["USD", "EUR", "INR"];

  return (
    <div>
      {/* Controls */}
      <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        {/* Currency selector */}
        <div className="currency-selector">
          {currencyCodes.map((code) => (
            <button
              key={code}
              data-currency-option
              data-currency-code={code}
              data-active={code === "USD" ? "true" : "false"}
              className="currency-option"
              onClick={() => handleCurrencyChange(code)}
            >
              {currencyMatrix[code].symbol} {code}
            </button>
          ))}
        </div>

        {/* Billing toggle */}
        <div className="billing-toggle">
          <button
            data-billing-option
            data-billing-cycle="monthly"
            data-active="true"
            className="billing-toggle-option"
            onClick={() => handleBillingChange("monthly")}
          >
            Monthly
          </button>
          <button
            data-billing-option
            data-billing-cycle="annual"
            data-active="false"
            className="billing-toggle-option"
            onClick={() => handleBillingChange("annual")}
          >
            Annual
            <span className="ml-1 text-[10px] text-deep-saffron">−20%</span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.key}
            className={`relative rounded-xl border p-6 transition-shadow duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              tier.highlighted
                ? "border-forsythia bg-white shadow-lg"
                : "border-mystic-mint bg-white/80"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forsythia px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-oceanic-noir">
                Most Popular
              </span>
            )}

            <h3 className="font-heading text-lg font-bold text-oceanic-noir">
              {tier.name}
            </h3>
            <p className="mt-1 text-sm text-nocturnal-expedition/60">
              {tier.description}
            </p>

            <div className="mt-4 flex items-baseline gap-1">
              <span
                data-price-node
                data-tier={tier.key}
                className="font-heading text-4xl font-bold text-oceanic-noir"
              >
                {formatCurrency(
                  computePrice(tier.baseMonthlyUsd, "USD", "monthly"),
                  "USD"
                )}
              </span>
              <span
                data-period-node
                className="text-sm text-nocturnal-expedition/50"
              >
                /mo
              </span>
            </div>

            <span
              data-savings-node
              style={{ display: "none" }}
              className="mt-1 inline-block font-heading text-xs font-medium text-deep-saffron"
            >
              Save 20% with annual billing
            </span>

            <ul className="mt-6 space-y-2.5">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-nocturnal-expedition/70"
                >
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forsythia" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-6 block w-full rounded-lg py-3 text-center font-heading text-sm font-medium transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                tier.highlighted
                  ? "bg-forsythia text-oceanic-noir hover:bg-deep-saffron"
                  : "border-2 border-nocturnal-expedition text-oceanic-noir hover:bg-nocturnal-expedition hover:text-arctic-powder"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
