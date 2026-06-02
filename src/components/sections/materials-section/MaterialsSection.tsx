import { BookOpen } from "lucide-react";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function MaterialsSection() {
  const animation = useScrollAnimation();
  const items = [
    "Mindset Dalam Public Speaking",
    "Cara Mengatasi Gugup Dalam Public Speaking Dengan Cepat",
    "Koneksi Dan Komunikasi",
    "Struktur Penulisan Dalam Public Speaking",
    "Opening & Closing Public Speaking",
    "Teknik Verbal, Vokal & Visual Dalam Public Speaking",
  ];
  return (
    <section ref={animation.ref} id="program" className={`mx-auto max-w-7xl px-4 py-20 ${animation.className}`}>
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>Materi Training</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
            Materi Workshop <span className="text-gradient-red">Seni Berbicara</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Kurikulum dirancang praktis dari dasar agar Anda dapat mengatasi ketakutan dan langsung
            percaya diri berbicara di depan umum.
          </p>
          <div className="mt-8 border border-primary/40 bg-primary/5 p-5">
            <div className="flex items-center gap-3 text-primary">
              <BookOpen className="h-5 w-5" />
              <div className="font-bold uppercase tracking-wider">Metode Belajar</div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Kelas Interaktif + Praktik Langsung. Anda juga akan mendapatkan{" "}
              <strong className="text-foreground">Sertifikat dan Gelar Non-Akademik C.PS</strong>{" "}
              sebagai bukti kompetensi dan kredibilitas.
            </p>
          </div>
        </div>
        <ol className="grid gap-3">
          {items.map((m, i) => (
            <li
              key={m}
              className="flex items-center gap-4 border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
            >
              <span className="font-display text-3xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold">{m}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
