# Hurdacı Durmaz Metal Web Sitesi — Mimari & İnşa Planı

Bu doküman, **Hurdacı Durmaz Metal** firması için sıfırdan kurulacak kurumsal, yüksek dönüşüm (lead generation) ve yerel SEO odaklı web sitesinin **teknik mimarisini**, **sayfa/bileşen planını**, **tasarım sistemini** ve **adım adım inşa sırasını** tanımlar. Gemini, Antigravity ve Codex gibi AI kodlama ajanlarına yeni bir projede bağlam olarak doğrudan verilmek üzere hazırlanmıştır.

---

## 1. Proje Özeti

* **Firma Adı:** Hurdacı Durmaz Metal
* **Sektör / Faaliyet Alanı:** 
  1. **Metal Hurda Alımı:** Bakır, Sarı (Pirinç), Demir, Alüminyum, Paslanmaz (Krom), Çinko, Kablo hurdası.
  2. **2. El & Hurda Klima / Kombi Alımı:** Adresten söküm veya dükkandan teslim, çalışan veya arızalı tüm marka/modellerin değerinde nakit alımı.
  3. **2. El Endüstriyel Malzemeler & Makineler:** Fabrika, atölye, şantiye fazlası üretim makineleri, jeneratörler, elektrik panoları, chiller ve kompresörler.
  4. **Kentsel Dönüşüm Yıkımı & Çatı/Bina Sökümü:** Hurda karşılığı fabrika, depo, çatı ve bina söküm/yıkım işleri.
  5. **Adresten Hurda Alımı:** Kendi araç filosu ve personeli ile kapıda yerinde hassas dijital kantar tartımı ve anında nakit/havale ödeme.

* **Sitenin Birincil Amacı:** Güven tesis etmek, metal ve hurda çeşitlerini net listelemek, **2. el klima/kombi alımını landing page'de özel olarak vitrine çıkarmak** ve ziyaretçiyi **anında telefon aramasına ya da WhatsApp'tan fotoğraf atıp fiyat almaya (lead generation)** yönlendirmek.
* **Hedef Kitle:**
  * **B2C (Bireysel & Ev Kullanıcıları):** Eski kombisini, klimasını, tadilat sonrası çıkan demir/bakır/kablolarını satmak isteyenler. Hızlı karar verir, kapıdan alınmasını ve anında nakit para verilmesini ister.
  * **B2B (Sanayi, Şantiye, Atölye, Müteahhitler):** Kentsel dönüşüm yıkımı, fabrika sökümü, tonajlı hurda satışı yapacak olanlar. Hassas tartım, resmi kantar fişi, güvenlik ve nakit likidite arar.

---

## 2. Teknoloji Yığını ve Seçim Gerekçeleri

| Katman | Tercih | Neden Bu Tercih? |
|---|---|---|
| **Framework** | **Astro 5 (SSG)** | Sıfır gereksiz JavaScript yükü. "En yakın hurdacı", "hurda bakır fiyatı", "2. el klima alanlar" gibi acil yerel aramalarda Google PageSpeed skoru 95-100 olmalı. Hız doğrudan Google Ads kalite puanını artırır ve tıklama maliyetini düşürür. |
| **Stil Sistemi** | **Tailwind CSS v3/v4** | Endüstriyel renk paleti, hızlı mobil gridler ve tasarım token'ları için utility-first yaklaşım. |
| **Etkileşim (Islands)** | **React 19 + Radix UI / Lucide React** | Floating WhatsApp butonu, hızlı teklif modalı, mobil menü ve SSS akordiyonu için hafif ada (island) mimarisi. |
| **İçerik Yönetimi** | **Astro Content Collections** | Hizmetler (`services`), metal türleri (`metals`) ve söküm/yıkım projeleri (`operations`) için tip-güvenli Markdown altyapısı. Kod bilmeden yeni hurda türü eklenebilir. |
| **SEO & Şema** | **Schema.org (RecyclingCenter)** | Google Haritalar ve yerel aramalarda ilk sıraya çıkmak için JSON-LD yapısal verisi. |
| **Form Backend** | **Web3Forms veya WhatsApp Direct** | Hurdacılıkta form doldurmak yerine doğrudan WhatsApp API linkiyle fotoğraf gönderimi tercih edilir; yedek iletişim formu için Web3Forms kullanılır. |
| **Hosting & Dağıtım** | **Vercel** | Ücretsiz SSL, global CDN, hızlı git-push deploy ve kesintisiz uptime. |

