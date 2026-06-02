import { Mic, Award, Users, Building2 } from "lucide-react";


import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TrainerProfile() {
  const animation = useScrollAnimation();
  const creds = [
    {
      i: Mic,
      t: "9+ Tahun Pengalaman",
      d: "Aktif membimbing publik di berbagai instansi & korporat.",
    },
    {
      i: Award,
      t: "Lisensi Kemenkumham",
      d: "Sebagai Master Trainer & Fasilitator Nasional berlisensi resmi.",
    },
    {
      i: Users,
      t: "Lembaga Resmi LKP",
      d: "Mempunyai izin operasional resmi dari Dinas Pendidikan & DPMPTSP.",
    },
    {
      i: Building2,
      t: "Gelar Non-Akademik C.PS",
      d: "Mendapatkan gelar kredibilitas kompetensi Public Speaking resmi.",
    },
  ];
  return (
    <section ref={animation.ref} id="about" className={`mx-auto max-w-7xl px-4 py-20 ${animation.className}`}>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">

          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
            Kenali <span className="text-gradient-red">Sang Coach</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            <strong className="text-foreground">Coach Ibnu Jabir</strong> (Muhammad Andrian Jabir,
            S.Pd., S.T., C.ODS., C.MT) adalah Founder &amp; CEO Luzins Academy Indonesia. Memiliki pengalaman lebih dari 9 tahun dalam melatih kepercayaan diri dan teknik public
            speaking.
          </p>
          <p className="mt-4 text-muted-foreground">
            Merupakan Master Trainer dan Fasilitator Nasional berlisensi Kemenkumham RI, berkomitmen
            melahirkan pembicara hebat yang kompeten dan berdampak.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {creds.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="group border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-red"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center bg-gradient-red shadow-red">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-2xl uppercase">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
