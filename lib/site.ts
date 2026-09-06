/** Ofis, randevu ve sosyal linklerin tek kaynağı. */
export const site = {
  name: "Dyt. Buğra Öztürk",
  shortName: "Buğra Öztürk",
  profession: "Diyetisyen",
  jobLine: "Kişiye özel beslenme danışmanlığı",
  title: "Aydın Diyetisyen | Dyt. Buğra Öztürk",
  description:
    "Aydın Efeler’de kişiye özel, sürdürülebilir beslenme ve diyet danışmanlığı. Kilo verme, sporcu beslenmesi ve online diyetisyen hizmetleri.",
  clinic: "Yaşam Plaza",
  city: "Aydın",
  district: "Efeler",
  addressLine:
    "Cumhuriyet Mahallesi, Cumhuriyet Caddesi No:25, Yaşam Plaza Kat 5, Daire 25",
  postalCode: "09020",
  fullAddress:
    "Cumhuriyet Mahallesi, Cumhuriyet Caddesi No:25, Yaşam Plaza Kat 5, Daire 25, Efeler / Aydın",
  /** Harita kaydı gecikmeli olabilir; pin binanın adres aramasına gider. */
  mapsQuery: "Yaşam Plaza, Cumhuriyet Caddesi No:25, Efeler, Aydın",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ya%C5%9Fam%20Plaza%2C%20Cumhuriyet%20Caddesi%20No%3A25%2C%20Efeler%2C%20Ayd%C4%B1n",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Ya%C5%9Fam%20Plaza%2C%20Cumhuriyet%20Caddesi%20No%3A25%2C%20Efeler%2C%20Ayd%C4%B1n",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Ya%C5%9Fam%20Plaza%2C%20Cumhuriyet%20Caddesi%20No%3A25%2C%20Efeler%2C%20Ayd%C4%B1n&z=16&output=embed",
  instagramUrl: "https://www.instagram.com/dytbugraozturk",
  instagramHandle: "@dytbugraozturk",
  instagramMessageUrl: "https://ig.me/m/dytbugraozturk",
  linkedinUrl: "https://www.linkedin.com/in/dytbugraozturk",
  /** Kod içi yedek. Tercihen NEXT_PUBLIC_WHATSAPP_NUMBER kullanın. */
  whatsappNumber: "",
  education: "İstanbul Medipol Üniversitesi, Beslenme ve Diyetetik (2019)",
  keywords: [
    "Aydın diyetisyen",
    "Efeler diyetisyen",
    "Aydın diyetisyen önerisi",
    "Aydın kilo verme diyetisyeni",
    "Aydın sporcu beslenmesi",
    "Aydın online diyetisyen",
    "Efeler kilo verme",
    "Buğra Öztürk",
  ],
} as const;

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://bugraozturk.vercel.app";
}

export function getWhatsappNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  return fromEnv || site.whatsappNumber;
}

/** Birincil randevu: WhatsApp; numara yoksa Instagram DM. */
export function appointmentUrl(): string {
  const number = getWhatsappNumber();
  if (number) {
    const text = encodeURIComponent(
      "Merhaba Buğra Bey, randevu almak istiyorum.",
    );
    return `https://wa.me/${number}?text=${text}`;
  }
  return site.instagramMessageUrl;
}

export function chatIsWhatsapp(): boolean {
  return Boolean(getWhatsappNumber());
}

export const navItems = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#surec", label: "Süreç" },
  { href: "/#sss", label: "SSS" },
  { href: "/blog", label: "Yazılar" },
  { href: "/#iletisim", label: "İletişim" },
] as const;
