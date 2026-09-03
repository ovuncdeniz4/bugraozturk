import { AppointmentLink } from "@/components/AppointmentLink";
import { WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { btnPrimary } from "@/lib/styles";

/** Sayfa sonu — tek aksiyon: WhatsApp randevu. */
export function CtaBand() {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-sage-dark px-6 py-10 text-cream sm:px-10">
        <h2 className="font-serif text-3xl">Hazırsanız birlikte başlayalım.</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand">
          Kendinize uygun, sürdürülebilir bir beslenme düzeni oluşturmak için
          ilk adımı atın.
        </p>
        <AppointmentLink className={`${btnPrimary} mt-7`}>
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp’tan Randevu Al
        </AppointmentLink>
        <p className="mt-4 text-sm text-sand">
          📍 {site.city} / {site.district}
        </p>
      </div>
    </section>
  );
}
