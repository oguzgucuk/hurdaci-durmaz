# Hurdacı Durmaz Metal — Kurumsal Web Uygulaması

İstanbul geneli ve Gebze bölgesinde adresten hassas dijital kantar tartımı ile hurda metal (bakır, sarı, demir, alüminyum, paslanmaz, çinko) ve 2. el klima/kombi alımı gerçekleştiren Hurdacı Durmaz Metal kurumsal web platformu.

## 🛠️ Teknoloji Yığını

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
- **UI & Bileşenler:** React 19, [@radix-ui/react-dialog](https://www.radix-ui.com/), [@radix-ui/react-accordion](https://www.radix-ui.com/), Shadcn UI desenleri
- **Styling:** Tailwind CSS v4, Modern HSL/Oklch Değişkenleri, Açık Mimari Tasarım Sistemi
- **Tipografi:** Google Fonts (`Plus Jakarta Sans` - Display Başlıklar & `Inter` - Gövde Metinleri)
- **İletişim & CTA:** Doğrudan arama linkleri (`+90 541 623 88 81`) ve önceden biçimlendirilmiş WhatsApp teklif akışı

## 🚀 Başlatma ve Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Yerel geliştirme sunucusunu port 3002'de başlatın
npm run dev

# Üretim derlemesi oluşturun
npm run build

# Üretim derlemesini yerel olarak test edin
npm run preview
```

Varsayılan geliştirme sunucusu: **http://localhost:3002**

## 📂 Proje Yapısı

```text
/
├── public/                     # Statik görseller, favicon ve webmanifest
│   └── images/hero/            # Tam ekran gün ışığı tesis görseli
├── src/
│   ├── assets/styles/          # tokens.css ve global.css tasarım değişkenleri
│   ├── components/             # Header, Footer, Meta ve bölüm bileşenleri
│   │   ├── sections/           # Hero, TrustBadges, KlimaSpotlight, MetalsGrid vb.
│   │   └── ui/                 # Shadcn Radix dialog, accordion, button bileşenleri
│   ├── content/                # Hurda çeşitleri ve kurumsal hizmet koleksiyonları
│   ├── data_files/             # company.json merkezi firma verileri & telefonlar
│   ├── layouts/                # MainLayout.astro
│   └── pages/                  # Sayfa rotaları (/, /hurda-cesitleri, /ikinci-el-klima-kombi vb.)
└── astro.config.mjs            # Port 3002 ve path alias yapılandırması
```
