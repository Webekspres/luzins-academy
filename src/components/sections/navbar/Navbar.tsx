import { useEffect, useState } from "react";
import type React from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/luzins-logo.png";
import { WhatsAppBtn } from "../whatsapp-btn/WhatsAppBtn";

interface NavbarProps {
  topBarRef?: React.RefObject<HTMLDivElement | null>;
}

export function Navbar({ topBarRef }: NavbarProps) {
  const [top, setTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#program", label: "Program" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#faq", label: "FAQ" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed left-0 right-0 z-9997 border-b border-border/40 bg-background/80 backdrop-blur-md transition-[top] duration-75"
        style={{ top }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Luzins Academy"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <WhatsAppBtn size="md">Daftar Sekarang</WhatsAppBtn>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="relative z-10000 inline-flex h-10 w-10 cursor-pointer items-center justify-center text-foreground/90 transition hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-9998 bg-black/50 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed right-4 top-20 z-9999 w-[calc(100%-2rem)] border border-border bg-background p-6 shadow-2xl transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-6 flex items-end justify-end">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Tutup menu"
            className="inline-flex h-9 w-9 items-center justify-center text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-3 text-base font-semibold text-foreground transition hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4">
            <WhatsAppBtn
              size="lg"
              className="w-full justify-center"
              onClick={closeMenu}
            >
              Daftar Sekarang
            </WhatsAppBtn>
          </div>
        </div>
      </div>
    </>
  );
}