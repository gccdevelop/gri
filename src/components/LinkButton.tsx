import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  /** Ochre fill for dark backgrounds */
  gold: "bg-ochre-300 text-forest-950 hover:bg-ochre-400 border-transparent",
  /** Forest fill for light backgrounds */
  solid: "bg-forest-800 text-ivory-50 hover:bg-forest-950 border-transparent",
  /** Outline for dark backgrounds */
  "outline-light": "border-ivory-50/60 text-ivory-50 hover:bg-ivory-50 hover:text-forest-900",
  /** Outline for light backgrounds */
  outline: "border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-ivory-50",
} as const;

export function LinkButton({
  href,
  children,
  variant = "solid",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
}) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2.5 border-2 px-6 py-3 text-[0.95rem] font-bold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );
  const external = /^(mailto:|tel:|https?:)/.test(href);
  return external ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Understated inline text link with arrow */
export function TextLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const color =
    tone === "dark"
      ? "text-ochre-300 decoration-ochre-300/50 hover:decoration-ochre-300"
      : "text-forest-800 decoration-forest-800/40 hover:decoration-forest-800";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-[6px] transition-colors ${color}`}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-[1.05em] transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
