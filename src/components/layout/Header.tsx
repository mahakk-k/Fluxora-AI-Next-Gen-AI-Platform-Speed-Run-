import { siteConfig } from "@/config/site.config";
import { navigationItems } from "@/config/navigation.config";
import MobileNavIsland from "@/components/interactive/MobileNavIsland";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mystic-mint/60 bg-arctic-powder/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[60px] items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-nocturnal-expedition">
              <span className="font-heading text-sm font-bold text-forsythia">
                F
              </span>
            </span>
            <span className="font-heading text-base font-bold text-oceanic-noir">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 font-heading text-sm font-medium text-nocturnal-expedition transition-colors duration-[180ms] hover:bg-mystic-mint hover:text-oceanic-noir"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#pricing"
              className="rounded-lg px-4 py-2 font-heading text-sm font-medium text-oceanic-noir transition-colors duration-[180ms] hover:bg-mystic-mint"
            >
              View Pricing
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-forsythia px-4 py-2 font-heading text-sm font-medium text-oceanic-noir transition-colors duration-[180ms] hover:bg-deep-saffron"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu */}
          <MobileNavIsland />
        </div>
      </Container>
    </header>
  );
}