---

## 3. Tasarım Yönü ve Endüstriyel Görsel Kimlik

Hurdacılık sektörü **sağlam, dürüst, net ve endüstriyel** bir alan olmalıdır. Jenerik mor-mavi SaaS renklerinden, aşırı süslü gradyanlardan ve gereksiz soyut çizimlerden kaçınılmalıdır.

### 🎨 Renk Paleti (CSS Değişkenleri & Tailwind)
* **Zemin:** `#0B0F19` (Karanlık Endüstriyel Zemin) ve `#F8FAFC` (Aydınlık İçerik Alanları)
* **Ana Karakter Rengi (Antrasit / Çelik):** `#1E293B` ve `#0F172A` — Ağır sanayi, güvenilirlik ve kurumsallık
* **Birincil Vurgu (Endüstriyel Amber / İş Güvenliği Sarısı):** `#F59E0B` ve `#D97706` — Kantar, iş makineleri ve yüksek dikkat çekici butonlar için
* **İkincil Vurgu (Metalik Bakır / Bronz):** `#EA580C` ve `#C2410C` — Bakır ve değerinde nakit ödeme çağrışımı
* **WhatsApp Yeşili:** `#25D366` — Sürtünmesiz iletişim için topbar ve floating butonda değişmez resmi renk

### 🔤 Tipografi & Doku
* **Font Ailesi:** `Plus Jakarta Sans` veya `Inter` (net, okunabilirliği yüksek, endüstriyel tabelalara uygun).
* **Görsel Dili:** Parlak stok görseller yerine **gerçek kantar tartımı, kamyonete yükleme, hurda bakır yığını, sökülen klima dış üniteleri, oksijenle kesim yapan usta** görselleri veya bu hissi veren gerçekçi endüstriyel fotoğraflar.

> **AI Tasarım Talimatı:** *"Sitede gereksiz dekoratif boşluklar bırakma. Ziyaretçi sayfayı açtığında ilk 3 saniyede 'Biz hurdacıyız, kapına geliriz, yerinde tartarız, anında nakit öderiz' mesajını ve kocaman arama/WhatsApp butonlarını görmeli."*

---

## 4. Proje Klasör Mimarisi

