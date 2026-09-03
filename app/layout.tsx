import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bugraozturk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "diyetisyen",
    "Aydın",
    "Efeler",
    "Buğra Öztürk",
    "beslenme danışmanlığı",
    "kilo yönetimi",
    "sporcu beslenmesi",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
