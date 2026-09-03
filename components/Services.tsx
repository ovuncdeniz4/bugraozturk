const services = [
  {
    title: "Kilo yönetimi",
    body: "Kilo vermek veya almak için aç bırakmayan, evdeki yemeklere uyan haftalık planlar.",
  },
  {
    title: "Sporcu beslenmesi",
    body: "Antrenman temposuna göre enerji, toparlanma ve performans odaklı beslenme.",
  },
  {
    title: "Metabolik hastalıklar",
    body: "Diyabet, insülin direnci, Hashimoto, kolesterol ve benzeri durumlarda tıbbi beslenme.",
  },
  {
    title: "Online danışmanlık",
    body: "Aydın dışından da haftalık takip, mesajlaşma ve yenilenen listelerle devam.",
  },
  {
    title: "Sürdürülebilir alışkanlık",
    body: "Kısa süreli detoks değil; koruma dönemine kadar giden yaşam biçimi düzeni.",
  },
  {
    title: "Andülasyon desteği",
    body: "Kliniğimizde bölgesel sıkılaşma için andülasyon, beslenme planıyla birlikte sunulur.",
  },
] as const;

/** Hizmet kartları — reklam değil, net kapsam. */
export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Hizmetler
        </p>
        <h2 className="mt-2 max-w-xl font-serif text-3xl text-sage-dark sm:text-4xl">
          Size özel, uygulanabilir bir yol.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-sand bg-background p-6"
            >
              <h3 className="font-serif text-xl text-sage-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
