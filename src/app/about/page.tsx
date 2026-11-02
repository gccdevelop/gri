import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { LinkButton, TextLink } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { principles, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About GRI",
  description:
    "Who Great Revivalist International CIC is, what it stands for and whom it serves: vision, mission, seven core values and a community-centred approach.",
};

const delivery = [
  "Active community participation",
  "Professional expertise",
  "Volunteering",
  "Mentorship",
  "Skills development",
  "Capacity strengthening",
  "Practical assistance",
];
const alongside = ["Community outreach", "Sport", "Music", "Creative arts", "Inclusive events"];
const needs = ["Social isolation", "Economic hardship", "Limited opportunities", "Other barriers to participation"];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About GRI" title={<>A community organisation built on <span className="italic-accent">belonging</span></>} tone="ivory">
        Great Revivalist International CIC (GRI) is a UK-registered Community Interest Company working to
        strengthen community wellbeing, inclusion and opportunity.
      </PageHero>

      {/* Who we are */}
      <section id="who-we-are" className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-terracotta-600">Who we are</p>
            <h2 className="title-lg mt-4 text-forest-900">Serving communities broadly</h2>
          </div>
          <div className="space-y-5 lg:col-span-8 lg:text-lg">
            <p>
              We serve communities broadly, creating spaces where people can connect, participate and
              thrive, while offering practical support to those facing isolation, disadvantage or barriers
              to opportunity.
            </p>
            <p>
              By bringing together professional expertise, local knowledge, volunteers and strategic
              partners, GRI seeks to address community needs through practical support, skills
              development, mentorship and inclusive community initiatives. Our approach is rooted in
              compassion, collaboration and a commitment to helping people to meaningfully participate,
              contribute and thrive.
            </p>
            <p className="border-l-4 border-ochre-400 bg-ivory-100 p-5 font-semibold text-forest-900">
              GRI is inclusive and faith-neutral in its community services. Participation and partnership
              are open to people of all backgrounds and beliefs.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision and mission */}
      <section id="purpose" className="bg-forest-900 text-ivory-50">
        <Container className="grid lg:grid-cols-2">
          <div className="border-b border-ivory-50/20 py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-14">
            <p className="eyebrow text-ochre-300">Our vision</p>
            <p className="title-lg mt-6 font-serif">
              A better world where people experience life in all its fullness, communities are resilient,
              and individuals are connected, empowered and flourishing.
            </p>
          </div>
          <div className="py-16 lg:py-24 lg:pl-14">
            <p className="eyebrow text-ochre-300">Our mission</p>
            <p className="title-md mt-6 font-serif text-ivory-100">
              To advance positive social transformation by empowering communities, building partnerships
              and delivering inclusive initiatives that reduce deprivation and isolation, expand
              opportunities and improve wellbeing.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section id="values" className="bg-ivory-50 py-20 lg:py-28">
        <Container>
          <p className="eyebrow text-terracotta-600">Our core values</p>
          <h2 className="title-lg mt-4 max-w-2xl text-forest-900">Seven values that guide how we work</h2>
          <ol className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {values.map((v, idx) => (
              <li key={v.title} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t-2 border-forest-900 pt-5">
                <span className="font-serif text-6xl italic leading-none text-ochre-500" aria-hidden="true">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="title-md text-forest-900">
                    <span className="sr-only">Value {idx + 1}: </span>
                    {v.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{v.text}</p>
                </div>
              </li>
            ))}
            <li className="bg-forest-800 p-7 text-ivory-50 md:col-start-2">
              <h3 className="title-md text-ochre-300">Open to everyone</h3>
              <p className="mt-2 text-ivory-100/90">
                Our community services are faith-neutral. People of all backgrounds and beliefs are
                welcome to participate and to partner with us.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-ivory-100 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta-600">Our approach</p>
            <h2 className="title-lg mt-4 text-forest-900">Integrated and community-centred</h2>
            <p className="mt-6 text-ink-soft lg:text-lg">
              We believe lasting change begins with listening to people, understanding their circumstances
              and working alongside them to identify practical solutions.
            </p>
          </div>
          <div className="space-y-10 lg:col-span-7">
            <div>
              <h3 className="font-bold text-forest-900">We deliver our programmes through</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {delivery.map((d) => (
                  <li key={d} className="bg-forest-800 px-4 py-2 text-[0.95rem] font-semibold text-ivory-50">{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-forest-900">Complemented by</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {alongside.map((d) => (
                  <li key={d} className="border-2 border-forest-800 px-4 py-1.5 text-[0.95rem] font-semibold text-forest-800">{d}</li>
                ))}
              </ul>
              <p className="mt-4 text-ink-soft">
                These foster meaningful relationships, nurture talent, strengthen social connections and
                promote a sense of belonging.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-forest-900">Our guiding principles</h3>
              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {principles.map((p) => (
                  <li key={p} className="border-b border-forest-900/20 py-2.5">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <section id="who-we-serve" className="bg-ivory-50 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-terracotta-600">Who we serve</p>
            <h2 className="title-lg mt-4 text-forest-900">Everyone, ages and walks of life</h2>
            <div className="mt-6 space-y-5 text-ink-soft lg:text-lg">
              <p>
                GRI serves individuals, families and communities from all backgrounds, ages and walks of
                life, promoting inclusion, wellbeing, social connection and access to opportunities.
              </p>
              <p>
                Through community engagement, practical assistance, mentorship, skills development,
                professional networking and intergenerational activities, we seek to strengthen
                relationships, empower individuals, encourage mutual support and build connected,
                resilient and thriving communities.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-forest-900 p-8 text-ivory-50 sm:p-10">
              <p className="eyebrow text-ochre-300">Open to everyone, responsive to need</p>
              <p className="mt-4">
                Our programmes are open to everyone, while remaining responsive to the needs of those
                experiencing:
              </p>
              <ul className="mt-5 divide-y divide-ivory-50/20 border-y border-ivory-50/20">
                {needs.map((n) => (
                  <li key={n} className="py-3 font-serif text-xl">{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivory-200 py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="title-md max-w-xl font-serif text-forest-900">See how these values become practical programmes.</p>
          <div className="flex flex-wrap items-center gap-6">
            <LinkButton href="/programmes">Our programmes</LinkButton>
            <TextLink href="/accountability">How we stay accountable</TextLink>
          </div>
        </Container>
      </section>
    </>
  );
}
