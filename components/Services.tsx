const services = [
  {
    title: "Kilo Verme Danışmanlığı",
    body: "Öncelikle sizi dinlerim. Nasıl bir hayatınız var, beslenme alışkanlıklarınız ve imkanlarınız neler, nelerden hoşlanırsınız gibi size özgü bilgileri toplarım. Daha sonra sizin hayatınıza en uygun beslenme programını kurgular ve takibe başlarım.",
  },
  {
    title: "Kilo Alma Danışmanlığı",
    body: "Kilo almak vermeye göre daha zor geliyorsa evet haklı olabilirsin. Çünkü bir yapıyı inşa etmek, yıkmaya göre çoğunlukla daha zordur ve zaman alır. İnşa sürecinde desteğe ihtiyacın varsa elimden geleni yapmaya hazırım.",
  },
  {
    title: "Sporcu Beslenmesi",
    body: "Voleybol, basketbol, futbol, tenis ve yüzme branşlarında çok sayıda sporcuya beslenme danışmanlığı hizmeti vermiş olmanın tecrübesi ile tamamen antrenman ve müsabaka programına göre doğru beslenme ile performans artışı hedefliyoruz.",
  },
  {
    title: "İnsülin Direnci, Tansiyon, Kolesterol",
    body: "Düzensiz beslenme ve hayat tarzının getirmiş olduğu sağlıksız durumları doğru müdahale ve yöntemlerle, mümkünse ilaçsız veya ilaçlı şekilde, hayatınızdan çıkarmak üzere çalışıyoruz. İlaç kararı hekime aittir.",
  },
  {
    title: "Tiroid Hastalıkları, Hashimoto, Graves",
    body: "Tiroid hastalıklarında doğru ilaç tedavisi ve beslenme desteği ile hayatınıza minimum negatif etki göstermesi için uğraşıyor; yeni alışkanlıklarla metabolik döngüyü desteklemeyi hedefliyoruz.",
  },
  {
    title: "PKOS",
    body: "Kadınlarda sık karşılaştığımız metabolik tablolardan biri olan PKOS, yanlış beslenme alışkanlıklarıyla birlikte seyrettiğinde hayat kalitesini düşürebilir. Doğru beslenme ve takviye desteği ile süreci birlikte yönetmek mümkündür.",
  },
  {
    title: "Online Diyet",
    body: "Online diyet ile yüz yüze diyet arasındaki tek fark evde tartılmak. Görüşme süresi, sıklığı ve yakın takip yüz yüze süreçle aynıdır. Park yeri, mesafe ve iş çıkışı koşturmasından bağımsız ilerlemek isteyenler için özellikle büyükşehirlerden tercih ediliyor.",
  },
] as const;

/** Hizmet kartları — andülasyon yok; tahlil notu ayrı renkte. */
export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Hizmetler
        </p>
        <h2 className="mt-2 max-w-xl font-serif text-3xl text-sage-dark">
          Size nasıl yardımcı olabilirim?
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-sand bg-background p-5"
            >
              <h3 className="font-serif text-lg text-sage-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-clay">
          Tüm danışmanlık süreçlerinde başlangıçta güncel kan tahlili verilmesi
          zorunludur.
        </p>
      </div>
    </section>
  );
}
