"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqItems } from "@/config/faq.config";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white/40 py-20"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeader
          label="FAQ"
          title="Common questions, clear answers"
          description="Everything you need to know about Fluxora AI before getting started."
        />

        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, i) => (
            <div key={i}>
              <button
                className="faq-trigger"
                onClick={() => toggleItem(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="pr-4 font-heading text-sm font-bold text-oceanic-noir sm:text-base">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="20"
                  height="20"
                  className="flex-shrink-0 transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform:
                      openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                className="faq-panel"
                data-open={openIndex === i ? "true" : "false"}
              >
                <p className="pb-4 pt-1 text-sm leading-relaxed text-nocturnal-expedition/60 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
