import { site } from "@/lib/site";

/** LocalBusiness şeması — arama motorları için ofis bilgisi. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: site.name,
    description: site.description,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bugraozturk.vercel.app",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: site.district,
      addressRegion: site.city,
      postalCode: site.postalCode,
      addressCountry: "TR",
    },
    sameAs: [site.instagramUrl, site.linkedinUrl, site.mapsUrl],
    areaServed: {
      "@type": "City",
      name: "Aydın",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
