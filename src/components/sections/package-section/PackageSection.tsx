import { CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { WhatsAppBtn } from "@/components/sections/whatsapp-btn/WhatsAppBtn";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function PackageSection() {
  const animation = useScrollAnimation();
  const benefits = [
    "Akses penuh materi training (6 modul utama)",
    "Praktik & simulasi langsung dengan Coach Ibnu Jabir",
    "Sertifikat & Gelar Non-Akademik C.PS",
    "Bonus E-Book: Rumus Opening Presentasi",
    "Template presentasi premium & Rekaman materi",
    "Akses grup eksklusif alumni & Konsultasi",
  ];
  return (
    <section ref={animation.ref} className={`border-y border-border bg-surface py-20 ${animation.className}`}>
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <SectionLabel>Paket Pendaftaran</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
            Ambil <span className="text-gradient-red">Tempat</span> Anda Sekarang
          </h2>
        </div>
        <div className="relative mt-10 overflow-hidden border-2 border-primary bg-card shadow-red">
          <div className="absolute right-5 top-5 bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">
            Promo Spesial
          </div>
          <div className="p-8 sm:p-10">
            <div className="font-display text-2xl uppercase text-muted-foreground">
              Pelatihan Public Speaking
            </div>
            <div className="mt-2 font-display text-3xl uppercase">Kelas Interaktif</div>
            <div className="mt-6 flex items-end gap-3">
              <div className="font-display text-5xl text-primary sm:text-6xl">Rp 249K</div>
              <div className="pb-2 text-lg text-muted-foreground line-through">Rp 699k</div>
            </div>
            <div className="text-sm text-muted-foreground">/ peserta — termasuk semua bonus</div>
            <ul className="mt-7 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppBtn size="lg" className="w-full sm:flex-1">
                Daftar via WhatsApp
              </WhatsAppBtn>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Tersedia juga paket korporat &amp; in-house training. Hubungi admin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
