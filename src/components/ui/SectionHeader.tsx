import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="mb-3 inline-block font-heading text-xs font-medium uppercase tracking-[0.15em] text-deep-saffron">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight text-oceanic-noir sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-nocturnal-expedition/70">
          {description}
        </p>
      )}
    </div>
  );
}
