import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";


export function TestimonialSection() {
  const animation = useScrollAnimation();
  const items = [
    {
      n: "Aa Juhana",
      r: "Juru Bahasa",
      q: "Sangat menarik, sangat patuh pada rencana dan bisa mengelola kelas dengan baik.",
    },
    {
      n: "Dr. Dwi Yunanto, M.Pd., C.MT",
      r: "Dosen",
      q: "Membangun kepercayaan (trust) secara instan dan bisa membagi waktu materi dan penjelasan, manajemen waktu is ok.",
    },
    {
      n: "H. Bambang Sukmana, S.E., M.M.",
      r: "Pengusaha (Tour & Travel + EO)",
      q: "Coach Ibnu Jabir menyampaikan materi dengan terstruktur, bahasanya mudah difahami, memotivasi & materi yang disampaikan syarat dengan ilmu.",
    },
  ];
  return (
    <section ref={animation.ref} id="testimonials" className={`mx-auto max-w-7xl px-4 py-20 ${animation.className}`}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
          Apa Kata <span className="text-gradient-red">Alumni</span>?
        </h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.n}
            className="flex flex-col border border-border bg-card p-7 transition-colors hover:border-primary"
          >
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 grow text-foreground/90">"{t.q}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-11 w-11 items-center justify-center bg-gradient-red font-display text-lg">
                {t.n.charAt(0)}
              </div>
              <div>
                <div className="font-bold">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
