import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/figtree";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { org, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${org.shortName} | ${org.tagline}`,
    template: `%s | ${org.shortName}`,
  },
  description: org.description,
  applicationName: org.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: org.name,
    title: `${org.name} | ${org.tagline}`,
    description: org.description,
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#143528",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ivory-50 focus:px-4 focus:py-3 focus:font-semibold focus:text-forest-900"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
