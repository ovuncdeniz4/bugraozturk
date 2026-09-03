import Image from "next/image";
import { ArrowRightIcon, InstagramIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/styles";

/** Ana karşılama — kısa vaat, randevu ve Instagram. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-sage uppercase">
            {site.city} · {site.district}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-sage-dark sm:text-5xl">
            Yasaksız, kişiye özel beslenme — Aydın
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Aç kalmadan, kendi hayatınıza uyan listelerle sağlıklı kiloya ve
            sürdürülebilir bir düzene birlikte yürüyoruz. Ofis {site.city} /{" "}
            {site.district}’de; online takip de mümkün.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Randevu Al
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2rem] bg-sage/15 sm:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-sand shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
              alt="Taze sebze ve yeşilliklerden oluşan sağlıklı bir tabak"
              width={1200}
              height={900}
              priority
              className="h-[340px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
