import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

const footerLinks = {
  Product: [
    { label: "Platform", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-mystic-mint bg-oceanic-noir">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-arctic-powder/10">
                <span className="font-heading text-sm font-bold text-forsythia">
                  F
                </span>
              </span>
              <span className="font-heading text-base font-bold text-arctic-powder">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-arctic-powder/50">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading text-xs font-medium uppercase tracking-[0.15em] text-arctic-powder/40">
                {category}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-arctic-powder/60 transition-colors duration-[180ms] hover:text-forsythia"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-arctic-powder/10 pt-6 text-center">
          <p className="text-xs text-arctic-powder/30">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.{" "}
            {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
