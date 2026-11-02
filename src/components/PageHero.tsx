import type { ReactNode } from "react";
import { Container } from "./Container";

const tones = {
  forest: { bg: "bg-forest-900 text-ivory-50", eyebrow: "text-ochre-300", ring: "border-ochre-300/40", dot: "bg-terracotta-300", lead: "text-ivory-100/90" },
  ivory: { bg: "bg-ivory-100 text-forest-900", eyebrow: "text-terracotta-600", ring: "border-forest-800/20", dot: "bg-ochre-400", lead: "text-ink-soft" },
  terracotta: { bg: "bg-terracotta-600 text-ivory-50", eyebrow: "text-ochre-300", ring: "border-ivory-50/30", dot: "bg-ochre-300", lead: "text-ivory-50/95" },
  ochre: { bg: "bg-ochre-300 text-forest-950", eyebrow: "text-forest-900", ring: "border-forest-900/25", dot: "bg-forest-800", lead: "text-forest-950/90" },
} as const;

export function PageHero({
  eyebrow,
  title,
  children,
  tone = "forest",
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: keyof typeof tones;
  actions?: ReactNode;
}) {
  const t = tones[tone];
  return (
    <section className={`relative overflow-hidden ${t.bg}`}>
      {/* Decorative concentric rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 md:block">
        <div className={`size-[34rem] rounded-full border ${t.ring}`} />
        <div className={`absolute inset-12 rounded-full border ${t.ring}`} />
        <div className={`absolute inset-24 rounded-full border ${t.ring}`} />
        <div className={`absolute left-[3.2rem] top-[8.6rem] size-5 rounded-full ${t.dot}`} />
      </div>
      <Container className="relative py-20 sm:py-24 lg:py-32">
        <p className={`eyebrow rise ${t.eyebrow}`}>{eyebrow}</p>
        <h1 className="title-xl rise rise-2 mt-5 max-w-4xl">{title}</h1>
        {children && <div className={`lead rise rise-3 mt-7 max-w-2xl ${t.lead}`}>{children}</div>}
        {actions && <div className="rise rise-3 mt-9 flex flex-wrap gap-4">{actions}</div>}
      </Container>
    </section>
  );
}
