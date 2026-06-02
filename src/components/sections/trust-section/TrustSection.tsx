import { ShieldCheck } from "lucide-react";


import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TrustSection() {
  const animation = useScrollAnimation();
  const partners = [
    "Universitas Nusantara",
    "PT Karya Bangsa",
    "Komunitas Speaker ID",
    "Pemkot Bandung",
    "Yayasan Edukasi",
    "BUMN Connect",
  ];
  return (
    <section ref={animation.ref} className={`border-y border-border bg-surface py-14 ${animation.className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center">

          <h2 className="mt-4 text-3xl sm:text-4xl uppercase font-semibold">
            Bersama Lembaga <span className="text-gradient-red">Terpercaya</span>
          </h2>
          <div className="mt-4 max-w-3xl">
            <div className="font-bold text-lg text-primary">PT. LUZINS ACADEMY INDONESIA</div>
            <div className="text-xs text-muted-foreground mt-1">
              Kemenkumham: AHU-029375.AH.01.30.Tahun 2025
            </div>

            <div className="mt-6 border border-border/50 bg-card p-6 text-left rounded-lg max-w-2xl mx-auto">
              <div className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                LKP LUZINS ACADEMY INDONESIA
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sebagai <strong>Satuan Pendidikan Non-Formal</strong> yang telah memperoleh
                Sertifikat Izin Operasional dari 2 lembaga Pemerintah Kabupaten Wakatobi, Provinsi
                Sulawesi Tenggara:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    <strong>Dinas Penanaman Modal &amp; Pelayanan Terpadu Satu Pintu</strong>{" "}
                    (Nomor: 421.3/001/PM-DPMPTSP/2023)
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    <strong>Dinas Pendidikan &amp; Kebudayaan</strong> (Nomor: 002.5.14/202/Tahun
                    2023)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
