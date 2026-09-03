import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

/** Ana vitrin: bilgilendirme + randevu yönlendirmesi. */
export default function Home() {
  return (
    <>
      <Header />
      <main id="icerik" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
