import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FastQuoteModalProps {
  buttonText?: string;
  variant?: "default" | "amber" | "copper" | "whatsapp" | "outline";
  size?: "default" | "sm" | "lg";
}

export function FastQuoteModal({
  buttonText = "Anında Fiyat Teklifi Al",
  variant = "amber",
  size = "lg",
}: FastQuoteModalProps) {
  const [open, setOpen] = React.useState(false);
  const [metalType, setMetalType] = React.useState("Bakır & Kablo Hurdası");
  const [phone, setPhone] = React.useState("");
  const [details, setDetails] = React.useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Merhaba Durmaz Metal,\n\nMalzeme: ${metalType}\nİletişim Tel: ${phone || "Belirtilmedi"}\nDetay & Konum: ${details || "Belirtilmedi"}\n\nFiyat teklifi ve adresten alım için bilgi almak istiyorum.`;
    const waUrl = `https://wa.me/905416238881?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className="w-full sm:w-auto shadow-md">
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Hızlı Fiyat Teklifi & Adrese Servis
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600">
            Malzemenizi seçin ve bilgilerinizi iletin. 5 dakika içinde güncel borsa fiyatından teklif verelim.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Satmak İstediğiniz Malzeme Türü *
            </label>
            <select
              value={metalType}
              onChange={(e) => setMetalType(e.target.value)}
              className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <option value="Bakır & Kablo Hurdası">Bakır & Kablo Hurdası</option>
              <option value="2. El veya Hurda Klima & Kombi">2. El veya Hurda Klima & Kombi</option>
              <option value="Sarı (Pirinç) Armatür & Vana">Sarı (Pirinç) Armatür & Vana</option>
              <option value="Alüminyum Profil & Jant">Alüminyum Profil & Jant</option>
              <option value="Hurda Demir & Çelik">Hurda Demir & Çelik</option>
              <option value="Paslanmaz (Krom) Hurdası">Paslanmaz (Krom) Hurdası</option>
              <option value="Kentsel Dönüşüm / Bina Sökümü">Kentsel Dönüşüm / Bina Sökümü</option>
              <option value="Fabrika / Endüstriyel Makine">Fabrika / Endüstriyel Makine</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Telefon Numaranız (İsteğe Bağlı)
            </label>
            <Input
              type="tel"
              placeholder="0541 623 88 81"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Tahmini Miktar ve Bulunduğunuz İlçe *
            </label>
            <Textarea
              required
              placeholder="Örn: Kadıköy'de tadilattan çıkan yaklaşık 60 kg bakır kablo ve 1 adet klima dış ünitesi var..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={3}
            />
          </div>

          <div className="pt-2">
            <Button type="submit" variant="whatsapp" className="w-full h-12 text-base gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.64 7.89 8 8.49 8 9.72C8 10.95 8.89 12.14 9.01 12.31C9.14 12.47 10.77 14.97 13.25 16.05C13.84 16.31 14.3 16.46 14.66 16.58C15.26 16.77 15.8 16.74 16.24 16.68C16.73 16.61 17.74 16.07 17.95 15.48C18.16 14.89 18.16 14.38 18.1 14.28C18.04 14.18 17.88 14.12 17.64 14C17.4 13.88 16.21 13.3 15.99 13.22C15.77 13.14 15.61 13.1 15.45 13.34C15.29 13.59 14.83 14.12 14.69 14.28C14.55 14.44 14.41 14.47 14.17 14.35C13.93 14.23 12.92 13.89 11.72 12.82C10.79 11.99 10.16 10.96 10.04 10.76C9.92 10.56 10.03 10.45 10.15 10.33C10.26 10.22 10.4 10.04 10.52 9.9C10.64 9.76 10.68 9.66 10.76 9.5C10.84 9.34 10.8 9.2 10.74 9.08C10.68 8.96 10.22 7.83 10.03 7.37C9.84 6.92 9.65 6.98 9.53 7.34Z"/>
              </svg>
              <span>WhatsApp Teklifini İlet</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
