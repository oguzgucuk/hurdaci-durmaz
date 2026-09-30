import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    q: "Adresten alım için minimum bir miktar veya kilo sınırı var mı?",
    a: "Bakır, sarı pirinç, hurda kablo ve 2. el klima/kombilerde tek bir parça veya küçük miktarlar için dahi kapınıza geliyoruz. Demir ve düşük tonajlı hurdalar için de bölgedeki araçlarımızın günlük güzergahına göre aynı gün içinde adresinizden alım yapıyoruz.",
  },
  {
    id: "item-2",
    q: "Klimaları ve kombileri duvardan hasarsız siz mi söküyorsunuz?",
    a: "Evet! Deneyimli teknisyenlerimiz klimanın gazını çevreye yaymadan usulüne uygun şekilde toplayarak, tesisata ve duvarınıza kesinlikle zarar vermeden yerinden söker. Söküm işlemi için hiçbir ek ücret alınmaz, cihazın değeri elden nakit ödenir.",
  },
  {
    id: "item-3",
    q: "Tartım işlemi nasıl yapılıyor, kantar sonucuna nasıl güvenebilirim?",
    a: "Tüm tartımlarımızı Sanayi ve Teknoloji Bakanlığı onaylı, periyodik kalibre edilmiş dijital elektronik terazilerimizle gözünüzün önünde yapıyoruz. Yüksek tonajlı fabrika ve şantiye hurdalarında dilerseniz en yakın resmi kantara birlikte giderek kantar fişiyle tartım gerçekleştiriyoruz.",
  },
  {
    id: "item-4",
    q: "Ödeme ne zaman ve hangi yöntemle yapılıyor?",
    a: "Tartım bittiği an, araçlarımıza yükleme yapılırken paranızı yerinde elden peşin nakit veya anında dilediğiniz banka hesabına FAST/havale ile ödüyoruz. Vadeli çek veya malı alıp sonra ödeme yapma gibi belirsizlikler kesinlikle yoktur.",
  },
  {
    id: "item-5",
    q: "Hurda metal fiyatları nasıl belirleniyor?",
    a: "Fiyatlarımız Londra Metal Borsası (LME) ve Türkiye iç piyasası günlük güncel kurlarına göre anlık olarak belirlenir. WhatsApp üzerinden hurdanızın fotoğrafını gönderdiğinizde o günün en tavan fiyatından teklif verilir.",
  },
  {
    id: "item-6",
    q: "Hangi bölgelere adresten araç yönlendiriyorsunuz?",
    a: "İstanbul Avrupa Yakası ve Anadolu Yakası’nın tüm ilçelerine (Bağcılar, Güngören, İkitelli, Esenyurt, Başakşehir, Ümraniye, Kartal, Kadıköy, Pendik vb.) ve Kocaeli Gebze sanayi bölgesine günlük düzenli araç yönlendiriyoruz.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
