import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { chatIsWhatsapp, site, whatsappUrl } from "@/lib/site";
import { btnSecondary } from "@/lib/styles";

/** Sayfa sonu çağrı bandı — randevu Maps, sohbet WhatsApp veya Instagram. */
export function CtaBand() {
  const chatHref = whatsappUrl();
  const chatLabel = chatIsWhatsapp() ? "WhatsApp ile yazın" : "Instagram’dan yazın";

  return (
    <section className="px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sage-dark px-6 py-12 text-cream sm:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl">
          İlk adım bir görüşme.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand">
          Randevu için Google Haritalar’daki ofis sayfasını kullanın. Kısa bir
          soru için Instagram veya WhatsApp üzerinden yazabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white hover:bg-clay-dark"
          >
            Randevu Al
          </a>
          <a
            href={chatHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-sage-dark hover:bg-sand"
          >
            {chatIsWhatsapp() ? (
              <WhatsAppIcon className="h-4 w-4" />
            ) : (
              <InstagramIcon className="h-4 w-4" />
            )}
            {chatLabel}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnSecondary} border-white/20 bg-transparent text-cream hover:bg-white/10`}
          >
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
