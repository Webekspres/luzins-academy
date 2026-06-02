import { Mic, MessageCircle, Phone, Instagram, Music2, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center bg-gradient-red">
              <Mic className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl uppercase">Lead &amp; Speak</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Berani bicara, berpengaruh, dan menginspirasi. Pelatihan public speaking untuk individu,
            komunitas &amp; perusahaan.
          </p>
        </div>
        <div>
          <div className="font-display text-lg uppercase">Kontak</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-whatsapp" /> +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> halo@luzinsacademy.id
            </li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg uppercase">Ikuti Kami</div>
          <div className="mt-3 flex gap-2">
            {[Instagram, Music2, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Luzins Academy. All rights reserved. Developed by <a href="https://webekspres.id" target="_blank" className="font-semibold underline underline-offset-2 transition-colors hover:text-primary">Webekspres</a>
      </div>
    </footer>
  );
}
