const steps = [
  {
    n: "01",
    title: "Tanışma",
    body: "Hedef, günlük rutin, sevilen yiyecekler ve varsa tahliller birlikte konuşulur.",
  },
  {
    n: "02",
    title: "Kişiye özel plan",
    body: "Listeniz sizin mutfağınıza ve çalışma saatlerinize göre yazılır; herkese aynı şablon yok.",
  },
  {
    n: "03",
    title: "Takip",
    body: "Haftalık ölçüm ve liste yenileme. Takıldığınız yerde iletişim açıktır.",
  },
] as const;

/** Üç adımlık süreç — randevu kaygısını düşürmek için. */
export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-sm font-medium tracking-wide text-sage uppercase">
        Süreç
      </p>
      <h2 className="mt-2 font-serif text-3xl text-sage-dark sm:text-4xl">
        Nasıl ilerliyoruz?
      </h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.n}
            className="rounded-[1.5rem] border border-sand bg-cream p-6"
          >
            <span className="font-serif text-2xl text-sage">{step.n}</span>
            <h3 className="mt-3 font-serif text-xl text-sage-dark">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
