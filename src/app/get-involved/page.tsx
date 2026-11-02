import type { Metadata } from "next";
import { Handshake, HeartHandshake, MapPin, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { LinkButton, TextLink } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { contact, mailtoHref } from "@/config/contact";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Take part in GRI's community initiatives, volunteer your time or expertise, or explore a partnership with Great Revivalist International CIC.",
};

const pathways = [
  {
    id: "participate",
    icon: Users,
    title: "Take part",
    text: "GRI's programmes are open to everyone, whatever their background or beliefs. If you would like to take part in community activities, we would like to hear from you.",
    subject: "Taking part in GRI activities",
    action: "Ask about taking part",
  },
  {
    id: "volunteer",
    icon: HeartHandshake,
    title: "Volunteer or share expertise",
    text: "GRI welcomes volunteers and community champions. You can offer your time, professional expertise, mentoring or skills.",
    subject: "Volunteering with GRI",
    action: "Offer your time or skills",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner with GRI",
    text: "Local authorities, businesses, foundations, educational institutions, health and specialist organisations and community groups can contribute funding, venues, equipment, referrals and joint delivery.",
    subject: "Partnership enquiry",
    action: "Explore a partnership",
  },
];

export default function GetInvolvedPage() {
  const hasChannels = Boolean(contact.email || contact.phone || contact.social.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Contact and get involved"
        title={<>Join us in creating <span className="italic-accent">positive, lasting</span> change</>}
        tone="forest"
      >
        There are several ways to be part of GRI. Choose the one that suits you below.
      </PageHero>

      <section className="bg-ivory-50 py-20 lg:py-28">
        <Container>
          <ul className="grid gap-px bg-forest-900/20 lg:grid-cols-3">
            {pathways.map((p) => {
              const Icon = p.icon;
              const href = mailtoHref(p.subject);
              return (
                <li key={p.id} id={p.id} className="flex flex-col bg-ivory-50 p-7 sm:p-9 lg:first:pl-0 lg:last:pr-0">
                  <Icon aria-hidden="true" className="size-9 text-terracotta-600" />
                  <h2 className="title-md mt-6 text-forest-900">{p.title}</h2>
                  <p className="mt-4 flex-1 text-ink-soft">{p.text}</p>
                  <div className="mt-8">
                    {href ? (
                      <LinkButton href={href} variant="solid">{p.action}</LinkButton>
                    ) : (
                      <a
                        href="#contact"
                        className="inline-flex min-h-12 items-center font-bold text-forest-800 underline decoration-2 underline-offset-[6px] hover:text-terracotta-600"
                      >
                        See how to contact us
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section id="contact" className="bg-ivory-100 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta-600">Contact</p>
            <h2 className="title-lg mt-4 text-forest-900">Get in touch</h2>
            <p className="mt-6 text-ink-soft lg:text-lg">
              {hasChannels
                ? "You can reach GRI using the details here."
                : "Online contact details are not yet published on this website. In the meantime, you can write to GRI at its registered office."}
            </p>
          </div>
          <div className="lg:col-span-7">
            <dl className="divide-y divide-forest-900/20 border-y-2 border-forest-900">
              {contact.email && (
                <div className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-bold text-forest-900">Email</dt>
                  <dd>
                    <a className="underline underline-offset-4 hover:text-terracotta-600" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </dd>
                </div>
              )}
              {contact.phone && (
                <div className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-bold text-forest-900">Telephone</dt>
                  <dd>
                    <a className="underline underline-offset-4 hover:text-terracotta-600" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              )}
              {contact.social.length > 0 && (
                <div className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-bold text-forest-900">Online</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-5 gap-y-1">
                      {contact.social.map((s) => (
                        <li key={s.href}>
                          <a className="underline underline-offset-4 hover:text-terracotta-600" href={s.href}>{s.label}</a>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              <div className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr]">
                <dt className="flex items-center gap-2 font-bold text-forest-900">
                  <MapPin aria-hidden="true" className="size-4" /> Registered office
                </dt>
                <dd>
                  {org.institutional.registeredName}
                  <br />
                  {org.institutional.registeredOffice}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-ivory-50 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="title-lg">Learn more before you get in touch</h2>
            <p className="mt-4 max-w-xl text-ivory-100/85">
              Read about our programmes and community activities, or how we hold ourselves accountable.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
            <LinkButton href="/programmes" variant="gold">Our programmes</LinkButton>
            <LinkButton href="/accountability" variant="outline-light">Accountability</LinkButton>
          </div>
          <div className="lg:col-span-12">
            <TextLink href="/partnerships" tone="dark">Partnership opportunities</TextLink>
          </div>
        </Container>
      </section>
    </>
  );
}
