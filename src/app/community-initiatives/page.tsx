import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { LinkButton, TextLink } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { StatusTag } from "@/components/StatusTag";
import { planned, undertaken } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Initiatives",
  description:
    "Community engagement undertaken by GRI in West London, and the initiatives it intends to develop, subject to partnerships, resources and local need.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero eyebrow="Community initiatives" title={<>Meeting, sharing and building relationships in <span className="italic-accent">West London</span></>} tone="terracotta">
        This page separates what GRI has already done from what it intends to develop, so that plans are
        never mistaken for established services.
      </PageHero>

      {/* Key */}
      <section aria-label="Key" className="border-b border-forest-900/15 bg-ivory-100">
        <Container className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5 text-sm">
          <span className="font-bold text-forest-900">Key</span>
          <span className="flex items-center gap-3"><StatusTag kind="undertaken" /> Activities described as already undertaken</span>
          <span className="flex items-center gap-3"><StatusTag kind="planned" /> Initiatives GRI intends to develop</span>
        </Container>
      </section>

      {/* Undertaken */}
      <section id="undertaken" className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <StatusTag kind="undertaken" />
            <h2 className="title-lg mt-5 text-forest-900">Activities in West London</h2>
            <p className="mt-6 text-ink-soft lg:text-lg">
              GRI has undertaken community engagement in West London through communal cooking, storytelling,
              companionship, football and wider outreach.
            </p>
            <p className="mt-5 text-ink-soft lg:text-lg">
              These activities offer welcoming spaces for people to meet, share experiences and build
              relationships across generations and backgrounds.
            </p>
          </div>
          <ul className="lg:col-span-7">
            {undertaken.map((a, idx) => (
              <li key={a} className="flex items-baseline gap-5 border-t-2 border-forest-900 py-5 last:border-b-2 sm:gap-8">
                <span className="w-8 font-serif text-xl italic text-terracotta-600">{idx + 1}</span>
                <span className="font-serif text-3xl text-forest-900 sm:text-5xl">{a}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Planned */}
      <section id="planned" className="bg-ivory-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <StatusTag kind="planned" />
              <h2 className="title-lg mt-5 text-forest-900">What GRI intends to develop</h2>
              <p className="mt-6 text-ink-soft lg:text-lg">
                Building on these activities, GRI intends to develop the initiatives below, subject to
                available partnerships, resources and identified local needs.
              </p>
              <p className="mt-5 border-l-4 border-terracotta-500 pl-4 font-semibold text-forest-900">
                These are intentions, not established services.
              </p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {planned.map((p) => (
                <li key={p} className="flex min-h-40 flex-col justify-between border-2 border-dashed border-terracotta-600 bg-ivory-50 p-6">
                  <StatusTag kind="planned" />
                  <p className="mt-6 font-serif text-2xl leading-tight text-forest-900">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-ivory-50 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="title-lg">Help turn plans into practice</h2>
            <p className="mt-5 max-w-xl text-ivory-100/85">
              Partners, volunteers and supporters can contribute funding, expertise, venues, equipment,
              mentoring and referrals.
            </p>
            <div className="mt-6">
              <TextLink href="/programmes" tone="dark">See how these fit into our six programme areas</TextLink>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
            <LinkButton href="/partnerships" variant="gold">Partnership opportunities</LinkButton>
            <LinkButton href="/get-involved" variant="outline-light">Get involved</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
