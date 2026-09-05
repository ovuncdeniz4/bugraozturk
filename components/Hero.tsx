import Link from "next/link";
import { AppointmentLink } from "@/components/AppointmentLink";
import { Portrait } from "@/components/Portrait";
import { btnPrimary, btnSecondary } from "@/lib/styles";

/** Mobilde fotoğraf üstte; webde fotoğraf solda, slogan sağda. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <Portrait
          className="aspect-square w-full max-w-md justify-self-center lg:max-w-none"
          priority
        />
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-3xl leading-tight text-sage-dark sm:text-4xl lg:text-5xl">
            Diyette yasaklara yer yok!
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            Aç kalmadan, günlük rutinlerinize uygun kalıcı alışkanlıklar inşa
            ediyoruz.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <AppointmentLink className={btnPrimary}>Randevu Al</AppointmentLink>
            <Link href="/#surec" className={btnSecondary}>
              Nasıl Çalışıyoruz?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
