const quotes = [
  {
    text: "Buğra Bey oldukça ilgili bir diyetisyen. Danışanının söylediklerini dinliyor. Kişiye özel listeler yapması çok güzel.",
  },
  {
    text: "Kasım ayından beri çalışıyorum. O zamandan bu zamana kadar 15 kilo verdim ve çok mutluyum. Diyet listelerimi uygularken zorluk yaşamadım.",
  },
  {
    text: "3 aydır beslenme sistemim oturdu ve kendimi daha konforlu hissediyorum. Sayılara takılmadan beslenerek kilo veriyorum.",
  },
] as const;

const doktorTakvimiUrl =
  "https://www.doktortakvimi.com/bugra-ozturk/diyetisyen/aydin";

/** DoktorTakvimi’de yayımlanmış kısa danışan alıntıları. */
export function Testimonials() {
  return (
    <section id="yorumlar" className="scroll-mt-24 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Danışan deneyimi
        </p>
        <h2 className="mt-2 max-w-xl font-serif text-3xl text-sage-dark">
          DoktorTakvimi’den yorumlar
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote.text.slice(0, 24)}
              className="rounded-[1.5rem] border border-sand bg-background p-5"
            >
              <p className="text-base leading-relaxed text-sage-dark">
                “{quote.text}”
              </p>
            </blockquote>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted">
          Alıntılar{" "}
          <a
            href={doktorTakvimiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-sage-dark"
          >
            doktortakvimi.com
          </a>{" "}
          üzerindeki danışan yorumlarından alınmıştır.
        </p>
      </div>
    </section>
  );
}
