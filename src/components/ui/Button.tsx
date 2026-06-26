import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-forsythia text-oceanic-noir hover:bg-deep-saffron font-heading font-medium",
  secondary:
    "bg-nocturnal-expedition text-arctic-powder hover:bg-oceanic-noir font-heading font-medium",
  outline:
    "border-2 border-nocturnal-expedition text-nocturnal-expedition hover:bg-nocturnal-expedition hover:text-arctic-powder font-heading font-medium",
  ghost:
    "text-nocturnal-expedition hover:bg-mystic-mint font-heading font-medium",
};

export default function Button({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
