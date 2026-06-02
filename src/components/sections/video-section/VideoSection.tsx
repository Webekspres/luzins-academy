import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";


interface VideoItem {
  id: string;
  title: string;
  description: string;
  platform: "youtube" | "tiktok";
  embedUrl: string; // Embed URL or iframe source link
  thumbnail: string;
  aspect: "landscape" | "portrait";
}

export function VideoSection() {
  const animation = useScrollAnimation();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: "yt-1",
      title: "Teknik Mengatasi Demam Panggung dalam 3 Menit",
      description: "Latihan pernapasan dan mindset sebelum tampil di atas panggung.",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/A_bTpdq0KH8",
      thumbnail: "https://img.youtube.com/vi/A_bTpdq0KH8/hqdefault.jpg",
      aspect: "landscape",
    },
    {
      id: "yt-2",
      title: "3 Tips Body Language saat Presentasi",
      description: "Gunakan gerakan tangan ini agar audiens lebih percaya dengan presentasimu.",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/qEixxciWK2Q",
      thumbnail: "https://img.youtube.com/vi/qEixxciWK2Q/hqdefault.jpg",
      aspect: "portrait",
    },
    {
      id: "yt-3",
      title: "Dokumentasi Kelas Sertifikasi Public Speaking Batch 15",
      description: "Keseruan praktik langsung peserta offline di hotel berbintang.",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/9fqqi7EIE6M",
      thumbnail: "https://img.youtube.com/vi/9fqqi7EIE6M/hqdefault.jpg",
      aspect: "landscape",
    },
    {
      id: "yt-4",
      title: "Cara Melatih Intonasi Suara agar Karismatik",
      description: "Praktik modul aksentuasi dan tempo bicara ala trainer profesional.",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/KA9vFuSWoLM?start=3",
      thumbnail: "https://img.youtube.com/vi/KA9vFuSWoLM/hqdefault.jpg",
      aspect: "portrait",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeVideo) {
        setActiveVideo(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section ref={animation.ref} className={`mx-auto max-w-7xl px-4 py-20 border-t border-border ${animation.className}`}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-4 text-4xl sm:text-5xl uppercase font-semibold">
          LIHAT <span className="text-gradient-red">AKSI NYATA</span> KAMI
        </h2>
        <p className="mt-4 text-muted-foreground">
          Saksikan tips praktis, testimonial, dan dokumentasi kelas kami langsung melalui video.
        </p>
      </div>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((vid) => (
          <button
            key={vid.id}
            type="button"
            onClick={() => setActiveVideo(vid)}
            className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-red/10 hover:shadow-lg"
          >
            <div className="relative overflow-hidden cursor-pointer aspect-video">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />
            </div>
          </button>
        ))}
      </div>

      {/* Modal Video Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`w-full mx-auto overflow-hidden max-h-[90vh] ${
                activeVideo.aspect === "portrait"
                  ? "aspect-9/16"
                  : "aspect-video"
              }`}
            >
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
