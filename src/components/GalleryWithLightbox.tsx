"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  categoryKey: string;
  titleKey: string;
}

interface GalleryWithLightboxProps {
  items: GalleryItem[];
}

export default function GalleryWithLightbox({ items }: GalleryWithLightboxProps) {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setLightboxImage(item);
    document.body.classList.add("no-scroll");
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="gallery-item reveal active"
            onClick={() => openLightbox(item)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={750}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="gallery-overlay">
              <div className="gallery-info">
                <span className="gallery-category">{t(item.categoryKey)}</span>
                <h4 className="gallery-title">{t(item.titleKey)}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Visualisateur de photo en grand format"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              aria-label="Fermer la vue grand format"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <Image
              className="lightbox-img"
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={900}
              height={1100}
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "85vh" }}
            />
            <div className="lightbox-caption">
              {t(lightboxImage.categoryKey)} - {t(lightboxImage.titleKey)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
