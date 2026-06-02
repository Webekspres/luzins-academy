import { Sparkles, Flame } from "lucide-react";

export function TopBar() {
  const content = (
    <div className="flex gap-x-12 px-4 py-2.5 font-semibold shrink-0">
      <span className="flex items-center gap-1.5 whitespace-nowrap">
        <Sparkles className="h-3.5 w-3.5" /> Pelatihan Public Speaking
      </span>
      <span className="opacity-60">•</span>
      <span className="whitespace-nowrap">
        Promo Spesial: dari <span className="line-through opacity-70">Rp 699.000</span> menjadi{" "}
        <span className="text-accent font-bold">Rp 249.000</span>
      </span>
      <span className="opacity-60">•</span>
      <span className="flex items-center gap-1.5 whitespace-nowrap">
        <Flame className="h-3.5 w-3.5" /> Kuota Terbatas
      </span>
    </div>
  );

  return (
    <div className="bg-gradient-red text-primary-foreground text-xs sm:text-sm overflow-hidden w-full">
      <div className="flex w-max animate-marquee">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
