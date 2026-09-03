import { faqItems } from "@/lib/faq";
import { getSiteUrl, site } from "@/lib/site";

function addressNode() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.addressLine,
    addressLocality: site.district,
    addressRegion: site.city,
    postalCode: site.postalCode,
    addressCountry: "TR",
  };
}

/** Gerçek verilerle WebSite, Person ve LocalBusiness. */
export function JsonLd() {
  const url = getSiteUrl();
  const address = addressNode();
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name: site.name,
      inLanguage: "tr-TR",
      description: site.description,
    },
    {
      "@type": "Person",
      "@id": `${url}/#person`,
      name: site.shortName,
      jobTitle: site.profession,
      url,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "İstanbul Medipol Üniversitesi",
      },
      sameAs: [site.instagramUrl, site.linkedinUrl],
      address,
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${url}/#business`,
      name: site.name,
      description: site.description,
      url,
      image: `${url}/opengraph-image`,
      address,
      areaServed: { "@type": "City", name: "Aydın" },
      sameAs: [site.instagramUrl, site.linkedinUrl, site.mapsUrl],
      employee: { "@id": `${url}/#person` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

/** Yalnızca ana sayfa SSS içeriği. */
export function FaqJsonLd() {
  const url = getSiteUrl();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}/#faq`,
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      }}
    />
  );
}
