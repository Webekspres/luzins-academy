import posterWorkshop from "@/assets/poster-workshop-public-speaking.jpeg";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WhatsAppBtn } from "../whatsapp-btn/WhatsAppBtn";

export function PackageSection() {
  const animation = useScrollAnimation();

  return (
    <section
      ref={animation.ref}
      className={`border-y border-border bg-surface py-20 ${animation.className}`}
    >
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Kuota Terbatas  </SectionLabel>
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">Amankan <span className="text-gradient-red">Tempat</span> Anda Sekarang</h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <WhatsAppBtn size="md" className="mx-auto mt-10">
            Daftar Klik Disini
          </WhatsAppBtn>
        </div>

        <div className="mt-10 overflow-hidden border border-border bg-card shadow-red">
          <img
            src={posterWorkshop}
            alt="Poster Workshop Public Speaking Luzins Academy Indonesia"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}