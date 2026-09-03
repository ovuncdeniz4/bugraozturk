import { site } from "@/lib/site";

/** Eğitim, ofis hikâyesi ve yasaksız yaklaşım. */
export function About() {
  return (
    <section id="hakkimda" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-sage uppercase">
            Hakkımda
          </p>
          <h2 className="mt-2 font-serif text-3xl text-sage-dark sm:text-4xl">
            Sınırlara hapsetmeden, birlikte ilerlemek.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              {site.education} bölümünden tam burslu mezun oldum. İzmir’de
              Club Sportiva Evka-3 bünyesinde sporcu beslenmesi üzerine
              çalıştıktan sonra 2020 Ağustos’tan beri Aydın Efeler’deki kendi
              ofisimde danışan kabul ediyorum.
            </p>
            <p>
              Sporcu beslenmesi, kilo kaybı ve kazanımı; tip 1 ve tip 2 diyabet,
              insülin direnci, Hashimoto ve kolesterol gibi durumlarda beslenme
              danışmanlığı veriyorum. Amaç, tüm yiyecekleri barındıran,
              uygulanabilir listelerle sağlıklı yaşamı mutluluk veren bir
              alışkanlığa dönüştürmek.
            </p>
          </div>
        </div>
        <aside className="rounded-[1.75rem] border border-sand bg-cream p-8">
          <h3 className="font-serif text-xl text-sage-dark">Ofiste neler öne çıkar?</h3>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
            <li>
              <strong className="text-sage-dark">Kişiye özel plan.</strong> Ezber
              liste yok; günlük rutin, damak tadı ve tahliller birlikte okunur.
            </li>
            <li>
              <strong className="text-sage-dark">Yasaksız dil.</strong> Kaçamak
              olunca yargı yok; dengeyi birlikte toparlarız.
            </li>
            <li>
              <strong className="text-sage-dark">Ulaşılabilir takip.</strong>{" "}
              Süreç boyunca soru sormak doğal bir parça.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
