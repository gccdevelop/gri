import type { Metadata } from "next";
import { ClipboardList, Ear, MessageSquareText, ShieldCheck, Sprout, Wallet } from "lucide-react";
import { Container } from "@/components/Container";
import { LinkButton, TextLink } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { StatusTag } from "@/components/StatusTag";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accountability and Impact",
  description:
    "GRI's commitments to safeguarding, responsible resource management, community listening and accurate assessment of outcomes, with its registered institutional details.",
};

const commitments = [
  { icon: Ear, title: "Listening to communities", text: "Programme planning takes account of local priorities and the needs people identify." },
  { icon: ShieldCheck, title: "Safeguarding participants", text: "We promote safe participation across everything we do." },
  { icon: Wallet, title: "Responsible resource management", text: "Donated resources are managed responsibly, with transparent stewardship." },
  { icon: Sprout, title: "Equitable access and practical risks", text: "Planning considers equitable access, practical risks and opportunities to collaborate with established service providers." },
];

const monitoring = [
  { icon: ClipboardList, title: "Document participation", text: "Record who takes part in activities as they develop." },
  { icon: MessageSquareText, title: "Gather feedback", text: "Ask participants for their views through surveys and follow-ups." },
  { icon: Sprout, title: "Assess outcomes", text: "Focus on social connections, access to support and skills development." },
];

export default function AccountabilityPage() {
  const i = org.institutional;
  const details: [string, string][] = [
    ["Registered name", i.registeredName],
    ["Legal status", i.legalStatus],
    ["Company number", i.companyNumber],
    ["Date of incorporation", i.incorporated],
    ["Registered office", i.registeredOffice],
    ["Geographic focus", i.geographicFocus],
  ];

  return (
    <>
      <PageHero
        eyebrow="Accountability and impact"
        title={<>Doing what we say, and <span className="italic-accent">telling you honestly</span> how it goes</>}
        tone="forest"
      >
        GRI is committed to listening to communities, safeguarding participants and managing donated
        resources responsibly.
      </PageHero>

      {/* Commitments */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-terracotta-600">Our commitments</p>
            <h2 className="title-lg mt-4 text-forest-900">How we aim to work</h2>
            <p className="mt-6 text-ink-soft">
              Integrity and accountability, and safeguarding and responsible stewardship, are two of our
              seven core values.
            </p>
            <div className="mt-6">
              <TextLink href="/about#values">Read our core values</TextLink>
            </div>
          </div>
          <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:col-span-8">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.title} className="border-t-2 border-forest-900 py-6">
                  <Icon aria-hidden="true" className="size-7 text-terracotta-600" />
                  <h3 className="title-md mt-4 text-forest-900">{c.title}</h3>
                  <p className="mt-2 text-ink-soft">{c.text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Monitoring - intentions */}
      <section id="impact" className="bg-ivory-100 py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <StatusTag kind="planned" />
            <h2 className="title-lg mt-5 text-forest-900">Assessing outcomes accurately</h2>
            <p className="mt-6 text-ink-soft lg:text-lg">
              As its activities grow, GRI will document participation, gather feedback and assess
              outcomes through surveys and follow-ups. This describes how we intend to work, and we will not present intentions as results.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {monitoring.map((m, idx) => {
              const Icon = m.icon;
              return (
                <li key={m.title} className="border-2 border-dashed border-terracotta-600 bg-ivory-50 p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl italic text-ochre-500">{String(idx + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" className="size-7 text-forest-800" />
                  </div>
                  <h3 className="title-md mt-5 text-forest-900">{m.title}</h3>
                  <p className="mt-2 text-ink-soft">{m.text}</p>
                </li>
              );
            })}
          </ol>
          <p className="mt-10 max-w-3xl border-l-4 border-forest-800 pl-5 text-lg text-forest-900">
            Findings will inform programme improvements and be shared through periodic updates and annual
            impact reports to communities, donors and partners.
          </p>
        </Container>
      </section>

      {/* Institutional information */}
      <section id="institutional" className="bg-forest-900 py-20 text-ivory-50 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ochre-300">Institutional information</p>
            <h2 className="title-lg mt-4">A Community Interest Company</h2>
            <p className="mt-6 text-ivory-100/85">
              {org.name} ({org.shortName}) is a UK-registered Community Interest Company. It is inclusive
              and faith-neutral in its community services.
            </p>
          </div>
          <dl className="divide-y divide-ivory-50/20 border-y border-ivory-50/20 lg:col-span-7">
            {details.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-bold text-ochre-300">{k}</dt>
                <dd className="text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-ivory-50 py-16 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="title-lg text-forest-900">Questions, feedback or partnership enquiries</h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              We value feedback from communities, participants and partners.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
            <LinkButton href="/get-involved#contact" variant="solid">Contact GRI</LinkButton>
            <LinkButton href="/partnerships" variant="outline">Partnerships</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
