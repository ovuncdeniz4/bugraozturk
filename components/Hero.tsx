import Link from "next/link";
import { AppointmentLink } from "@/components/AppointmentLink";
import { Portrait } from "@/components/Portrait";
import { site } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/styles";

/** İlk ekran: kim, ne sunuyor, nasıl randevu. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div>
          <p className="font-serif text-xl text-sage-dark">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.city} / {site.district}
          </p>
          <p className="mt-1 text-sm font-medium text-sage">{site.jobLine}</p>
          <h1 className="mt-5 font-serif text-3xl leading-tight text-sage-dark sm:text-4xl">
            Yasaksız, kişiye özel beslenme
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Aç kalmadan, günlük hayatınıza uygun ve sürdürülebilir bir beslenme
            düzeni oluşturalım.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <AppointmentLink className={btnPrimary}>Randevu Al</AppointmentLink>
            <Link href="/#surec" className={btnSecondary}>
              Nasıl Çalışıyoruz?
            </Link>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
