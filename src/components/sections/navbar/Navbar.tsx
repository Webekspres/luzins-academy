import { useEffect, useState } from "react";
import type React from "react";
import logo from "@/assets/luzins-logo.png";
import { WhatsAppBtn } from "../whatsapp-btn/WhatsAppBtn";
import { WA_LINK } from "../whatsapp-btn/WhatsAppBtn";
import { MessageCircle } from "lucide-react";

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
      className="fixed left-0 right-0 z-9997 border-b border-border/40 bg-background/80 backdrop-blur-md transition-[top] duration-75"
      style={{ top }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Luzins Academy"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <WhatsAppBtn size="md">Daftar Sekarang</WhatsAppBtn>
        </div>

        {/* Mobile — WhatsApp icon button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Daftar via WhatsApp"
          className="inline-flex h-10 w-10 items-center justify-center bg-whatsapp text-whatsapp-foreground transition hover:brightness-110 active:scale-95 md:hidden"
        >
          <MessageCircle className="h-5 w-5 fill-current" strokeWidth={0} />
        </a>
      </nav>
    </header>
  );
}
