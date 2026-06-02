import { CheckCircle2, PlayCircle } from "lucide-react";
import trainerHero from "@/assets/trainer-hero.png";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { WhatsAppBtn } from "@/components/sections/whatsapp-btn/WhatsAppBtn";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
    </div>
  );
}

export function Hero() {
  const animation = useScrollAnimation();
  return (
    <header ref={animation.ref} id="home" className={`relative bg-gradient-hero ${animation.className}`}>
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 lg:grid-cols-2 lg:gap-12 lg:pt-20">
        <div className="order-2 lg:order-1">
          <SectionLabel>Luzins Academy Indonesia</SectionLabel>
          <h1 className="mt-5 text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Latih Skill <br className="hidden sm:block" />
            Komunikasi Kamu <br />
            dalam <span className="text-gradient-red">Seni Berbicara</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tingkatkan kepercayaan diri, kuasai teknik berbicara yang meyakinkan, dan sampaikan pesan dengan impact yang menginspirasi audiens.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <WhatsAppBtn size="lg">Daftar Sekarang</WhatsAppBtn>
            <a
              href="#program"
              className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-foreground/80 hover:text-primary"
            >
              <PlayCircle className="h-5 w-5" /> Lihat Materi Training
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-6">
            <Stat n="9+ Tahun" l="Pengalaman Coach" />
            <Stat n="LKP Resmi" l="Izin Operasional" />
            <Stat n="C.PS" l="Gelar Non-Akademik" />
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="absolute -inset-6 -z-10 opacity-30 blur-3xl" />
          <div className="relative overflow-hidden">
            <img
              src={trainerHero}
              alt="Coach Ibnu Jabir — Trainer Public Speaking"
              width={1024}
              height={1280}
              className="h-120 w-full object-cover sm:h-136 lg:h-176"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-primary">
                FOUNDER &amp; CEO LUZINS ACADEMY INDONESIA
              </div>
              <div className="font-display text-2xl mt-1 text-white">Coach</div>
              <div className="font-display text-4xl uppercase leading-none font-bold text-gradient-red">
                Ibnu Jabir
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                MUHAMMAD ANRAWAN HABIB,S.Pd. ,Gr . ,C.PPS. ,CMT
              </div>
              <div className="text-[11px] text-primary font-bold uppercase mt-2 flex flex-col gap-0.5">
                <span className="inline-flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4" /> Master Trainer Lisensi Kemenkumham
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4" /> Fasilitator Nasional Lisensi Kemenkumham
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
