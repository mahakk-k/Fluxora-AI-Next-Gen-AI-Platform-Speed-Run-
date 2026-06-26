"use client";

import { useEffect, useRef, useCallback } from "react";
import { features } from "@/config/features.config";
import Icon from "@/components/ui/Icon";

const MOBILE_QUERY = "(max-width: 767px)";

export default function BentoAccordionIsland() {
  const activeIndexRef = useRef<number>(0);
  const matchMediaRef = useRef<MediaQueryList | null>(null);
  const isMobileRef = useRef<boolean>(false);

  const updateDesktopCard = useCallback((index: number) => {
    activeIndexRef.current = index;
    const cards = document.querySelectorAll<HTMLElement>("[data-bento-card]");
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
        card.setAttribute("data-active", "true");
      } else {
        card.classList.remove("active");
        card.setAttribute("data-active", "false");
      }
    });
  }, []);

  const updateAccordion = useCallback((index: number) => {
    activeIndexRef.current = index;
    const triggers = document.querySelectorAll<HTMLElement>(
      "[data-accordion-trigger]"
    );
    const panels = document.querySelectorAll<HTMLElement>(
      "[data-accordion-panel]"
    );

    triggers.forEach((trigger, i) => {
      if (i === index) {
        trigger.setAttribute("data-open", "true");
        trigger.setAttribute("aria-expanded", "true");
      } else {
        trigger.setAttribute("data-open", "false");
        trigger.setAttribute("aria-expanded", "false");
      }
    });

    panels.forEach((panel, i) => {
      if (i === index) {
        panel.setAttribute("data-open", "true");
      } else {
        panel.setAttribute("data-open", "false");
      }
    });
  }, []);

  const handleBentoInteraction = useCallback(
    (index: number) => {
      updateDesktopCard(index);
    },
    [updateDesktopCard]
  );

  const handleAccordionClick = useCallback(
    (index: number) => {
      if (activeIndexRef.current === index) {
        updateAccordion(-1);
        activeIndexRef.current = -1;
      } else {
        updateAccordion(index);
      }
    },
    [updateAccordion]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    matchMediaRef.current = window.matchMedia(MOBILE_QUERY);
    isMobileRef.current = matchMediaRef.current.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      const wasMobile = isMobileRef.current;
      isMobileRef.current = e.matches;

      // If transitioning from desktop to mobile, open the matching accordion panel
      if (!wasMobile && e.matches && activeIndexRef.current >= 0) {
        updateAccordion(activeIndexRef.current);
      }
      // If transitioning from mobile to desktop, highlight the matching bento card
      if (wasMobile && !e.matches && activeIndexRef.current >= 0) {
        updateDesktopCard(activeIndexRef.current);
      }
    };

    matchMediaRef.current.addEventListener("change", handleChange);

    // Initialize desktop active card
    if (!isMobileRef.current) {
      updateDesktopCard(0);
    }

    return () => {
      matchMediaRef.current?.removeEventListener("change", handleChange);
    };
  }, [updateAccordion, updateDesktopCard]);

  return (
    <div id="features">
      {/* Desktop Bento Grid - hidden on mobile */}
      <div className="hidden md:block">
        <div className="bento-grid">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              data-bento-card
              data-active={i === 0 ? "true" : "false"}
              className={`bento-card ${i === 0 ? "active" : ""}`}
              role="button"
              tabIndex={0}
              onMouseEnter={() => handleBentoInteraction(i)}
              onFocus={() => handleBentoInteraction(i)}
              onClick={() => handleBentoInteraction(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleBentoInteraction(i);
                }
              }}
              aria-label={feature.title}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-nocturnal-expedition/10">
                <Icon name={feature.icon} size={20} />
              </div>
              <h3 className="font-heading text-base font-bold text-oceanic-noir">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nocturnal-expedition/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Accordion - hidden on desktop */}
      <div className="flex flex-col gap-2 md:hidden">
        {features.map((feature, i) => (
          <div key={feature.title}>
            <button
              data-accordion-trigger
              data-open={i === 0 ? "true" : "false"}
              aria-expanded={i === 0 ? "true" : "false"}
              aria-controls={`accordion-panel-${i}`}
              className="accordion-trigger"
              onClick={() => handleAccordionClick(i)}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-nocturnal-expedition/10">
                  <Icon name={feature.icon} size={16} />
                </span>
                <span className="font-heading text-sm font-bold text-oceanic-noir">
                  {feature.title}
                </span>
              </span>
              <span className="accordion-chevron">
                <Icon name="chevron-down" size={16} />
              </span>
            </button>
            <div
              id={`accordion-panel-${i}`}
              data-accordion-panel
              data-open={i === 0 ? "true" : "false"}
              role="region"
              aria-labelledby={`accordion-trigger-${i}`}
              className="accordion-panel"
            >
              <div className="border border-t-0 border-mystic-mint bg-arctic-powder/50 px-4 pb-4 pt-2 text-sm leading-relaxed text-nocturnal-expedition/70">
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
