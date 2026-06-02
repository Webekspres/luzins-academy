import {
  Frown,
  ShieldQuestion,
  MessageCircleOff,
  BrainCircuit,
  EyeOff,
  TrendingDown,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProblemSection() {
  const animation = useScrollAnimation();

  const problems = [
    {
      text: "Gugup saat presentasi",
      icon: Frown,
    },
    {
      text: "Kurang percaya diri",
      icon: ShieldQuestion,
    },
    {
      text: "Sulit menyusun kata-kata",
      icon: MessageCircleOff,
    },
    {
      text: "Blank di tengah presentasi",
      icon: BrainCircuit,
    },
    {
      text: "Sulit menarik perhatian audiens",
      icon: EyeOff,
    },
    {
      text: "Karier/bisnis terhambat",
      icon: TrendingDown,
    },
  ];

  return (
    <section ref={animation.ref} className={animation.className}>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-4xl font-semibold uppercase sm:text-5xl">
            Kalau Kamu <span className="text-gradient-red">Masih Merasa</span>{" "}
            Seperti Ini:
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="flex items-start gap-4 border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-destructive/20 text-destructive">
                <Icon className="h-5 w-5" />
              </div>

              <p className="pt-1.5 text-foreground/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}