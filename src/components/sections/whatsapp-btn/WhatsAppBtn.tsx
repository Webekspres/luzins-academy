import { MessageCircle } from "lucide-react";

const WA_NUMBER = "6282395529665";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Admin Luzins!, saya tertarik untuk mendaftar pelatihan Public Speaking.")}`;

export function WhatsAppBtn({
  children,
  className = "",
  size = "md",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const sz = size === "lg" ? "px-8 py-5 text-lg" : "px-6 py-4 text-base";
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground font-bold ${sz} shadow-red transition-all hover:scale-[1.03] hover:brightness-110 active:scale-100 cursor-pointer ${className}`}
    >
      <MessageCircle className="h-5 w-5 fill-current" strokeWidth={0} />
      {children}
    </a>
  );
}
