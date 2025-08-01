const posts = [
  {
    id: 1,
    title: "Tarihte Dönüm Noktası: 1453",
    content:
      "İstanbul'un fethi sadece bir şehrin değil, bir çağın sonuydu. Bizans İmparatorluğu’nun yıkılması, Avrupa'da Rönesans’ın hız kazanmasına neden oldu. Fatih Sultan Mehmet'in ileri görüşlü stratejileri ve kuşatma teknikleri, askeri tarih açısından incelenmeye değer unsurlar barındırır. Bu olayla birlikte Orta Çağ kapandı, Yeni Çağ başladı. Ben medya sektöründe çalışan, 2 yıl kadar yerel TV’lerde yayın yönetmenliği yapmış biriyim. Bir 2 yıl kadar da belgesel kameramanlığı yaptım. Balkan ülkelerinde TV’ler ve İstanbul Belediyesi için Osmanlı Tarihi’yle alakalı belgeseller çektim. Aslında işiniz medya olunca zaten çevreniz ve bilginiz oluşuyor. Bilgiyi daha kolay edinmenin yolunu öğreniyorsunuz. 10 Kitap okumaktansa o 10 kitabı içeren 2 kitabı okumayı, o kitapları bulmayı, belgeli-kaynaklı içeriklere ulaşmayı öğreniyorsunuz. Buna “gazetecilik” de diyebilirsiniz. Hem burada, hem Youtube’da işlediğim konular aslında benim ilgi alanlarım sadece. Neyse, Kendimi yeterince tanıttığıma göre az biraz şahsi fikirlerime değinelim… Öncelikle benim herhangi bir dini görüşe bağlılığım veya insanî sıfatlar giydirilmiş bir Tanrı’ya dair bir inancım yoktur. Aslında düşüncelerimi Agnostik ile Septik arasında diye adlandırabiliriz. Ben arayışçı bir insanım ve yazarken de elinden geldiğince tarafsız, objektif bir görüş açısı takınmaya çalışıyorum. Yani bazen dini övdüğüm bazense yerdiğim yazılara denk gelmeniz normaldir. Çünkü “yiğidi öldür, hakkını yeme” mantığıyla çalışırım. Kaldı ki din ile alakalı yazılarım blogun ancak %10–20lik bir bölümünü oluşturuyor. Ağırlıklı olarak bilimsel projeler ve Kuantum fiziği esaslarıyla alakalı yazılar yazmaya çalışıyorum. ",
    date: "03 Temmuz 2025",
    imageUrl: "https://picsum.photos/id/1000/600/600"
  },
  {
    id: 2,
    title: "Yapay Zekânın Evrimi ve Etik Sınırlar",
    content:
      "Yapay zekâ sistemleri artık sadece algoritmalar değil, karar verme yetenekleri olan varlıklar haline geldi. Bu gelişme, özellikle sağlık, hukuk ve savunma alanlarında etik soruları gündeme getiriyor. Bir yapay zekâ doktorun önerisiyle hayat kurtarabilir mi? Ya da bir algoritmanın verdiği mahkeme kararı adil midir? Bu soruların yanıtları gelecekte insanlık adına kritik rol oynayacak. İstanbul'un fethi sadece bir şehrin değil, bir çağın sonuydu. Bizans İmparatorluğu’nun yıkılması, Avrupa'da Rönesans’ın hız kazanmasına neden oldu. Fatih Sultan Mehmet'in ileri görüşlü stratejileri ve kuşatma teknikleri, askeri tarih açısından incelenmeye değer unsurlar barındırır. Bu olayla birlikte Orta Çağ kapandı, Yeni Çağ başladı. Ben medya sektöründe çalışan, 2 yıl kadar yerel TV’lerde yayın yönetmenliği yapmış biriyim. Bir 2 yıl kadar da belgesel kameramanlığı yaptım. Balkan ülkelerinde TV’ler ve İstanbul Belediyesi için Osmanlı Tarihi’yle alakalı belgeseller çektim. Aslında işiniz medya olunca zaten çevreniz ve bilginiz oluşuyor. Bilgiyi daha kolay edinmenin yolunu öğreniyorsunuz. 10 Kitap okumaktansa o 10 kitabı içeren 2 kitabı okumayı, o kitapları bulmayı, belgeli-kaynaklı içeriklere ulaşmayı öğreniyorsunuz.",
    date: "28 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1027/200/200"
  },
  {
    id: 3,
    title: "Bir Yönetmenlik Dehası: Christopher Nolan",
    content:
      "Christopher Nolan, zaman kavramını sinemada farklı boyutlarda işleyen nadir yönetmenlerden biri. Memento, Inception ve Interstellar gibi filmleriyle sadece gişe başarısı değil, entelektüel tartışmalar da yarattı. Özellikle anlatı yapısını ters yüz eden yöntemleri ve kurgusal zeka kullanımı sinema tarihine damga vurdu.",
    date: "24 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1050/200/200"
  },
  {
    id: 4,
    title: "Kayıp Dillerin Peşinde: Dilbilimin Gizemli Yüzü",
    content:
      "Dünya üzerinde konuşulmuş ve artık ölmüş binlerce dil var. Bu dillerin çözümlenmesi, sadece kelimelerin değil, o toplumların dünya görüşlerinin anlaşılması açısından da büyük önem taşır. Linear A, Rongorongo ve Etrüskçe gibi yazıtlar hâlâ çözülememiş dil gizemlerini barındırıyor. Dilbilimciler bu yazıtlar üzerinden hem kültürel hem de matematiksel analizler yapmaya çalışıyor.",
    date: "19 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1041/200/200"
  },
  {
    id: 5,
    title: "Mars'a Yolculuk: İnsanlığın Yeni Evi mi?",
    content:
      "NASA ve SpaceX'in öncülüğünde devam eden Mars görevleri, insanlığın uzaydaki kaderini belirleyebilir. Fakat Mars’ta yaşam kurmak sandığımız kadar kolay değil. Atmosfer eksikliği, düşük yerçekimi, radyasyon tehlikesi ve su kıtlığı gibi zorluklar, koloni fikrini hayalden öteye taşımak için çözülmesi gereken dev problemler olarak karşımızda duruyor.",
    date: "15 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1033/200/200"
  },
  {
    id: 6,
    title: "Modern Şehircilik ve Sessiz Depresyon",
    content:
      "Betona gömülmüş şehirlerde yaşamak, bireyin doğayla olan bağını koparıyor. Yeşil alanların azalması, gürültü kirliliği ve yalnızlaşma modern şehir hayatında yaygınlaşan depresyonun ana sebepleri arasında gösteriliyor. Psikologlar, doğayla temasın ruh sağlığı üzerindeki olumlu etkisini vurgularken; şehir planlamacıları bu ihtiyacı henüz yeterince karşılayamıyor.",
    date: "10 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1005/200/200"
  },
    {
    id: 7,
    title: "Mars'a Yolculuk: İnsanlığın Yeni Evi mi?",
    content:
      "NASA ve SpaceX'in öncülüğünde devam eden Mars görevleri, insanlığın uzaydaki kaderini belirleyebilir. Fakat Mars’ta yaşam kurmak sandığımız kadar kolay değil. Atmosfer eksikliği, düşük yerçekimi, radyasyon tehlikesi ve su kıtlığı gibi zorluklar, koloni fikrini hayalden öteye taşımak için çözülmesi gereken dev problemler olarak karşımızda duruyor.",
    date: "15 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1033/200/200"
  },
  {
    id: 8,
    title: "Modern Şehircilik ve Sessiz Depresyon",
    content:
      "Betona gömülmüş şehirlerde yaşamak, bireyin doğayla olan bağını koparıyor. Yeşil alanların azalması, gürültü kirliliği ve yalnızlaşma modern şehir hayatında yaygınlaşan depresyonun ana sebepleri arasında gösteriliyor. Psikologlar, doğayla temasın ruh sağlığı üzerindeki olumlu etkisini vurgularken; şehir planlamacıları bu ihtiyacı henüz yeterince karşılayamıyor.",
    date: "10 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1005/200/200"
  },
    {
    id: 9,
    title: "Mars'a Yolculuk: İnsanlığın Yeni Evi mi?",
    content:
      "NASA ve SpaceX'in öncülüğünde devam eden Mars görevleri, insanlığın uzaydaki kaderini belirleyebilir. Fakat Mars’ta yaşam kurmak sandığımız kadar kolay değil. Atmosfer eksikliği, düşük yerçekimi, radyasyon tehlikesi ve su kıtlığı gibi zorluklar, koloni fikrini hayalden öteye taşımak için çözülmesi gereken dev problemler olarak karşımızda duruyor.",
    date: "15 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1033/200/200"
  },
  {
    id: 10,
    title: "Modern Şehircilik ve Sessiz Depresyon",
    content:
      "Betona gömülmüş şehirlerde yaşamak, bireyin doğayla olan bağını koparıyor. Yeşil alanların azalması, gürültü kirliliği ve yalnızlaşma modern şehir hayatında yaygınlaşan depresyonun ana sebepleri arasında gösteriliyor. Psikologlar, doğayla temasın ruh sağlığı üzerindeki olumlu etkisini vurgularken; şehir planlamacıları bu ihtiyacı henüz yeterince karşılayamıyor.",
    date: "10 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1005/200/200"
  },
    {
    id: 11,
    title: "Mars'a Yolculuk: İnsanlığın Yeni Evi mi?",
    content:
      "NASA ve SpaceX'in öncülüğünde devam eden Mars görevleri, insanlığın uzaydaki kaderini belirleyebilir. Fakat Mars’ta yaşam kurmak sandığımız kadar kolay değil. Atmosfer eksikliği, düşük yerçekimi, radyasyon tehlikesi ve su kıtlığı gibi zorluklar, koloni fikrini hayalden öteye taşımak için çözülmesi gereken dev problemler olarak karşımızda duruyor.",
    date: "15 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1033/200/200"
  },
  {
    id: 12,
    title: "Modern Şehircilik ve Sessiz Depresyon",
    content:
      "Betona gömülmüş şehirlerde yaşamak, bireyin doğayla olan bağını koparıyor. Yeşil alanların azalması, gürültü kirliliği ve yalnızlaşma modern şehir hayatında yaygınlaşan depresyonun ana sebepleri arasında gösteriliyor. Psikologlar, doğayla temasın ruh sağlığı üzerindeki olumlu etkisini vurgularken; şehir planlamacıları bu ihtiyacı henüz yeterince karşılayamıyor.",
    date: "10 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1005/200/200"
  },
    {
    id: 13,
    title: "Mars'a Yolculuk: İnsanlığın Yeni Evi mi?",
    content:
      "NASA ve SpaceX'in öncülüğünde devam eden Mars görevleri, insanlığın uzaydaki kaderini belirleyebilir. Fakat Mars’ta yaşam kurmak sandığımız kadar kolay değil. Atmosfer eksikliği, düşük yerçekimi, radyasyon tehlikesi ve su kıtlığı gibi zorluklar, koloni fikrini hayalden öteye taşımak için çözülmesi gereken dev problemler olarak karşımızda duruyor.",
    date: "15 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1033/200/200"
  },
  {
    id: 14,
    title: "Modern Şehircilik ve Sessiz Depresyon",
    content:
      "Betona gömülmüş şehirlerde yaşamak, bireyin doğayla olan bağını koparıyor. Yeşil alanların azalması, gürültü kirliliği ve yalnızlaşma modern şehir hayatında yaygınlaşan depresyonun ana sebepleri arasında gösteriliyor. Psikologlar, doğayla temasın ruh sağlığı üzerindeki olumlu etkisini vurgularken; şehir planlamacıları bu ihtiyacı henüz yeterince karşılayamıyor.",
    date: "10 Haziran 2025",
    imageUrl: "https://picsum.photos/id/1005/200/200"
  }
];

export default posts;
