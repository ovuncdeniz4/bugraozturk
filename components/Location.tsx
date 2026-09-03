import { MapPinIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/styles";

/** Adres, yol tarifi ve Google Maps randevu yönlendirmesi. */
export function Location() {
  return (
    <section id="iletisim" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-sage uppercase">
            Konum
          </p>
          <h2 className="mt-2 font-serif text-3xl text-sage-dark sm:text-4xl">
            Aydın Efeler’de, ulaşması kolay bir ofis.
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
            Randevu ve yol tarifi Google Haritalar üzerindeki ofis sayfasından
            açılır. Oradaki Ara ve Yol tarifi kısayollarını kullanabilirsiniz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Google Haritalar’da aç
            </a>
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
            title="Dyt. Buğra Öztürk ofis konumu"
            src={site.mapsEmbedUrl}
            className="h-[320px] w-full lg:h-full min-h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
