export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "aydin-da-diyetisyen-secarken-nelere-dikkat-edilmeli",
    title: "Aydın’da diyetisyen seçerken nelere dikkat edilmeli?",
    description:
      "Aydın ve Efeler’de diyetisyen ararken bakılması gereken temel noktalar: yaklaşım, takip, ulaşılabilirlik ve kişiye özel plan.",
    date: "2026-09-03",
    paragraphs: [
      "Aydın’da diyetisyen ararken yalnızca “kilo verdiren biri” değil, sizin hayatınıza uyum sağlayacak bir uzman aramak daha kalıcı sonuç verir. İlk bakılacak yer; yasağa dayalı mı yoksa uygulanabilir listelerle mi çalıştığıdır.",
      "Kişiye özel plan, günlük rutininizi ve damak tadınızı dinlemeden yazılamaz. Görüşmede sizi dinleyen, tahlil veya yaşam koşullarınıza göre yönlendiren bir süreç güven verir.",
      "Takip de en az ilk liste kadar önemlidir. Sorularınıza dönüş alabilmek, listeyi haftalık güncellemek ve online seçeneğin olması özellikle Aydın dışında veya yoğun çalışanlar için fark yaratır.",
      "Bu yazı genel bilgilendirmedir; size uygun yol, birebir görüşmede netleşir.",
    ],
  },
  {
    slug: "kilo-vermek-icin-ekmegi-birakmak-gerekir-mi",
    title: "Kilo vermek için ekmeği tamamen bırakmak gerekir mi?",
    description:
      "Ekmeği kesmek kilo vermenin şartı değildir. Porsiyon, öğün düzeni ve sürdürülebilirlik daha belirleyicidir.",
    date: "2026-09-03",
    paragraphs: [
      "Ekmeği tamamen bırakmak kısa vadede tartıda değişiklik gösterebilir; uzun vadede çoğu kişi için sürdürülebilir değildir. Kilo verme, tek bir besini çıkarmaktan çok günlük dengenin oturmasıyla ilgilidir.",
      "Ekmek türü, porsiyon ve öğünde neyle kombine edildiği önemlidir. Bazı danışanlarda miktarı düzenlemek yeterli olur; bazılarında öğün saatleri veya başka alışkanlıklar öne çıkar.",
      "Yasak dili, bir süre sonra “kaçamak” hissini büyütür. Sevdiğiniz yiyecekleri plana yerleştirmek, çoğu zaman daha az direnç ve daha düzenli ilerleme sağlar.",
      "Size özel karar, sağlık geçmişiniz ve hedeflerinizle birlikte verilmelidir.",
    ],
  },
  {
    slug: "aksam-yemek-yemek-kilo-aldirir-mi",
    title: "Akşam yemek yemek kilo aldırır mı?",
    description:
      "Geç saatte yemek tek başına kilo aldırmaz. Toplam denge, öğün düzeni ve uyku daha belirleyicidir.",
    date: "2026-09-03",
    paragraphs: [
      "“Akşam yemek kilo aldırır” cümlesi çok yaygındır; gerçekte vücut saati kadar, gün boyunca ne yediğiniz ve ne kadar hareket ettiğiniz de rol oynar. Geç saatte ağır, dağınık atıştırmalar uykuyu ve ertesi günü zorlaştırabilir.",
      "Vardiyalı çalışanlar veya geç kalkanlar için akşam öğününü tamamen kesmek gerçekçi olmayabilir. Daha işe yarayan yol, öğünü sadeleştirmek ve günün toplam dengesini kurmaktır.",
      "Aç kalarak geceye girmek de sık sık kontrolsüz yeme getirir. Bu yüzden “hiç yeme” kuralı yerine, size uygun bir akşam düzeni kurulur.",
    ],
  },
  {
    slug: "spor-oncesi-ve-sonrasi-ne-yenmeli",
    title: "Spor öncesi ve sonrası ne yenmeli?",
    description:
      "Antrenman öncesi ve sonrası beslenme, enerji ve toparlanma için önemlidir; tek bir evrensel menü yoktur.",
    date: "2026-09-03",
    paragraphs: [
      "Spor öncesi öğün, antrenman türüne ve midenizin rahatına göre değişir. Çoğu kişi için çok ağır bir yemek performans düşürür; tamamen aç antrenman da enerjiyi kesebilir.",
      "Antrenman sonrası toparlanma, sıvı ve bir sonraki öğünün zamanlamasıyla desteklenir. “Mutlaka şu shake” kuralı yoktur; günlük listenizin içine oturan pratik seçenekler daha sürdürülebilirdir.",
      "Aydın’da sporcu beslenmesi danışmanlığı, salon programınızı ve öğün saatlerinizi birlikte okuyarak ilerler. Size özel zamanlama görüşmede netleşir.",
    ],
  },
  {
    slug: "insulin-direncinde-beslenme",
    title: "İnsülin direncinde beslenme",
    description:
      "İnsülin direncinde beslenme; öğün düzeni, porsiyon ve sürdürülebilir alışkanlıklarla ele alınır. Kişisel tıbbi karar yerine geçmez.",
    date: "2026-09-03",
    paragraphs: [
      "İnsülin direnci tanısı hekim ve tahlillerle konur. Beslenme bu sürecin destekleyici parçasıdır; ilaç veya tedavi yerine geçmez.",
      "Uygulamada sık görülen ihtiyaç, uzun açlık–sonra aşırı yeme döngüsünü kırmak ve öğünleri daha dengeli dağıtmaktır. Tek tip “yasak listesi” herkese uymaz.",
      "Aydın’da bu konuda danışmanlık, tahlilleriniz ve günlük temponuz birlikte okunarak planlanır. Kendi başınıza sert kısıtlamaya girmeden önce uzmanla konuşmak daha güvenlidir.",
    ],
  },
  {
    slug: "diyette-tatli-yenir-mi",
    title: "Diyette tatlı yenir mi?",
    description:
      "Tatlıyı tamamen kesmek şart değildir. Miktar, sıklık ve genel düzen birlikte düşünülür.",
    date: "2026-09-03",
    paragraphs: [
      "Tatlıyı ömür boyu yasaklamak çoğu kişide kısa sürer. Sürdürülebilir beslenmede tatlı, plana yerleştirilebilen bir tercih olabilir.",
      "Önemli olan, her günün “bozulduğu” bir döngüye girmemek ve tatlıyı yargı nesnesi haline getirmemektir. Porsiyon ve sıklık, hedefinize göre ayarlanır.",
      "Size uygun sıklık, görüşmede netleşir. Bu yazı genel bilgilendirmedir.",
    ],
  },
  {
    slug: "surdurulebilir-beslenme-nedir",
    title: "Sürdürülebilir beslenme nedir?",
    description:
      "Sürdürülebilir beslenme; kısa süreli detoks değil, günlük hayatta tutulabilen bir düzen kurmaktır.",
    date: "2026-09-03",
    paragraphs: [
      "Sürdürülebilir beslenme, üç gün sıkı–dört gün dağınık gitmeyen bir düzendir. Hedef tartıdaki tek bir sayıdan çok, koruyabileceğiniz alışkanlıklardır.",
      "Yasaklar, sosyal hayatı ve mutfağınızı yok sayan listeler genellikle geri teper. Kişiye özel plan bu yüzden evdeki yemeklere ve tempoza göre yazılır.",
      "Aydın Efeler’deki yaklaşımımız da budur: aç kalmadan, uygulanabilir adımlarla ilerlemek. İlk adım bir görüşmedir.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
