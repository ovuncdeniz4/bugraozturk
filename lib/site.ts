/** Ofis, randevu ve sosyal linklerin tek kaynağı. WhatsApp numarası gelince `whatsappNumber` doldurulur. */
export const site = {
  name: "Dyt. Buğra Öztürk",
  shortName: "Buğra Öztürk",
  profession: "Diyetisyen",
  title: "Dyt. Buğra Öztürk | Diyetisyen, Aydın",
  description:
    "Aydın Efeler’de kişiye özel, yasaksız beslenme danışmanlığı. Sporcu beslenmesi, kilo yönetimi ve metabolik hastalıklarda beslenme.",
  clinic: "Sante Clinic",
  city: "Aydın",
  district: "Efeler",
  addressLine: "Hasan Efendi Mah. 1906 Sok. No:6 Daire:1",
  postalCode: "09100",
  fullAddress:
    "Hasan Efendi Mah. 1906 Sok. No:6 Daire:1, Efeler / Aydın",
  mapsUrl: "https://maps.app.goo.gl/a7dtJbzbgJkCRKy79",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Hasan%20Efendi%20Mah.%201906%20Sok.%20No:6%20Daire:1%2C%20Efeler%2C%20Ayd%C4%B1n",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Hasan%20Efendi%20Mah.%201906%20Sok.%20No:6%20Daire:1%20Efeler%20Ayd%C4%B1n&z=16&output=embed",
  instagramUrl: "https://www.instagram.com/dytbugraozturk",
  instagramHandle: "@dytbugraozturk",
  instagramMessageUrl: "https://ig.me/m/dytbugraozturk",
  linkedinUrl: "https://www.linkedin.com/in/dytbugraozturk",
  /** Uluslararası format, artısız: 905xxxxxxxxx. Boşsa mesaj Instagram’a düşer. */
  whatsappNumber: "",
  education: "İstanbul Medipol Üniversitesi, Beslenme ve Diyetetik (2019)",
} as const;

export function whatsappUrl(): string {
  if (site.whatsappNumber) {
    const text = encodeURIComponent(
      "Merhaba Buğra Bey, randevu ve bilgi almak istiyorum.",
    );
    return `https://wa.me/${site.whatsappNumber}?text=${text}`;
  }
  return site.instagramMessageUrl;
}

export function chatIsWhatsapp(): boolean {
  return Boolean(site.whatsappNumber);
}

export const navItems = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#yorumlar", label: "Deneyimler" },
  { href: "/#iletisim", label: "İletişim" },
] as const;
