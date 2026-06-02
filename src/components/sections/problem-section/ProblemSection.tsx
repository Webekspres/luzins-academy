
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProblemSection() {
  const animation = useScrollAnimation();
  const problems = [
    "Gugup saat presentasi",
    "Kurang percaya diri",
    "Sulit menyusun kata-kata",
    "Blank di tengah presentasi",
    "Sulit menarik perhatian audiens",
    "Merasa kemampuan komunikasi menghambat karir atau bisnis",
  ];
  return (
    <section ref={animation.ref} className={animation.className}>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
            Kalau Kamu <span className="text-gradient-red">Masih Merasa</span> Seperti Ini:
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={p}
              className="flex items-start gap-4 border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-destructive/20 font-display text-xl text-destructive">
                ✕
              </div>
              <p className="pt-1.5 text-foreground/90">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