```
durmaz-metal/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css          # Endüstriyel renk değişkenleri & Tailwind katmanları
│   ├── components/
│   │   ├── Header.astro            # Topbar (WhatsApp + Tel) + Ana Navigasyon
│   │   ├── Footer.astro            # İletişim, çalışma saatleri, hızlı linkler, yasal uyarı
│   │   ├── Meta.astro              # RecyclingCenter şeması & dinamik OG etiketleri
│   │   ├── sections/               # Ana sayfa modülleri
│   │   │   ├── HeroSection.astro   # Güçlü başlık + 2 ana CTA (Ara & WhatsApp)
│   │   │   ├── TrustBadges.astro   # 3 Altın Kural (Adresten Alım, Hassas Tartım, Nakit Ödeme)
│   │   │   ├── KlimaSpotlight.astro# 2. EL KLİMA & KOMBİ ÖZEL VİTRİN BÖLÜMÜ (Önemli!)
│   │   │   ├── MetalsGrid.astro    # Bakır, Sarı, Demir, Alüminyum, Paslanmaz, Çinko kartları
│   │   │   ├── ServicesGrid.astro  # Kentsel Dönüşüm Yıkımı, Endüstriyel Makine Alımı
│   │   │   ├── ProcessSteps.astro  # 3 Adımda Kolay Satış (Fotoğraf At -> Tartalım -> Nakit Al)
│   │   │   ├── WhyUsSection.astro  # Neden Durmaz Metal? (Kantar fişi, şeffaf ticaret)
│   │   │   ├── FaqSection.astro    # Sıkça Sorulan Sorular (Fiyatlar nasıl belirlenir vb.)
│   │   │   └── ContactBanner.astro # Kapanış çağrısı
│   │   └── ui/                     # Reusable UI parçaları
│   │       ├── Button.astro
│   │       ├── FloatingWhatsApp.astro # SAĞ ALTTA SABİT FLOATING WHATSAPP
│   │       ├── QuickCallBar.astro     # Mobilde alt ekrana yapışık arama çubuğu
│   │       ├── MetalCard.astro
│   │       └── Badge.astro
│   ├── content/
│   │   ├── services/               # Hizmet detay markdown dosyaları
│   │   │   ├── adresten-hurda-alimi.md
│   │   │   ├── ikinci-el-klima-kombi-alimi.md
│   │   │   ├── endustriyel-makine-ve-ekipman-alimi.md
│   │   │   └── kentsel-donusum-ve-bina-yikimi.md
│   │   └── metals/                 # Metal türleri detayları
│   │       ├── bakir-ve-kablo-hurdasi.md
│   │       ├── sari-pirinc-hurdasi.md
│   │       ├── demir-ve-celik-hurdasi.md
│   │       ├── aluminyum-hurdasi.md
│   │       ├── paslanmaz-krom-hurdasi.md
│   │       └── cinko-hurdasi.md
│   ├── data_files/
│   │   └── company.json            # Firmanın tüm iletişim verisi tek merkezde
│   ├── layouts/
│   │   └── MainLayout.astro        # Header + Footer + Floating WhatsApp + SEO Meta
│   ├── pages/
│   │   ├── index.astro             # Ana sayfa (Tüm dönüşümün kalbi)
│   │   ├── hizmetler/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro        # Hizmet detayları
│   │   ├── hurda-cesitleri/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro        # Hurda türleri detayları
│   │   ├── ikinci-el-klima-kombi.astro # Özel Landing Page
│   │   ├── hakkimizda.astro
│   │   ├── iletisim.astro
│   │   └── 404.astro
│   └── content.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 5. Merkezi Veri Dosyası (`src/data_files/company.json`)

Tüm projede telefon numarası, WhatsApp linki ve firma bilgileri tek bir JSON'dan beslenir:

```json
{
  "companyName": "Hurdacı Durmaz Metal",
  "legalName": "Durmaz Metal Geri Dönüşüm ve Hurdacılık Hizmetleri",
  "slogan": "Yerinde Değerinde Nakit Alım & Adresten Hurda Hizmeti",
  "description": "Bakır, sarı, demir, alüminyum hurdası ve 2. el klima/kombi alımı. Hurdanızın fotoğrafını WhatsApp'tan atın, anında nakit fiyat verelim. Adresinizden tartıp teslim alıyoruz.",
  "phone": "+90 5XX XXX XX XX",
  "phoneRaw": "+905XXXXXXXXX",
  "whatsappNumber": "+90 5XX XXX XX XX",
  "whatsappRaw": "905XXXXXXXXX",
  "defaultWhatsAppMessage": "Merhaba Durmaz Metal, elimde hurda / 2. el cihaz var. Fotoğrafını gönderip fiyat teklifi almak istiyorum.",
  "klimaWhatsAppMessage": "Merhaba, satmak istediğim 2. el / hurda klima ve kombim var. Fiyat teklifi alabilir miyim?",
  "email": "iletisim@durmazmetal.com",
  "address": {
    "street": "Sanayi Mahallesi, Hurdacılar Sitesi No: 12",
    "district": "Güngören / İkitelli",
    "city": "İstanbul",
    "country": "Türkiye"
  },
  "workingHours": {
    "weekdays": "07:30 - 20:00",
    "saturday": "07:30 - 20:00",
    "sunday": "Adresten Alım İçin 7/24 Açık",
    "support": "7/24 WhatsApp Teklif Hattı"
  },
  "serviceAreas": [
    "İstanbul Avrupa Yakası",
    "İstanbul Anadolu Yakası",
    "Kocaeli (Gebze Sanayi)"
  ],
  "corePillars": [
    {
      "title": "Adresten Hurda Alımı",
      "desc": "Kendi araçlarımız ve ekibimizle kapınıza geliyoruz, siz yorulmayın."
    },
    {
      "title": "Hassas Dijital Tartım",
      "desc": "Gözünüzün önünde, elektronik kantarla şeffaf ve gramı gramına tartım."
    },
    {
      "title": "Anında Değerinde Nakit",
      "desc": "Tartım bittiği an elden nakit veya IBAN'a anında transfer."
    }
  ]
}
```

---

## 6. Sayfa Akışı ve Bileşen Envanteri

### 🏠 1. Ana Sayfa (`index.astro`) Bölümleri

1. **TopBar (En Üst Bilgi Çubuğu):**
   * Sol: "İstanbul Geneli Adresten Hurda ve 2. El Klima Alımı"
   * Sağ Üst: **Doğrudan WhatsApp İkonu + Linki** ve **Tek Tıkla Arama Butonu (`tel:`)**.
2. **Header (Navigasyon):**
   * Logo: Hurdacı Durmaz Metal (kanca, metal, kantar temalı ikon).
   * Menü: Ana Sayfa, Hurda Çeşitleri, 2. El Klima & Kombi, Kentsel Dönüşüm, İletişim.
   * Sağ Buton: "Fotoğraf At Fiyat Al" (WhatsApp yeşili buton).
3. **HeroSection (Ana Karşılama):**
   * Güçlü Başlık: *"Metalleriniz ve 2. El Cihazlarınız Değerinde Nakite Dönüşsün"*
   * Alt Başlık: *"Adresinizden kendi araçlarımızla alıyor, yerinde şeffaf kantarla tartıyor, anında nakit ödüyoruz."*
   * İki Ana Buton:
     - 🟢 **WhatsApp'tan Fotoğraf Gönder (5 Dk'da Fiyat Al)**
     - 📞 **Hemen Ustayla Görüş (Telefon Et)**
4. **TrustBadges (3 Güven Direği):**
   * 🚛 **Adresten Teslim:** Bizi arayın, 1 saatte kapınıza gelelim.
   * ⚖️ **Hassas Tartım:** Tartıda yanılma yok, şeffaf tartım.
   * 💵 **Peşin Nakit:** Malı almadan nakit ödeme garantisi.
5. **KlimaSpotlight (ÖZEL VURGU BÖLÜMÜ - Müşterinin Hassas Talebi):**
   * Başlık: *"Eski veya Çalışır Durumdaki Klima ve Kombilerinizi Değerinde Alıyoruz"*
   * Açıklama: *"İster adresinizden biz sökelim, ister dükkanımıza siz getirin. Hurda veya 2. el tüm split, salon tipi, kaset tipi klimalar ve kombiler en yüksek fiyattan nakit alınır."*
   * Özellikler: Söküm hizmeti bizden + Çalışan cihaza ekstra değer + Toplu alım.
   * CTA: *"Klimanızın modelini ve fotoğrafını atın, hemen değer biçelim."*
6. **MetalsGrid (Hurda Çeşitleri Vitrini):**
   * Bakır (Soyma, Kırkambar, Lama)
   * Sarı / Pirinç (Musluk, Vana, Radyatör)
   * Demir & Çelik (İnşaat, Profil, Döküm)
   * Alüminyum (Profil, Jant, Matbaa, Kutu)
   * Paslanmaz / Krom (304, 316 Sanayi Hurdası)
   * Çinko & Kurşun (Çatı olukları, akü hurdaları)
7. **ServicesGrid (Büyük Ölçekli İşler):**
   * Kentsel Dönüşüm & Bina Yıkımı
   * Fabrika, Depo ve Tesis Sökümü
   * 2. El Endüstriyel Makine ve Malzeme Alımı
8. **ProcessSteps (Nasıl Çalışıyoruz? - 3 Kolay Adım):**
   * 1. Adım: Hurdanızın veya cihazınızın fotoğrafını WhatsApp'tan atın.
   * 2. Adım: En yüksek güncel borsa fiyatından teklif verelim, adresinize gelelim.
   * 3. Adım: Yerinde tartıp, paranızı anında peşin nakit ödeyelim.
9. **FaqSection (Sıkça Sorulan Sorular):**
   * "Adresten alım için minimum bir miktar var mı?"
   * "Klimaları yerinden siz mi söküyorsunuz?"
   * "Ödemeyi nasıl yapıyorsunuz?"
10. **Bottom CTA & Footer:**
    * Kapanışta büyük telefon ve WhatsApp kutusu + açık adres + harita.

---

## 7. İletişim & CTA Stratejisi (Sitenin En Kritik Katmanı)

Hurdacılıkta form okuyan insan azdır; herkes **anında ses duymak veya WhatsApp'tan hızlı cevap almak** ister. Bu sebeple 4 katmanlı sürtünmesiz CTA kurulur:

1. **TopBar Sağ Üst WhatsApp & Telefon:**
   * Ekranın en tepesinde masaüstü ve mobilde görünür. Tıklayınca doğrudan mesaj ekranı açılır.
2. **Sabit Floating WhatsApp Butonu (`FloatingWhatsApp.astro`):**
   * `MainLayout.astro` içinde yer alır, her sayfada ekranın **sağ altında** sabit durur.
   * Butonun yanında *"Fotoğraf atın, 5 dk'da fiyat verelim"* tooltip'i hafifçe nabız gibi yanıp söner (pulse animation).
   * Link formatı: `https://wa.me/905XXXXXXXXX?text=Merhaba,%20elimde%20hurda%20var.%20Fiyat%20öğrenmek%20istiyorum.`
