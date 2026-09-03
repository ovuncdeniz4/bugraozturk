/** Ofis, randevu ve sosyal linklerin tek kaynağı. */
export const site = {
  name: "Dyt. Buğra Öztürk",
  shortName: "Buğra Öztürk",
  profession: "Diyetisyen",
  jobLine: "Kişiye özel beslenme danışmanlığı",
  title: "Aydın Diyetisyen | Dyt. Buğra Öztürk",
  description:
    "Aydın Efeler’de kişiye özel, sürdürülebilir beslenme ve diyet danışmanlığı. Kilo verme, sporcu beslenmesi ve online diyetisyen hizmetleri.",
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
