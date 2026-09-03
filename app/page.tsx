import type { Metadata } from "next";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FaqJsonLd } from "@/components/JsonLd";
import { Location } from "@/components/Location";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: site.title,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

/** Ana vitrin: güven, hizmet, süreç, SSS ve WhatsApp randevu. */
export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Header />
      <main id="icerik" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Faq />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
