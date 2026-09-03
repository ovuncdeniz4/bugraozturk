import { faqItems } from "@/lib/faq";

/** SSS — native details, ekstra JS yok. */
export function Faq() {
  return (
    <section id="sss" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Sık sorulan sorular
        </p>
        <h2 className="mt-2 font-serif text-3xl text-sage-dark">
          Randevu öncesi merak edilenler
        </h2>
        <div className="mt-8 space-y-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-[1.25rem] border border-sand bg-cream px-5 py-1"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center py-2 text-sm font-semibold text-sage-dark">
                {item.question}
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
