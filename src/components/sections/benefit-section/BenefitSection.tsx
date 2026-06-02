import { Target, BrainCircuit, Mic, Hand, Volume2, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";


export function BenefitSection() {
  const animation = useScrollAnimation();
  const benefits = [
    {
      i: Target,
      t: "Percaya Diri Total",
      d: "Bicara tanpa gugup di depan audiens berapa pun jumlahnya.",
    },
    {
      i: BrainCircuit,
      t: "Ide Tersampaikan Runtut",
      d: "Struktur bicara yang jelas, logis, dan menarik.",
    },
    { i: Mic, t: "Suara Berkarakter", d: "Intonasi, artikulasi, dan power suara yang memukau." },
    { i: Hand, t: "Bahasa Tubuh Meyakinkan", d: "Gestur dan ekspresi yang mendukung pesan." },
    {
      i: Volume2,
      t: "Mampu Memikat Audiens",
      d: "Teknik storytelling agar audiens terus menyimak.",
    },
    {
      i: Trophy,
      t: "Siap Tampil di Forum",
      d: "Dari rapat kantor, seminar, hingga panggung besar.",
    },
  ];
  return (
    <section ref={animation.ref} className={animation.className}>
      <div className="relative overflow-hidden border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">

            <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
              Yang Akan Kamu <span className="text-gradient-red">Rasakan</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ i: Icon, t, d }) => (
              <div
                key={t}
                className="group relative overflow-hidden border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-red"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-2xl uppercase">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
