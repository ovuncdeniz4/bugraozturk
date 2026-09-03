# Dyt. Buğra Öztürk

Aydın Efeler’deki diyetisyen ofisi için tanıtım sitesi. Randevu Google Haritalar’a, mesaj Instagram / WhatsApp’a yönlenir.

## Geliştirme

```bash
npm install
npm run dev
```

## Vercel

Bu repo Next.js App Router kullanır. Vercel’de **Import Git Repository** ile `ovuncdeniz4/bugraozturk` bağlanır; framework otomatik algılanır.

İsteğe bağlı ortam değişkeni:

- `NEXT_PUBLIC_SITE_URL` — canlı alan adı (`https://...`). Sitemap ve Open Graph için.

WhatsApp numarası gelince [`lib/site.ts`](lib/site.ts) içinde `whatsappNumber` alanını `905xxxxxxxxx` formatında doldurun.

## Sayfalar

- `/` vitrin
- `/kvkk` kısa aydınlatma metni
