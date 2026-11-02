import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { LinkButton, TextLink } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { contributions, partnerTypes, partnershipPrinciples } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "GRI welcomes collaboration with local authorities, businesses, foundations, educational institutions, health organisations, community groups, volunteers and individual supporters.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership and collaboration"
        title={<>Sustainable change takes <span className="italic-accent">collective effort</span></>}
        tone="ochre"
        actions={
          <>
            <LinkButton href="/get-involved#partner" variant="solid">Explore collaboration</LinkButton>
            <LinkButton
              href="/programmes"
              variant="outline"
              className="!border-forest-950 !text-forest-950 hover:!bg-forest-950 hover:!text-ivory-50"
            >
              See our programmes
            </LinkButton>
          </>
        }
      >
        GRI recognises that sustainable community development requires collective effort. We invite
        organisations, institutions, businesses, funders, volunteers and individuals who share our
        commitment to inclusive community development to join us.
      </PageHero>

      {/* Who we welcome */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta-600">Who we welcome</p>
            <h2 className="title-lg mt-4 text-forest-900">Collaboration across sectors</h2>
            <p className="mt-6 text-ink-soft lg:text-lg">
              We welcome collaboration with the organisations and individuals below. Participation and
              partnership are open to people of all backgrounds and beliefs.
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {partnerTypes.map((p, idx) => (
              <li key={p} className="flex items-baseline gap-4 border-t-2 border-forest-900 py-4">
                <span className="font-serif text-lg italic text-terracotta-600">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl text-forest-900">{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ways to contribute */}
      <section id="ways" className="bg-forest-900 py-20 text-ivory-50 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow text-ochre-300">Ways to contribute</p>
            <h2 className="title-lg mt-4">Eight ways partners can help</h2>
            <p className="mt-5 text-ivory-100/85 lg:text-lg">
              Partners can contribute in a number of ways. If your offer is not listed, we would still
              like to hear from you.
            </p>
          </div>
          <ul className="mt-14 grid gap-px bg-ivory-50/20 sm:grid-cols-2 lg:grid-cols-4">
            {contributions.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.title} className="flex flex-col gap-6 bg-forest-900 p-7 transition-colors hover:bg-forest-800">
                  <Icon aria-hidden="true" className="size-8 text-ochre-300" />
                  <p className="font-serif text-xl leading-snug">{c.title}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-terracotta-600">Our partnership philosophy</p>
            <h2 className="title-lg mt-4 text-forest-900">Partnerships built on shared purpose</h2>
            <p className="mt-6 text-ink-soft lg:text-lg">
              We seek partnerships based on shared objectives, community benefit, mutual respect,
              safeguarding, transparent stewardship and a commitment to learning and improvement.
            </p>
            <div className="mt-8">
              <TextLink href="/accountability">How we hold ourselves accountable</TextLink>
            </div>
          </div>
          <ol className="lg:col-span-6">
            {partnershipPrinciples.map((p, idx) => (
              <li key={p} className="flex items-baseline gap-5 border-b border-forest-900/25 py-4 first:border-t first:border-forest-900/25">
                <span className="font-serif text-2xl italic text-ochre-500">{idx + 1}</span>
                <span className="text-lg font-semibold text-forest-900">{p}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-terracotta-600 py-16 text-ivory-50 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="title-lg">Explore collaboration with GRI</h2>
            <p className="mt-5 max-w-xl text-ivory-50/95">
              Whether you can offer funding, expertise, a venue, equipment, mentoring or referrals, we
              would welcome a conversation about working together.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
            <LinkButton href="/get-involved#partner" variant="gold">Start a conversation</LinkButton>
            <LinkButton href="/community-initiatives#planned" variant="outline-light">Where help is needed</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
