const steps = [
  {
    n: "01",
    title: "Tanışma",
    body: "Hedeflerinizi, beslenme alışkanlıklarınızı ve günlük rutininizi değerlendiriyoruz.",
  },
  {
    n: "02",
    title: "Kişiye Özel Plan",
    body: "Sevdiğiniz yiyecekleri, yaşam temponuzu ve hedeflerinizi dikkate alan bir plan oluşturuyoruz.",
  },
  {
    n: "03",
    title: "Düzenli Takip",
    body: "Geri bildirimlerinizi değerlendiriyor, ölçümlerinizi takip ediyor ve gerektiğinde planı güncelliyoruz.",
  },
  {
    n: "04",
    title: "Sürdürülebilir Sonuç",
    body: "Amaç yalnızca kilo vermek değil, uzun vadede sürdürülebilir bir beslenme düzeni oluşturmak.",
  },
] as const;

/** Dört aşamalı süreç — hero’daki “Nasıl Çalışıyoruz?” hedefi. */
export function Process() {
  return (
    <section id="surec" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Süreç
        </p>
        <h2 className="mt-2 font-serif text-3xl text-sage-dark">
          Nasıl çalışıyoruz?
        </h2>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-[1.5rem] border border-sand bg-cream p-5"
            >
              <span className="font-serif text-2xl text-sage">{step.n}</span>
              <h3 className="mt-2 font-serif text-lg text-sage-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
