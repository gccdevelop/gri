import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { cta, nav, org } from "@/lib/site";
import { contact } from "@/config/contact";

export function Footer() {
  const i = org.institutional;
  return (
    <footer className="bg-forest-950 text-ivory-100">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <div className="inline-block bg-ivory-50 px-4 py-3">
            <Image src="/gri-logo.png" alt="" width={257} height={202} className="h-14 w-auto" />
          </div>
          <p className="mt-6 font-serif text-3xl leading-tight text-ivory-50">
            Communities Empowered.
            <br />
            <span className="italic-accent text-ochre-300">Lives Transformed.</span>
          </p>
          <p className="mt-5 max-w-md text-[0.95rem] text-ivory-200/85">
            {org.name} ({org.shortName}) is inclusive and faith-neutral in its community services.
            Participation and partnership are open to people of all backgrounds and beliefs.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="eyebrow text-ochre-300">Explore</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/" className="hover:text-ochre-300">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ochre-300">{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href={cta.href} className="font-bold text-ochre-300 hover:underline">{cta.label}</Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="eyebrow text-ochre-300">Institutional details</h2>
          <dl className="mt-5 space-y-3 text-[0.95rem]">
            <div>
              <dt className="sr-only">Registered name</dt>
              <dd className="font-semibold text-ivory-50">{i.registeredName}</dd>
            </div>
            <div>
              <dt className="inline text-ivory-200/70">Status: </dt>
              <dd className="inline">{i.legalStatus}</dd>
            </div>
            <div>
              <dt className="inline text-ivory-200/70">Company number: </dt>
              <dd className="inline">{i.companyNumber}</dd>
            </div>
            <div>
              <dt className="inline text-ivory-200/70">Registered office: </dt>
              <dd className="inline">{i.registeredOffice}</dd>
            </div>
          </dl>
          {(contact.email || contact.phone) && (
            <ul className="mt-5 space-y-1 text-[0.95rem]">
              {contact.email && (
                <li><a className="underline underline-offset-4 hover:text-ochre-300" href={`mailto:${contact.email}`}>{contact.email}</a></li>
              )}
              {contact.phone && (
                <li><a className="underline underline-offset-4 hover:text-ochre-300" href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></li>
              )}
            </ul>
          )}
          {contact.social.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
              {contact.social.map((s) => (
                <li key={s.href}><a className="underline underline-offset-4 hover:text-ochre-300" href={s.href}>{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>
      </Container>
      <div className="border-t border-ivory-50/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-ivory-200/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {org.registeredName}. All rights reserved.</p>
          <p>Registered in England and Wales, company number {i.companyNumber}.</p>
        </Container>
      </div>
    </footer>
  );
}
