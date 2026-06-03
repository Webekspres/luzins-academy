import { CheckCircle2, PlayCircle } from "lucide-react";
import trainerHero from "@/assets/trainer-hero.png";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { WhatsAppBtn } from "@/components/sections/whatsapp-btn/WhatsAppBtn";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {l}
      </div>
    </div>
  );
}

export function Hero() {
  const animation = useScrollAnimation();

  return (
    <header
      ref={animation.ref}
      id="home"
      className={`relative overflow-hidden bg-gradient-hero ${animation.className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 lg:grid-cols-2 lg:pt-20">
        <div className="order-1">
          <div className="flex justify-center lg:justify-start">
            <SectionLabel>Luzins Academy Indonesia</SectionLabel>
          </div>
          <h1 className="mt-5 text-center text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-left lg:text-7xl">
            Latih Skill <br className="hidden sm:block" />
            Komunikasi Kamu <br />
            dalam <span className="text-gradient-gold">Seni Berbicara</span>
          </h1>

          <p className="mx-auto mt-6 text-center text-base text-muted-foreground sm:text-lg lg:mx-0 lg:max-w-xl lg:text-left">
            Tingkatkan kepercayaan diri, kuasai teknik berbicara yang meyakinkan,
            dan sampaikan pesan dengan impact yang menginspirasi audiens.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <WhatsAppBtn size="lg">Daftar Sekarang</WhatsAppBtn>

            <a
              href="#program"
              className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-foreground/80 hover:text-primary"
            >
                <PlayCircle className="h-5 w-5" />
                Lihat Materi Training
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-border pt-6 text-center lg:justify-start lg:text-left">
              <Stat n="9+ Tahun" l="Pengalaman Coach" />
              <Stat n="LKP Resmi" l="Izin Operasional" />
              <Stat n="C.PS" l="Gelar Non-Akademik" />
            </div>
        </div>

        <div className="order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-130 overflow-hidden">
            <img
              src={trainerHero}
              alt="Coach Ibnu Jabir — Trainer Public Speaking"
              width={1024}
              height={1280}
              className="h-140 w-full object-cover object-top sm:h-160 lg:h-175"
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/90 to-transparent px-6 pb-6 pt-32">
              <div className="text-xs font-extrabold uppercase tracking-widest text-white drop-shadow-lg">
                FOUNDER &amp; CEO LUZINS ACADEMY INDONESIA
              </div>

              <div className="mt-1 font-display text-2xl font-bold text-white drop-shadow-lg">
                Coach
              </div>

              <div className="font-display text-4xl font-extrabold uppercase leading-none text-primary drop-shadow-lg">
                Ibnu Jabir
              </div>

              <div className="mt-2 text-sm font-semibold text-white drop-shadow-lg">
                MUHAMMAD ANRAWAN HABIB, S.Pd., Gr., C.PPS., CMT
              </div>

              <div className="mt-3 flex flex-col gap-1.5 font-bold uppercase">
                <span className="inline-flex items-center gap-2 text-sm text-white drop-shadow-lg">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  Master trainer Lisensi BNSP RI
                </span>

                <span className="inline-flex items-center gap-2 text-sm text-white drop-shadow-lg">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  Fasilitator Nasional Lisensi Kemendikdasmen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}