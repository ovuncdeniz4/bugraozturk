import { site } from "@/lib/site";

const reasons = [
  "Beslenme ve Diyetetik mezunu",
  "Profesyonel deneyim",
  "Sporcu beslenmesi deneyimi",
  "2020’den beri Aydın / Efeler’de danışmanlık",
  "Kişiye özel beslenme planları",
  "Süreç boyunca düzenli takip",
] as const;

/** Güven bölümü — taranabilir maddeler; fotoğraf yalnızca hero’da. */
export function About() {
  return (
    <section id="hakkimda" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Hakkımda
        </p>
        <h2 className="mt-2 font-serif text-3xl text-sage-dark">
          Neden Buğra Öztürk?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {site.education} bölümünden tam burslu mezun oldum. İzmir’de Club
          Sportiva Evka-3’te sporcu beslenmesi üzerine çalıştıktan sonra 2020
          Ağustos’tan beri Aydın Efeler’de kendi ofisimde danışan kabul
          ediyorum. Yasaklara gömülmeden, sizin temponuza uyan listelerle
          ilerlemeyi tercih ederim.
        </p>
        <ul className="mt-6 space-y-2.5">
          {reasons.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-sage-dark">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
