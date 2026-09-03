# Mimari

Tek dilli Next.js (App Router) vitrin. Veri katmanı yok; içerik ve dış linkler [`lib/site.ts`](../lib/site.ts) içindedir.

- **Randevu:** Google Maps ofis sayfası ve yol tarifi.
- **Sohbet:** WhatsApp (`wa.me`) varsa o; yoksa Instagram DM (`ig.me`).
- **SEO:** `app/layout.tsx` metadata + `JsonLd` LocalBusiness/MedicalBusiness.

Yeni bir ekran eklerken mevcut klasörleri kullanın: `app/` sayfa, `components/` bölüm, `lib/` sabitler. Expo veya ayrı bir API eklemeyin.
