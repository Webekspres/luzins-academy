import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/components/sections/whatsapp-btn/WhatsAppBtn";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center bg-whatsapp text-whatsapp-foreground shadow-red transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping bg-whatsapp opacity-40" />
      <MessageCircle className="relative h-7 w-7 fill-current" strokeWidth={0} />
    </a>
  );
}
