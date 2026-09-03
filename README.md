# Dyt. Buğra Öztürk

Aydın Efeler’deki diyetisyen ofisi için tanıtım sitesi. Ana randevu aksiyonu WhatsApp’tır.

## Geliştirme

```bash
npm install
npm run dev
```

## Vercel ortam değişkenleri

| Değişken | Zorunlu | Açıklama |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Hayır | Canlı adres. Sitemap, canonical ve Open Graph için. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Randevu için evet | Ülke koduyla, işaretsiz. Örnek: `905xxxxxxxxx` |

Numara yoksa randevu butonları Instagram DM’e (`ig.me`) düşer. WhatsApp numarasını Vercel’e ekleyip yeniden deploy edin.

Portre fotoğrafı için `public/bugra-ozturk.jpg` ekleyip yeniden yayınlayın. Logo: `public/logo.png`.

## Sayfalar

- `/` vitrin
- `/blog` yazı listesi (`lib/blog.ts`)
- `/kvkk` aydınlatma
