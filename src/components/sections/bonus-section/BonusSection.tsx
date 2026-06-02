import { BookOpen, FileBadge, Gift, Users, PlayCircle, MessageCircle } from "lucide-react";

export function BonusSection() {
  const bonuses = [
    { i: BookOpen, t: "E-Book Public Speaking", v: "Rp 150.000" },
    { i: FileBadge, t: "Sertifikat Resmi", v: "Rp 100.000" },
    { i: Gift, t: "Template Presentasi Premium", v: "Rp 200.000" },
    { i: Users, t: "Akses Grup Diskusi Eksklusif", v: "Priceless" },
    { i: PlayCircle, t: "Rekaman Materi Selamanya", v: "Rp 250.000" },
    { i: MessageCircle, t: "Konsultasi 1-on-1 (30 menit)", v: "Rp 300.000" },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-red py-20 text-primary-foreground">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
            <Gift className="h-3.5 w-3.5" /> Bonus Spesial
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">Bonus Senilai Jutaan Rupiah</h2>
          <p className="mt-3 opacity-90">Gratis untuk semua peserta yang mendaftar bulan ini.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map(({ i: Icon, t, v }) => (
            <div
              key={t}
              className="flex items-center gap-4 border border-white/20 bg-black/30 p-5 backdrop-blur"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold">{t}</div>
                <div className="text-sm text-accent">Senilai {v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
