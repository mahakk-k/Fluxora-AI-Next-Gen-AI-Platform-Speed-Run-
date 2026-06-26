"use client";

import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@/config/navigation.config";

export default function MobileNavIsland() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (isOpen) {
      menu.style.display = "flex";
      requestAnimationFrame(() => {
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
      });
    } else {
      menu.style.opacity = "0";
      menu.style.transform = "translateY(-8px)";
      setTimeout(() => {
        if (!isOpen) {
          menu.style.display = "none";
        }
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      menu.style.opacity = "0";
      menu.style.transform = "translateY(-8px)";
      menu.style.transition =
        "opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)";
      menu.style.display = "none";
    }
  }, []);

  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={toggleMenu}
        className="rounded-lg p-2 text-oceanic-noir transition-colors duration-[180ms] hover:bg-mystic-mint"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <div
        ref={menuRef}
        className="fixed inset-x-0 top-[60px] z-50 flex-col gap-2 border-b border-mystic-mint bg-arctic-powder/95 px-4 py-4 backdrop-blur-md"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 font-heading text-sm font-medium text-oceanic-noir transition-colors duration-[180ms] hover:bg-mystic-mint"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#pricing"
          onClick={closeMenu}
          className="mt-2 block rounded-lg bg-forsythia px-4 py-3 text-center font-heading text-sm font-medium text-oceanic-noir transition-colors duration-[180ms] hover:bg-deep-saffron"
        >
          Book a Demo
        </a>
      </div>
    </div>
  );
}
