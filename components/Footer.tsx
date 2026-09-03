import Link from "next/link";
import { InstagramIcon, LeafMark } from "@/components/Icons";
import { site } from "@/lib/site";

/** Alt bilgi — adres, sosyal ve KVKK. */
export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-start gap-3">
          <LeafMark className="h-10 w-10" />
          <div>
            <p className="font-serif text-lg text-sage-dark">{site.name}</p>
            <p className="mt-1 max-w-xs text-sm text-muted">{site.fullAddress}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sage-dark hover:text-sage"
          >
            <InstagramIcon className="h-4 w-4" />
            {site.instagramHandle}
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-muted hover:text-sage-dark"
          >
            LinkedIn
          </a>
          <Link href="/kvkk" className="inline-flex min-h-11 items-center text-muted hover:text-sage-dark">
            KVKK Aydınlatma
          </Link>
        </div>
      </div>
      <p className="border-t border-sand px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Bilgilendirme amaçlıdır; tıbbi
        teşhis yerine geçmez.
      </p>
    </footer>
  );
}
