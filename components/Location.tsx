import { MapPinIcon } from "@/components/Icons";
import { AppointmentLink } from "@/components/AppointmentLink";
import { site } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/styles";

/** Konum ve yol tarifi — randevu WhatsApp, harita ikincil. */
export function Location() {
  return (
    <section id="iletisim" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-sage uppercase">
            Konum
          </p>
          <h2 className="mt-2 font-serif text-3xl text-sage-dark">
            Aydın / Efeler ofisi
          </h2>
          <p className="mt-4 flex items-start gap-2 text-muted">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
            <span>
              {site.clinic}
              <br />
              {site.fullAddress}
            </span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Randevu için WhatsApp’tan yazın. Yol tarifi için Google Haritalar
            ofis sayfasını kullanabilirsiniz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AppointmentLink className={btnPrimary}>
              WhatsApp’tan Randevu Al
            </AppointmentLink>
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              Yol tarifi
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-sand bg-sand/40">
          <iframe
            title="Dyt. Buğra Öztürk ofis konumu, Aydın Efeler"
            src={site.mapsEmbedUrl}
            className="h-[280px] w-full min-h-[280px] border-0 lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
