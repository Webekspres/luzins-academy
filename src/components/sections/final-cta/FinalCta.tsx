import { Phone } from "lucide-react";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { WhatsAppBtn } from "@/components/sections/whatsapp-btn/WhatsAppBtn";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FinalCta() {
  const animation = useScrollAnimation();
  return (
    <section ref={animation.ref} className={`relative overflow-hidden bg-background py-24 ${animation.className}`}>
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <SectionLabel>Saatnya Bertindak</SectionLabel>
        <h2 className="mt-5 text-5xl uppercase sm:text-6xl font-semibold">
          Siap Bicara dengan <span className="text-gradient-red">Penuh Percaya Diri</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Klik tombol di bawah untuk konsultasi gratis atau langsung daftar. Admin kami siap
          membantu Anda 7 hari seminggu.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppBtn size="lg">Konsultasi via WhatsApp</WhatsAppBtn>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />  +62 823-9552-9665 (24/7)
        </div>
      </div>
    </section>
  );
}
