import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { Container } from "@/components/Container";
import { GatheringMotif } from "@/components/GatheringMotif";
import { LinkButton, TextLink } from "@/components/LinkButton";
import { StatusTag } from "@/components/StatusTag";
import { org, partnerTypes, planned, programmes, undertaken } from "@/lib/site";

export default function HomePage() {
  const i = org.institutional;
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-forest-900 text-ivory-50">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow rise text-ochre-300">
              {org.pillars.join(" · ")}
            </p>
            <h1 className="display rise rise-2 mt-6">
              Communities Empowered.{" "}
              <span className="italic-accent text-ochre-300">Lives Transformed.</span>
            </h1>
            <p className="lead rise rise-3 mt-8 max-w-xl text-ivory-100/90">
              Great Revivalist International CIC (GRI) is a UK-registered Community Interest Company
              working to strengthen community wellbeing, inclusion and opportunity, with programmes open
              to people of all backgrounds.
            </p>
            <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
              <LinkButton href="/programmes" variant="gold">Explore our programmes</LinkButton>
              <LinkButton href="/partnerships" variant="outline-light">Partner with GRI</LinkButton>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[22rem] sm:max-w-[28rem] lg:col-span-5 lg:max-w-none">
            <GatheringMotif className="rise rise-2" />
          </div>
        </Container>
        <div className="border-t border-ivory-50/15 bg-forest-950">
          <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-2 py-4 text-sm text-ivory-100/85">
            <p>Community Interest Company · England and Wales · Company number {i.companyNumber}</p>
            <p>Inclusive and faith-neutral: open to people of all backgrounds and beliefs</p>
          </Container>
        </div>
      </section>

      {/* ---------- Introduction ---------- */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-terracotta-600">Who we are</p>
            <p className="title-lg mt-5 font-serif text-forest-900">
              We create spaces where people can connect, participate and thrive, and we offer practical
              support to those facing isolation, disadvantage or barriers to opportunity.
            </p>
          </div>
          <div className="space-y-5 text-ink-soft lg:col-span-5 lg:pt-10">
            <p>
              By bringing together professional expertise, local knowledge, volunteers and strategic
              partners, GRI seeks to address community needs through practical support, skills
              development, mentorship and inclusive community initiatives.
            </p>
            <p>
              Our approach is rooted in compassion, collaboration and a commitment to helping people
              meaningfully participate, contribute and thrive.
            </p>
            <TextLink href="/about">More about GRI</TextLink>
          </div>
        </Container>
      </section>

      {/* ---------- Mission and approach ---------- */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-px bg-forest-900/20 lg:grid-cols-2">
            <div className="bg-ivory-100 py-2 pr-0 lg:pr-12">
              <p className="eyebrow text-terracotta-600">Our vision</p>
              <p className="title-md mt-4 font-serif text-forest-900">
                A better world where people experience life in all its fullness, communities are
                resilient, and individuals are connected, empowered and flourishing.
              </p>
            </div>
            <div className="bg-ivory-100 py-8 lg:py-2 lg:pl-12">
              <p className="eyebrow text-terracotta-600">Our mission</p>
              <p className="title-md mt-4 font-serif text-forest-900">
                To advance positive social transformation by empowering communities, building
                partnerships and delivering inclusive initiatives that reduce deprivation and isolation,
                expand opportunities and improve wellbeing.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-terracotta-600">Our approach</p>
              <h2 className="title-lg mt-4 text-forest-900">Lasting change begins with listening</h2>
              <div className="mt-6">
                <TextLink href="/about#approach">How we work</TextLink>
              </div>
            </div>
            <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
              {[
                ["01", "Listen", "We listen to people and to local priorities."],
                ["02", "Understand", "We seek to understand their circumstances."],
                ["03", "Work alongside", "We work with people to identify practical solutions."],
              ].map(([n, t, d]) => (
                <li key={n} className="border-t-2 border-forest-900 pt-5">
                  <span className="font-serif text-5xl italic text-ochre-500">{n}</span>
                  <h3 className="title-md mt-3 text-forest-900">{t}</h3>
                  <p className="mt-2 text-ink-soft">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ---------- Programme areas ---------- */}
      <section className="bg-forest-900 py-20 text-ivory-50 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-ochre-300">Our programmes</p>
              <h2 className="title-lg mt-4">Six areas of work</h2>
              <p className="mt-5 text-ivory-100/85">
                From community connection to career networks, our programme areas reflect what we hear
                from the people we serve.
              </p>
              <div className="mt-8">
                <LinkButton href="/programmes" variant="gold">All programmes</LinkButton>
              </div>
            </div>
          </div>
          <ul className="border-t border-ivory-50/25 lg:col-span-8">
            {programmes.map((p, idx) => {
              const Icon = p.icon;
              return (
                <li key={p.slug} className="border-b border-ivory-50/25">
                  <Link
                    href={`/programmes#${p.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 py-6 transition-colors hover:bg-forest-800 sm:gap-x-8 sm:px-4"
                  >
                    <span className="font-serif text-3xl italic text-ochre-300 sm:text-4xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex items-center gap-3">
                        <Icon aria-hidden="true" className="hidden size-5 shrink-0 text-terracotta-300 sm:block" />
                        <span className="font-serif text-xl leading-snug sm:text-2xl">{p.title}</span>
                      </span>
                      <span className="mt-1.5 block text-[0.95rem] text-ivory-100/75">{p.summary}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-6 text-ochre-300 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---------- Community initiatives ---------- */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow text-terracotta-600">Community initiatives</p>
            <h2 className="title-lg mt-4 text-forest-900">
              Welcoming spaces in West London, and what we hope to build next
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="bg-forest-800 p-8 text-ivory-50 sm:p-10 lg:col-span-7">
              <StatusTag kind="undertaken" />
              <h3 className="title-md mt-5">GRI has undertaken community engagement in West London</h3>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {undertaken.map((a) => (
                  <li key={a} className="border border-ivory-50/40 px-4 py-2 font-semibold">{a}</li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-ivory-100/85">
                These activities offer welcoming spaces for people to meet, share experiences and build
                relationships across generations and backgrounds.
              </p>
            </div>
            <div className="border-2 border-dashed border-terracotta-600 p-8 sm:p-10 lg:col-span-5">
              <StatusTag kind="planned" />
              <h3 className="title-md mt-5 text-forest-900">What GRI intends to develop</h3>
              <ul className="mt-6 space-y-2.5">
                {planned.map((a) => (
                  <li key={a} className="flex gap-3 font-semibold text-forest-900">
                    <span aria-hidden="true" className="mt-[0.6em] size-2 shrink-0 rounded-full bg-terracotta-500" />
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-soft">
                Subject to available partnerships, resources and identified local needs.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <TextLink href="/community-initiatives">Read about our community initiatives</TextLink>
          </div>
        </Container>
      </section>

      {/* ---------- Partnerships ---------- */}
      <section className="bg-ochre-300 py-20 text-forest-950 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-forest-900">Collaboration and partnership</p>
            <h2 className="title-xl mt-4">Lasting change takes collective effort</h2>
            <p className="lead mt-6 max-w-xl">
              We seek partnerships based on shared objectives, community benefit, mutual respect,
              safeguarding, transparent stewardship and a commitment to learning and improvement.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <LinkButton href="/partnerships" variant="solid">Explore partnership</LinkButton>
              <LinkButton href="/get-involved#partner" variant="outline" className="!border-forest-950 !text-forest-950 hover:!bg-forest-950 hover:!text-ivory-50">
                Start a conversation
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="font-bold">We welcome collaboration with</p>
            <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {partnerTypes.map((p) => (
                <li key={p} className="flex items-center gap-3 border-b border-forest-950/25 py-3">
                  <HeartHandshake aria-hidden="true" className="size-4 shrink-0 text-forest-800" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------- Accountability ---------- */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-terracotta-600">Accountability</p>
            <h2 className="title-lg mt-4 text-forest-900">Listening, safeguarding and responsible stewardship</h2>
            <p className="mt-6 text-ink-soft">
              GRI is committed to listening to communities, safeguarding participants and managing donated
              resources responsibly. As its activities grow, it will document participation, gather
              feedback and assess outcomes, sharing findings through periodic updates and annual impact
              reports.
            </p>
            <div className="mt-8">
              <TextLink href="/accountability">Accountability and impact</TextLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="border-2 border-forest-900 p-7 sm:p-9">
              <div className="flex items-center gap-3 text-forest-900">
                <ShieldCheck aria-hidden="true" className="size-6" />
                <h3 className="font-serif text-2xl">Institutional details</h3>
              </div>
              <dl className="mt-6 divide-y divide-forest-900/15 text-[0.95rem]">
                {[
                  ["Registered name", i.registeredName],
                  ["Legal status", i.legalStatus],
                  ["Company number", i.companyNumber],
                  ["Incorporated", i.incorporated],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-forest-900">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
