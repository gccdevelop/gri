import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "GRI's six programme areas: community engagement and wellbeing, youth development and mentorship, skills development, practical assistance, health awareness and professional networking.",
};

const accents = {
  ochre: { panel: "bg-ochre-300 text-forest-950", icon: "text-forest-900", num: "text-forest-900/70" },
  terracotta: { panel: "bg-terracotta-600 text-ivory-50", icon: "text-ochre-300", num: "text-ivory-50/80" },
  forest: { panel: "bg-forest-800 text-ivory-50", icon: "text-ochre-300", num: "text-ivory-50/80" },
} as const;

export default function ProgrammesPage() {
  return (
    <>
      <PageHero eyebrow="Our programmes and areas of work" title={<>Six areas of work, one community-centred approach</>} tone="forest">
        Our programme areas set out where GRI works and where it is building. Activities undertaken so far
        are described on the{" "}
        <Link href="/community-initiatives" className="font-semibold text-ochre-300 underline underline-offset-4">
          Community Initiatives
        </Link>{" "}
        page.
      </PageHero>

      <section className="bg-ivory-50 py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky index */}
          <nav aria-label="Programme areas" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="eyebrow text-terracotta-600">On this page</p>
              <ol className="mt-5 space-y-1">
                {programmes.map((p, idx) => (
                  <li key={p.slug}>
                    <a
                      href={`#${p.slug}`}
                      className="group flex gap-3 border-l-2 border-forest-900/20 py-2 pl-4 text-[0.95rem] leading-snug transition-colors hover:border-terracotta-500 hover:text-terracotta-600"
                    >
                      <span className="font-serif italic text-ochre-700">{idx + 1}</span>
                      <span>{p.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="space-y-16 lg:col-span-9 lg:space-y-24">
            {programmes.map((p, idx) => {
              const Icon = p.icon;
              const a = accents[p.accent];
              return (
                <article key={p.slug} id={p.slug} className="grid gap-8 md:grid-cols-12 md:gap-10">
                  <div className={`flex flex-col justify-between p-7 md:col-span-4 md:min-h-[18rem] ${a.panel}`}>
                    <span className={`font-serif text-7xl italic leading-none ${a.num}`} aria-hidden="true">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Icon aria-hidden="true" className={`mt-10 size-14 stroke-[1.4] ${a.icon}`} />
                  </div>
                  <div className="md:col-span-8">
                    <h2 className="title-lg text-forest-900">{p.title}</h2>
                    <p className="mt-5 text-ink-soft lg:text-lg">{p.description}</p>
                    <h3 className="eyebrow mt-7 text-forest-900">Areas of focus</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.includes.map((t) => (
                        <li key={t} className="border border-forest-800/40 px-3 py-1 text-sm font-semibold text-forest-800">{t}</li>
                      ))}
                    </ul>
                    <Link
                      href={p.related.href}
                      className="group mt-7 inline-flex items-center gap-2 font-bold text-forest-800 underline decoration-2 underline-offset-[6px] hover:text-terracotta-600"
                    >
                      {p.related.label}
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-ivory-50 lg:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="title-lg">Help us build these programmes</h2>
            <p className="mt-4 text-ivory-100/85">
              Our work develops through partnerships, volunteers and the resources of people who share our
              commitment to inclusive community development.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <LinkButton href="/partnerships" variant="gold">Partner with us</LinkButton>
            <LinkButton href="/get-involved" variant="outline-light">Get involved</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
