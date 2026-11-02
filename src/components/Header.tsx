"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { cta, nav, org } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/15 bg-ivory-50/95 backdrop-blur supports-[backdrop-filter]:bg-ivory-50/85">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Link href="/" onClick={close} className="flex items-center gap-3" aria-label={`${org.name} – home`}>
          <Image src="/gri-logo.png" alt="" width={257} height={202} className="h-10 w-auto lg:h-12" priority />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.65rem] font-semibold tracking-tight text-forest-900">GRI</span>
            <span className="mt-1 hidden text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-soft xs:block">
              Great Revivalist International
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative px-3.5 py-2 text-[0.95rem] font-semibold transition-colors hover:text-terracotta-600 after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-0.5 after:origin-left after:bg-terracotta-500 after:transition-transform ${
                isActive(item.href)
                  ? "text-forest-900 after:scale-x-100"
                  : "text-ink after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            className="ml-3 inline-flex min-h-11 items-center bg-forest-800 px-5 text-[0.95rem] font-bold text-ivory-50 transition-colors hover:bg-terracotta-600"
          >
            {cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border-2 border-forest-800 text-forest-800 transition-colors hover:bg-forest-800 hover:text-ivory-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-forest-900 text-ivory-50 lg:hidden"
      >
        <Container className="py-8">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-ivory-50/15 border-y border-ivory-50/15">
              {[{ href: "/", label: "Home" }, ...nav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-serif text-3xl ${
                      pathname === item.href ? "text-ochre-300" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={cta.href}
              onClick={close}
              className="mt-8 flex min-h-14 items-center justify-center bg-ochre-300 px-6 text-lg font-bold text-forest-950 hover:bg-ochre-400"
            >
              {cta.label}
            </Link>
          </nav>
          <p className="mt-8 text-sm text-ivory-100/80">
            {org.shortName} is a Community Interest Company. Open to people of all backgrounds and beliefs.
          </p>
        </Container>
      </div>
    </header>
  );
}