3. **Mobilde Yapışık Arama Barı (`QuickCallBar.astro`):**
   * Ekran genişliği `< 768px` olduğunda sayfanın en altında ikiye bölünmüş yapışık bar:
     * Sol Yarı: 📞 **Hemen Ara** (`tel:+905XXXXXXXXX`)
     * Sağ Yarı: 💬 **WhatsApp Fiyat Al** (`https://wa.me/...`)
4. **2. El Klima Özel WhatsApp Butonu:**
   * Klima bölümündeki butona basıldığında WhatsApp mesajı özel şablonla gider: *"Merhaba, 2. el klimam var, fotoğrafını atıyorum..."* Böylece usta konuyu anında anlar.

---

## 8. Content Collections Şeması (`src/content.config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    benefits: z.array(z.string()),
  }),
});

const metalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subTypes: z.array(z.string()), // ör: ["Soyma Bakır", "Kırkambar Bakır", "Lama Bakır"]
    shortDesc: z.string(),
    density: z.string().optional(),
    featured: z.boolean().default(true),
    order: z.number(),
  }),
});

export const collections = {
  services: servicesCollection,
  metals: metalsCollection,
};
```

---

## 9. SEO & Yapısal Veri (Schema.org)

### JSON-LD Local SEO Yapılandırması (`Meta.astro`)
Hurdacılık için en doğru Schema.org tipi **`RecyclingCenter`** (Geri Dönüşüm Merkezi) ve ikincil olarak **`LocalBusiness`**'tır:

```astro
---
const schema = {
  "@context": "https://schema.org",
  "@type": "RecyclingCenter",
  "name": "Hurdacı Durmaz Metal",
  "image": "https://durmazmetal.com/images/og-image.jpg",
  "telephone": "+905XXXXXXXXX",
  "url": "https://durmazmetal.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sanayi Mah. Hurdacılar Sit.",
    "addressLocality": "Güngören",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.025,
    "longitude": 28.875
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:30",
      "closes": "20:00"
    }
  ],
  "priceRange": "₺₺",
  "paymentAccepted": "Nakit, Banka Havalesi",
  "currenciesAccepted": "TRY",
  "areaServed": [
    "İstanbul Avrupa Yakası",
    "İstanbul Anadolu Yakası",
    "Gebze"
  ]
};
---
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### Kritik SEO Anahtar Kelimeleri & Slug Stratejisi
* `/ikinci-el-klima-kombi` (Aranan: "ikinci el klima alanlar", "hurda klima alan hurdacı")
* `/hizmetler/adresten-hurda-alimi` (Aranan: "adresten hurda alan hurdacılar")
* `/hurda-cesitleri/bakir-ve-kablo-hurdasi` (Aranan: "güncel hurda bakır fiyatları", "hurda kablo alan yerler")
* `/hizmetler/kentsel-donusum-ve-bina-yikimi` (Aranan: "hurda karşılığı bina yıkımı", "fabrika söküm hurdacısı")

