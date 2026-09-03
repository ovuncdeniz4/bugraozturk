import Link from "next/link";
import Image from "next/image";
import { AppointmentLink } from "@/components/AppointmentLink";
import { site } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/styles";

/** İlk ekran: fotoğraf, başlık, randevu. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-10 text-center sm:px-6 lg:py-14">
        <div className="relative mb-6 h-64 w-52 overflow-hidden rounded-[1.75rem] border border-sand shadow-sm sm:h-80 sm:w-64">
          <Image
            src="/bugra-ozturk.jpg"
            alt={`${site.name}, Aydın diyetisyen`}
            fill
            sizes="(max-width: 640px) 208px, 256px"
            className="object-cover object-[center_15%]"
            priority
          />
        </div>
        <h1 className="font-serif text-3xl leading-tight text-sage-dark sm:text-4xl">
          Yasaksız, kişiye özel beslenme
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Aç kalmadan, günlük hayatınıza uygun ve sürdürülebilir bir beslenme
          düzeni oluşturalım.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <AppointmentLink className={btnPrimary}>Randevu Al</AppointmentLink>
          <Link href="/#surec" className={btnSecondary}>
            Nasıl Çalışıyoruz?
          </Link>
        </div>
      </div>
    </section>
  );
}
