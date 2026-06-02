import { useState } from "react";
import offlineClassroom from "@/assets/documentations/doc-offline-classroom.jpg";
import onlineBatch1 from "@/assets/documentations/doc-online-batch-1.jpg";
import onlineBatch2 from "@/assets/documentations/doc-online-batch-2.jpg";
import offlineWorkshop from "@/assets/documentations/doc-offline-workshop.jpg";
import onlineBatch3 from "@/assets/documentations/doc-online-batch-3.jpg";
import offlineTraining1 from "@/assets/documentations/doc-offline-training-1.jpg";
import onlineBatch4 from "@/assets/documentations/doc-online-batch-4.jpg";
import offlineTraining2 from "@/assets/documentations/doc-offline-training-2.jpg";
import { ImagePreview, type ImagePreviewInfo } from "@/components/ui/image-preview";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function DocumentationSection() {
  const animation = useScrollAnimation();
  const [previewImage, setPreviewImage] = useState<ImagePreviewInfo | null>(null);
  const items = [
    { src: offlineClassroom, alt: "Training offline di ruang kelas" },
    { src: onlineBatch1, alt: "Sesi training offline" },
    { src: onlineBatch2, alt: "Sesi training offline" },
    { src: offlineWorkshop, alt: "Workshop offline" },
    { src: onlineBatch3, alt: "Sesi training online" },
    { src: offlineTraining1, alt: "Praktik training online" },
    { src: onlineBatch4, alt: "Sesi training online" },
    { src: offlineTraining2, alt: "Praktik training online" },
  ];
  return (
    <section ref={animation.ref} className={`border-y border-border bg-surface py-20 ${animation.className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Dokumentasi Kegiatan</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
            Jejak <span className="text-gradient-red">Training</span> Kami
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dokumentasi pelatihan online &amp; offline bersama peserta dari berbagai latar belakang.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it) => (
            <button
              key={it.alt}
              type="button"
              onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setPreviewImage({ ...it, rect });
              }}
              className="group relative overflow-hidden border border-border transition-transform duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110 aspect-video"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.8), transparent)" }}
              />
              <div className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white">
                {it.alt}
              </div>
            </button>
          ))}
        </div>
        {previewImage ? (
          <ImagePreview image={previewImage} onClose={() => setPreviewImage(null)} />
        ) : null}
      </div>
    </section>
  );
}
