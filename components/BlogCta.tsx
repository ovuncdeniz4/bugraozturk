import { AppointmentLink } from "@/components/AppointmentLink";
import { WhatsAppIcon } from "@/components/Icons";
import { btnPrimary } from "@/lib/styles";

/** Blog yazısı sonu randevu çağrısı. */
export function BlogCta() {
  return (
    <aside className="mt-10 rounded-[1.5rem] border border-sand bg-cream p-6">
      <p className="font-serif text-xl text-sage-dark">
        Size uygun planı birlikte kuralım.
      </p>
      <p className="mt-2 text-sm text-muted">
        Aydın Efeler’de yüz yüze veya online diyetisyenlik için yazabilirsiniz.
      </p>
      <AppointmentLink className={`${btnPrimary} mt-4`}>
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp’tan Randevu Al
      </AppointmentLink>
    </aside>
  );
}
