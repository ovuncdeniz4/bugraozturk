const services = [
  {
    title: "Kilo Verme Danışmanlığı",
    body: "Aç kalmadan, günlük hayatınıza uyan planlarla kilo vermenize eşlik ederim. Aydın’da yüz yüze veya online takip mümkündür.",
  },
  {
    title: "Kilo Alma Danışmanlığı",
    body: "Sağlıklı kilo almak için öğün düzeni ve uygulanabilir listelerle ilerleriz. Ezbere “çok ye” yaklaşımı yoktur.",
  },
  {
    title: "Sporcu Beslenmesi",
    body: "Antrenman temposuna göre enerji ve toparlanma planı. Aydın’da sporcu beslenmesi danışmanlığı ofiste veya uzaktan yürür.",
  },
  {
    title: "İnsülin Direncinde Beslenme",
    body: "Öğün düzeni ve sürdürülebilir alışkanlıklarla destekleyici bir plan kurarız. Tanı ve tedavi hekim kararıdır.",
  },
  {
    title: "Diyabette Beslenme",
    body: "Tip 1 ve tip 2 diyabette, hekim takibinizle uyumlu beslenme danışmanlığı. Liste size ve rutininize göre yazılır.",
  },
  {
    title: "Hashimoto ve Tiroid Beslenmesi",
    body: "Tiroid sürecinde uygulanabilir, kişiye özel bir beslenme düzeni. Sert yasak listeleri yerine dengeyi konuşuruz.",
  },
  {
    title: "Online Diyetisyen",
    body: "Aydın dışında olsanız da görüşme, liste ve takip uzaktan devam eder. Şehir bağımsız danışmanlık mümkündür.",
  },
  {
    title: "Sürdürülebilir Beslenme",
    body: "Kısa süreli detoks değil; koruyabileceğiniz bir yaşam düzeni. Amaç, diyet bittikten sonra da devam edebilmektir.",
  },
] as const;

/** Kullanıcıların aradığı hizmet adları; andülasyon geri planda. */
export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Hizmetler
        </p>
        <h2 className="mt-2 max-w-xl font-serif text-3xl text-sage-dark">
          Size nasıl yardımcı olabilirim?
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-sand bg-background p-5"
            >
              <h3 className="font-serif text-lg text-sage-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted">
          Ofiste, beslenme danışmanlığına ek olarak andülasyon desteği de
          sunulabilir. Ana çalışma alanı kişiye özel beslenme planıdır.
        </p>
      </div>
    </section>
  );
}
