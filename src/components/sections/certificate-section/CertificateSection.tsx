import { CheckCircle2 } from "lucide-react";
import certificate1 from "@/assets/certificate-1.jpeg";
import certificate2 from "@/assets/certificate-2.jpeg";
import { SectionLabel } from "@/components/sections/section-label/SectionLabel";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ImagePreview, type ImagePreviewInfo } from "@/components/ui/image-preview";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const certificateSlides = [
  {
    src: certificate1,
    alt: "Contoh sertifikat pelatihan public speaking 1",
  },
  {
    src: certificate2,
    alt: "Contoh sertifikat pelatihan public speaking 2",
  },
];

type PreviewImage = {
  src: string;
  alt: string;
  rect: DOMRect;
};

export function CertificateSection() {
  const animation = useScrollAnimation();
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [previewImage, setPreviewImage] = useState<ImagePreviewInfo | null>(null);

  const handleSetApi = (api: CarouselApi | undefined) => setEmblaApi(api ?? null);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = window.setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4500);

    return () => window.clearInterval(interval);
  }, [emblaApi]);


  return (
    <section ref={animation.ref} className={`mx-auto max-w-7xl px-4 py-20 ${animation.className}`}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionLabel className="text-primary">Sertifikat Resmi</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
            Dapatkan <span className="text-gradient-red">Sertifikat</span> Setelah Lulus
          </h2>
          <p className="mt-5 text-muted-foreground">
            Setiap peserta yang menyelesaikan pelatihan akan mendapatkan sertifikat resmi sebagai
            bukti kompetensi dari <strong className="text-foreground">PT. LUZINS ACADEMY INDONESIA</strong>.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Sertifikat digital + soft copy siap cetak",
              "Diterbitkan oleh lembaga berlegalitas",
              "Bisa untuk portofolio kerja & beasiswa",
              "Sertifikat diberikan langsung setelah kegiatan selesai",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden">
          <Carousel className="overflow-hidden" opts={{ loop: false }} setApi={handleSetApi}>
            <CarouselContent className="flex gap-4">
              {certificateSlides.map((slide) => (
                <CarouselItem key={slide.alt} className="min-w-full bg-black/5">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    className="w-full cursor-pointer object-cover"
                    onClick={(event) => {
                      const rect = event.currentTarget.getBoundingClientRect();
                      setPreviewImage({ ...slide, rect });
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
          {previewImage ? (
            <ImagePreview image={previewImage} onClose={() => setPreviewImage(null)} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
