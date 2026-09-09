import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/structured-data";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Entreprise de nettoyage professionnel à ${siteConfig.city} et dans le Calvados | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name}, entreprise de nettoyage professionnel à ${siteConfig.city} et dans tout le Calvados : bureaux, médical, commerces, restaurants, industrie, fin de chantier, vitres. Devis gratuit sous 24h.`,
  keywords: [
    "entreprise de nettoyage Caen",
    "nettoyage professionnel Calvados",
    "nettoyage de bureaux Caen",
    "nettoyage fin de chantier Caen",
    "nettoyage vitres Caen",
    "société de nettoyage Caen",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Entreprise de nettoyage professionnel à ${siteConfig.city} et dans le Calvados`,
    description: `${siteConfig.name} entretient vos locaux professionnels dans tout le Calvados. Devis gratuit sous 24h.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — nettoyage professionnel à ${siteConfig.city}`,
    description: `Entretien de locaux professionnels dans tout le Calvados. Devis gratuit sous 24h.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${body.variable} font-sans antialiased pb-[68px] md:pb-0`}
      >
        <JsonLd data={[getLocalBusinessSchema(), getWebSiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
