const quotes = [
  {
    tag: "Kilo yönetimi",
    text: "Aç kalmadan, kendi mutfağıma uygun listelerle ilerledim. Diyet değil, oturan bir düzen hissedildi.",
  },
  {
    tag: "Ulaşılabilirlik",
    text: "Sorularıma hızlı dönüş aldım. Süreç yargılamadan, esnek alternatiflerle yürüdü.",
  },
  {
    tag: "Online takip",
    text: "Şehir dışında olsam da haftalık planlar ve tartı takibiyle tempo bozulmadı.",
  },
] as const;

/** İsimsiz deneyim özetleri — sahte isim veya sonuç eklenmez. */
export function Testimonials() {
  return (
    <section id="yorumlar" className="scroll-mt-24 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Danışan deneyimi
        </p>
        <h2 className="mt-2 max-w-xl font-serif text-3xl text-sage-dark">
          Süreç nasıl hissediliyor?
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote.tag}
              className="rounded-[1.5rem] border border-sand bg-background p-5"
            >
              <p className="text-xs font-semibold tracking-wide text-sage uppercase">
                {quote.tag}
              </p>
              <p className="mt-3 text-base leading-relaxed text-sage-dark">
                “{quote.text}”
              </p>
            </blockquote>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted">
          Bu kartlar sık dile getirilen deneyimleri özetler. İsim, yaş veya
          sonuç paylaşımları yalnızca danışan onayıyla eklenir.
        </p>
      </div>
    </section>
  );
}