---

## 10. Adım Adım İnşa Sırası (Fazlar)

Gemini veya AI ajanına projeyi verirken şu faz sırasıyla inşa ettiriniz:

### Faz 1: Altyapı ve Veri Merkezi
1. Yeni Astro projesini TailwindCSS ve React entegrasyonuyla başlat.
2. `src/data_files/company.json` dosyasını oluşturup tüm Durmaz Metal bilgilerini gir.
3. `src/assets/styles/global.css` içine antrasit ve endüstriyel amber renk değişkenlerini tanımla.

### Faz 2: Layout & İletişim Katmanı
1. `Header.astro` oluştur: Sağ üstte WhatsApp ikonu ve telefon numarasını ekle.
2. `Footer.astro` oluştur: İletişim, çalışma saatleri ve hizmet linklerini bağla.
3. `FloatingWhatsApp.astro` bileşenini yap ve `MainLayout.astro` içine yerleştir (tüm sayfalarda sağ altta sabit kalsın).
4. Mobilde alta yapışan `QuickCallBar.astro` bileşenini yaz.

### Faz 3: Ana Sayfa & Özel Klima Vitrini
1. `HeroSection.astro` kur: Net endüstriyel başlık + hızlı teklif butonları.
2. `TrustBadges.astro` kur: Adresten Alım, Hassas Tartım, Anında Nakit.
3. **`KlimaSpotlight.astro`** kur: 2. El ve hurda klima/kombi alımı için dikkat çekici özel kart alanı.
4. `MetalsGrid.astro` kur: 6 ana metal türünü listele.
5. `ProcessSteps.astro` kur: 3 adımda satış rehberi.
6. `FaqSection.astro` kur.

