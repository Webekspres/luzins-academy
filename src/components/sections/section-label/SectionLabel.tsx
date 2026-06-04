import { Flame } from "lucide-react";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${className}`}>
      <Flame className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}