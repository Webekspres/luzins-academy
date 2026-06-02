import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden border border-border bg-card transition-colors hover:border-primary/60 ">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold cursor-pointer"
      >
        <span>{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const animation = useScrollAnimation();
  const faqs = [
    [
      "Apakah training ini cocok untuk pemula?",
      "Sangat cocok. Materi dimulai dari dasar, dirancang ramah pemula tanpa pengalaman sebelumnya.",
    ],
    [
      "Apakah saya mendapatkan sertifikat?",
      "Ya, setiap peserta yang menyelesaikan pelatihan akan mendapatkan sertifikat resmi dari Lead & Speak Academy.",
    ],
    [
      "Apakah bisa untuk instansi atau perusahaan?",
      "Tentu. Kami melayani in-house training dengan kurikulum yang dapat disesuaikan kebutuhan tim Anda.",
    ],
    [
      "Apakah training bisa online dan offline?",
      "Bisa keduanya. Kelas online via Zoom interaktif, atau offline di kota Anda.",
    ],
    [
      "Bagaimana cara mendaftarnya?",
      "Cukup klik tombol WhatsApp di halaman ini, admin akan membantu proses pendaftaran dan pembayaran.",
    ],
    [
      "Apakah saya bisa konsultasi dulu?",
      "Bisa. Hubungi admin via WhatsApp untuk konsultasi gratis sebelum mendaftar.",
    ],
    [
      "Apakah materi bisa disesuaikan dengan kebutuhan klien?",
      "Bisa, khusus untuk program korporat dan komunitas. Diskusikan kebutuhan Anda dengan admin.",
    ],
  ];
  return (
    <section ref={animation.ref} id="faq" className={`mx-auto max-w-3xl px-4 py-20 ${animation.className}`}>
      <div className="text-center">
        <SectionLabel>Pertanyaan Umum</SectionLabel>
        <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
          Masih <span className="text-gradient-red">Ragu</span>?
        </h2>
      </div>
      <div className="mt-10 space-y-3">
        {faqs.map(([q, a], i) => (
          <FaqItem key={i} q={q} a={a} />
        ))}
      </div>
    </section>
  );
}
