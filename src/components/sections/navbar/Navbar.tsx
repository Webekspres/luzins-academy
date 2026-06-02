import { useEffect, useRef, useState } from "react";
import logo from "@/assets/luzins-logo.png";
import { WhatsAppBtn } from "../whatsapp-btn/WhatsAppBtn";

interface NavbarProps {
  topBarRef?: React.RefObject<HTMLDivElement | null>;
}

export function Navbar({ topBarRef }: NavbarProps) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const updateTop = () => {
      if (topBarRef?.current) {
        const scrolled = window.scrollY;
        const topBarHeight = topBarRef.current.offsetHeight;
        setTop(Math.max(0, topBarHeight - scrolled));
      }
    };

    updateTop();
    window.addEventListener("scroll", updateTop, { passive: true });
    window.addEventListener("resize", updateTop);
    return () => {
      window.removeEventListener("scroll", updateTop);
      window.removeEventListener("resize", updateTop);
    };
  }, [topBarRef]);

  return (
    <header
      className="fixed left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md transition-[top] duration-75"
      style={{ top }}
    >
      <nav className="mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Luzins Academy" width={160} height={40} className="h-10 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            Beranda
          </a>
          <a
            href="#about"
            className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            Tentang
          </a>
          <a
            href="#program"
            className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            program
          </a>
          <a
            href="#testimonials"
            className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            Testimoni
          </a>
          <a
            href="#faq"
            className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <WhatsAppBtn size="md">Daftar Sekarang</WhatsAppBtn>
        </div>
      </nav>
    </header>
  );
}
