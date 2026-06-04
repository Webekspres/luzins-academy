import { BookOpen, Gift } from "lucide-react";

export function BonusSection() {
  const bonuses = [{ i: BookOpen, t: "E-Book Public Speaking" }];
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
          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">Bonus Special Untuk Semua Peserta</h2>
          <p className="mt-3 opacity-90">Gratis untuk semua peserta yang mendaftar bulan ini.</p>
        </div>
        <div className="mt-12 flex justify-center">
          {bonuses.map(({ i: Icon, t }) => (
            <div
              key={t}
              className="flex w-full max-w-xl items-center gap-4 border border-white/20 bg-black/30 p-6 backdrop-blur sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xl font-bold sm:text-2xl">{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
