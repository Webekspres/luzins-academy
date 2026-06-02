import * as React from "react";

export type ImagePreviewInfo = {
  src: string;
  alt: string;
  rect: DOMRect;
};

type ImagePreviewProps = {
  image: ImagePreviewInfo;
  onClose: () => void;
};

export function ImagePreview({ image, onClose }: ImagePreviewProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const [targetRect, setTargetRect] = React.useState({ top: 0, left: 0, width: 0, height: 0 });

  const handleClose = React.useCallback(() => {
    setExpanded(false);
    setClosing(true);
  }, []);

  React.useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const maxWidth = Math.min(innerWidth * 0.9, image.rect.width * 2, 1200);
    let width = maxWidth;
    let height = (image.rect.height / image.rect.width) * width;

    if (height > innerHeight * 0.9) {
      height = innerHeight * 0.9;
      width = (image.rect.width / image.rect.height) * height;
    }

    setTargetRect({
      top: (innerHeight - height) / 2,
      left: (innerWidth - width) / 2,
      width,
      height,
    });
    setClosing(false);

    const timer = window.setTimeout(() => setExpanded(true), 20);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, handleClose]);

  const handleTransitionEnd = React.useCallback(() => {
    if (closing && !expanded) {
      onClose();
    }
  }, [closing, expanded, onClose]);

  const currentRect = expanded ? targetRect : image.rect;

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300"
      style={{
        opacity: expanded || closing ? 1 : 0,
        pointerEvents: expanded || closing ? "auto" : "none",
      }}
    >
      <div
        className="relative"
        style={{
          position: "fixed",
          top: currentRect.top,
          left: currentRect.left,
          width: currentRect.width,
          height: currentRect.height,
          transition: "all 300ms ease",
          zIndex: 51,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-contain"
          onClick={(event) => event.stopPropagation()}
        />
      </div>
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
      >
        Close
      </button>
    </div>
  );
}
