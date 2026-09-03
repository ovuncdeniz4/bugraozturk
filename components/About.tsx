const paragraphs = [
  "İstanbul Medipol Üniversitesi Beslenme ve Diyetetik bölümünden 2019 yılında tam burs ile mezun oldum. 2019-2020 yıllarında İzmir’de sporcu beslenmesi ve kişiye özel beslenme üzerine çalıştıktan sonra 2020 Ağustos ayından itibaren Aydın Efeler’de ilk ofisimi açtım.",
  "2024 yılı kasım ayında eşimle birlikte başlatmış olduğumuz genç ve yerli bir girişim projesi olarak Sante Bowl markasını yarattık. Sağlıklı pişirme yöntemleri, temiz içerik, yüksek protein ve lif anlayışını merkeze alan Sante Bowl markası günümüzde halen kendini geliştirmeye devam etmektedir.",
  "2026 yılında Cumhuriyet Mahallesi’nde 2. ofisimi açarak meslek hayatıma tazelenmiş bir şekilde dönmenin mutluluğu ve heyecanını yaşıyorum.",
  "Yasaklara gömülmeden, sizin temponuza uyan listelerle ilerlemeyi daima önemserim. Diyete uymak ya da uymamaktan ziyade diyetin sizin hayatınıza uyarak bir sağlıklı yaşam biçimi haline getirilmesi önemlidir.",
  "Eğer bir diyetisyene ihtiyaç duyarsanız bu son diyetisyeniniz olmalı, sağlıklı günler dilerim…",
] as const;

const reasons = [
  "Beslenme ve Diyetetik mezunu",
  "7 yıllık klinik deneyim",
  "+1500 danışan deneyimi",
  "Kişiye özel esnekliklere açıklık",
  "Süreç boyunca yakın takip",
  "Sınırlı sayıda danışan alımı",
] as const;

/** Hakkımda — özgeçmiş, Sante Bowl ve taranabilir maddeler. */
export function About() {
  return (
    <section id="hakkimda" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Hakkımda
        </p>
        <h2 className="mt-2 font-serif text-3xl text-sage-dark">
          Neden Buğra Öztürk?
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 space-y-2.5">
          {reasons.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-sage-dark">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
