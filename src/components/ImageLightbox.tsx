"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  label?: string;
};

export default function ImageLightbox({ src, alt, label }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="gallery-image-trigger"
        onClick={() => setOpen(true)}
        aria-label={`ขยายรูป ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="gallery-zoom-hint">CLICK TO EXPAND ↗</span>
      </button>

      {open && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`รูปภาพขนาดเต็ม ${alt}`}
          onClick={() => setOpen(false)}
        >
          <div className="image-lightbox-bar">
            <span>{label ?? "IMAGE"}</span>
            <span>CLICK ANYWHERE TO CLOSE · ESC</span>
          </div>
          <div className="image-lightbox-content">
            <Image src={src} alt={alt} fill sizes="100vw" className="image-lightbox-img" priority />
          </div>
        </div>
      )}
    </>
  );
}
