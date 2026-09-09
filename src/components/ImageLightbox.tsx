"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  label?: string;
};

export default function ImageLightbox({ src, alt, label }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"),
      ).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
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
          ref={dialogRef}
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`รูปภาพขนาดเต็ม ${alt}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="image-lightbox-bar">
            <span>{label ?? "IMAGE"}</span>
            <button ref={closeRef} type="button" className="image-lightbox-close" onClick={close}>
              [× CLOSE]
            </button>
          </div>
          <div className="image-lightbox-content">
            <Image src={src} alt={alt} fill sizes="100vw" className="image-lightbox-img" priority />
          </div>
        </div>
      )}
    </>
  );
}
