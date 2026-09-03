import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma",
  description: `${site.name} web sitesi aydınlatma metni.`,
  alternates: { canonical: "/kvkk" },
};

/** Kısa KVKK sayfası — sitede form yok, yalnızca dış bağlantılar. */
export default function KvkkPage() {
  return (
    <>
      <Header />
      <main id="icerik" className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Yasal
        </p>
        <h1 className="mt-2 font-serif text-4xl text-sage-dark">
          KVKK aydınlatma metni
        </h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Bu internet sitesi {site.name} hakkında genel bilgi vermek ve
            randevu için WhatsApp, Instagram ve Google Haritalar gibi dış
            servislere yönlendirmek amacıyla yayınlanır.
          </p>
          <p>
            Sitede üyelik, iletişim formu veya çerezle profilleme bulunmaz.
            Randevu veya mesaj için tıkladığınız bağlantılar Google, Meta
            (Instagram) veya WhatsApp’ın kendi gizlilik politikalarına tabidir.
          </p>
          <p>
            Veri sorumlusu: {site.name}, {site.fullAddress}.
          </p>
          <p>
            Talepleriniz için Instagram ({site.instagramHandle}) üzerinden
            ulaşabilirsiniz.
          </p>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-sage hover:text-sage-dark"
        >
          Ana sayfaya dön
        </Link>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