### Faz 4: İç Sayfalar ve İçerik Koleksiyonları
1. `src/content.config.ts` tanımla ve Markdown dosyalarını oluştur.
2. `/hurda-cesitleri/[slug].astro` dinamik detay sayfasını kodla.
3. `/hizmetler/[slug].astro` dinamik detay sayfasını kodla.
4. `/ikinci-el-klima-kombi.astro` özel landing page'ini yap.
5. `/iletisim.astro` sayfasını kur.

### Faz 5: SEO, Hız & Vercel Deploy
1. `Meta.astro` içine `RecyclingCenter` JSON-LD şemasını entegre et.
2. `@astrojs/sitemap` ve `robots.txt` bağla.
3. Projeyi derle (`pnpm build`) ve Vercel'e aktar.
4. Demo linkini (`durmaz-metal-demo.vercel.app`) test et.

---

## 11. AI Ajanına Verilecek Doğrudan Emir (Prompt)

Yeni projeyi açtığında ajana şu prompt'u vererek süreci başlatabilirsin:

> *"Bu `hurdaci-durmaz-metal-mimari-plani.md` dosyasındaki tüm teknik mimariyi, tasarım token'larını ve sayfa yapısını harfiyen uygula. 
> Özellikle topbar'ın sağ üstünde WhatsApp ikonunu, sayfanın sağ altında sabit duran floating WhatsApp butonunu ve landing page'deki '2. El Klima & Kombi Alımı' özel vitrin bölümünü birebir plandaki gibi inşa et. 
> Şimdi Faz 1 ve Faz 2'den başlayarak projeyi kur."*
