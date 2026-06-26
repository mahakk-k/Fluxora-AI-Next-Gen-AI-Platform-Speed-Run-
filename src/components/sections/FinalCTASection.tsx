import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

export default function FinalCTASection() {
  return (
    <section id="cta" className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-oceanic-noir px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Decorative background */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-forsythia/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-y-1/2 rounded-full bg-deep-saffron/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="mb-4 inline-block font-heading text-xs font-medium uppercase tracking-[0.15em] text-forsythia">
              Ready to automate?
            </span>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight text-arctic-powder sm:text-4xl">
              Move from manual data operations to intelligent automated workflows.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-arctic-powder/60">
              Join teams already using {siteConfig.name} to automate workflows,
              connect systems, and turn operational data into intelligent
              decisions.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="primary" href="#pricing" className="px-8 py-3.5 text-base">
                {siteConfig.primaryCTA}
              </Button>
              <Button
                variant="outline"
                href="#pricing"
                className="border-arctic-powder/30 text-arctic-powder hover:bg-arctic-powder hover:text-oceanic-noir px-8 py-3.5 text-base"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
