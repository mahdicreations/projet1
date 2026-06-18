// NO "use client" — this is a Server Component.
// All static sections render as real HTML in the initial response.
// Only BookingForm and GalleryWithLightbox are client islands.

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import BookingForm from "@/components/BookingForm";
import GalleryWithLightbox from "@/components/GalleryWithLightbox";
import { getDict, st } from "@/lib/getDictionary";

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/assets/gallery-bridal-v2.png",
    alt: "Sophisticated Marrakech bridal soft glam look",
    categoryKey: "gallery.category.mariage",
    titleKey: "gallery.title1",
  },
  {
    id: 2,
    src: "/assets/gallery-glam-v2.png",
    alt: "Prestige evening makeup in Marrakech by Sarahglam's",
    categoryKey: "gallery.category.glam",
    titleKey: "gallery.title2",
  },
  {
    id: 3,
    src: "/assets/gallery-fiancailles-v2.png",
    alt: "Engagement glow makeup Marrakech",
    categoryKey: "gallery.category.fiancailles",
    titleKey: "gallery.title3",
  },
];

export default function Home() {
  // Server-side: always render in French (default locale).
  // The client LanguageContext takes over after hydration for language switching.
  const d = getDict("fr");
  const t = (key: string) => st(d, key);

  return (
    <main>
      {/* ========================================================================
           HERO SECTION — Above-the-fold: SSR rendered, no RevealOnScroll wrapper
           ======================================================================== */}
      <section id="accueil" className="hero watermark-bg">
        <div className="container hero-grid">
          <div className="hero-content reveal active">
            <span className="hero-tagline">{t("hero.tagline")}</span>
            <h1 className="hero-title">
              {t("hero.title")} <span>{t("hero.title_span")}</span>
            </h1>
            <p className="hero-desc">{t("hero.desc")}</p>
            <div className="hero-actions">
              <Link href="#reservation" className="btn btn-primary">
                {t("hero.cta_primary")}
              </Link>
              <Link href="/services" className="btn btn-secondary">
                {t("hero.cta_secondary")}
              </Link>
            </div>
          </div>
          <div className="hero-visual reveal active">
            <div className="hero-img-frame">
              <Image
                src="/assets/hero-makeup-v2.png"
                alt="Prestige bridal makeup in Marrakech by Sarahglam's"
                width={600}
                height={750}
                priority={true}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className="hero-deco-flower"></div>
          </div>
        </div>
      </section>

      {/* ========================================================================
           ABOUT SECTION
           ======================================================================== */}
      <section id="a-propos" className="about">
        <div className="container about-grid">
          <RevealOnScroll className="about-visual">
            <div className="about-img-frame">
              <Image
                src="/assets/about-makeup.png"
                alt="Luxurious makeup setup with rose gold accessories in Gueliz Marrakech"
                width={550}
                height={680}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className="experience-badge">
              <span className="experience-years">{t("about.experience_years")}</span>
              <span className="experience-text">{t("about.experience_text")}</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="about-content">
            <span className="script-accent">{t("about.tagline")}</span>
            <h2 className="about-title">{t("about.title")}</h2>
            <p className="about-bio">
              Bienvenue dans l&apos;univers exclusif de <strong>Sarahglam&apos;s</strong>,{" "}
              {t("about.bio1").replace("Bienvenue dans l'univers exclusif de Sarahglam's, ", "")}
            </p>
            <p className="about-bio">{t("about.bio2")}</p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 10.5l-1.2-2.8L15 6.5l2.8-1.2L19 2.5l1.2 2.8L23 6.5l-2.8 1.2L19 10.5zm-8.5 3L8.5 7.2 6.5 1.5 4.5 7.2 2.5 13.5 8.2 15.5l5.7 2-5.7 2-2 5.7 2-5.7 5.7-2-5.7-2z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{t("about.feature1.title")}</h3>
                  <p className="feature-desc">{t("about.feature1.desc")}</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{t("about.feature2.title")}</h3>
                  <p className="feature-desc">{t("about.feature2.desc")}</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{t("about.feature3.title")}</h3>
                  <p className="feature-desc">{t("about.feature3.desc")}</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{t("about.feature4.title")}</h3>
                  <p className="feature-desc">{t("about.feature4.desc")}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           SERVICES SECTION Overview
           ======================================================================== */}
      <section id="prestations" className="services watermark-bg">
        <div className="container">
          <RevealOnScroll className="section-title-wrap">
            <span className="script-accent">{t("prestations.tagline")}</span>
            <h2 className="section-title">{t("prestations.title")}</h2>
            <p className="section-subtitle">{t("prestations.subtitle")}</p>
          </RevealOnScroll>

          <div className="services-grid">
            {/* Card 1: Mariée */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }}>
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
                </svg>
              </div>
              <h3>{t("prestations.card1.title")}</h3>
              <p className="service-desc">{t("prestations.card1.desc")}</p>
              <div className="service-price">
                <span>{t("prestations.card1.price_label")}</span>
                1800 DH
              </div>
            </RevealOnScroll>

            {/* Card 2: Fiançailles */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }}>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h3>{t("prestations.card2.title")}</h3>
              <p className="service-desc">{t("prestations.card2.desc")}</p>
              <div className="service-price">
                <span>{t("prestations.card2.price_label")}</span>
                1100 DH
              </div>
            </RevealOnScroll>

            {/* Card 3: Soirée */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }}>
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              </div>
              <h3>{t("prestations.card3.title")}</h3>
              <p className="service-desc">{t("prestations.card3.desc")}</p>
              <div className="service-price">
                <span>{t("prestations.card3.price_label")}</span>
                850 DH
              </div>
            </RevealOnScroll>

            {/* Card 4: Volume Russe */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }}>
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>{t("prestations.card4.title")}</h3>
              <p className="service-desc">{t("prestations.card4.desc")}</p>
              <div className="service-price">
                <span>{t("prestations.card4.price_label")}</span>
                540 DH
              </div>
            </RevealOnScroll>

            {/* Card 5: Cil à Cil */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }}>
                  <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/>
                  <path d="M16 8 2 22"/><path d="M17.5 15H9"/>
                </svg>
              </div>
              <h3>{t("prestations.card5.title")}</h3>
              <p className="service-desc">{t("prestations.card5.desc")}</p>
              <div className="service-price">
                <span>{t("prestations.card5.price_label")}</span>
                320 DH
              </div>
            </RevealOnScroll>

            {/* Card 6: Shooting */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }}>
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
              <h3>{t("prestations.card6.title")}</h3>
              <p className="service-desc">{t("prestations.card6.desc")}</p>
              <div className="service-price">
                <span>{t("prestations.card6.price_label")}</span>
                950 DH
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll className="reveal" style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/services" className="btn btn-primary">
              {t("prestations.view_all")}
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           GALERIE SECTION — GalleryWithLightbox is a client island
           ======================================================================== */}
      <section id="galerie" className="gallery">
        <div className="container">
          <RevealOnScroll className="section-title-wrap">
            <span className="script-accent">{t("gallery.tagline")}</span>
            <h2 className="section-title">{t("gallery.title")}</h2>
            <p className="section-subtitle">{t("gallery.subtitle")}</p>
          </RevealOnScroll>

          {/* Client island: handles lightbox interactivity */}
          <GalleryWithLightbox items={GALLERY_ITEMS} />
        </div>
      </section>

      {/* ========================================================================
           TESTIMONIALS SECTION
           ======================================================================== */}
      <section id="temoignages" className="testimonials">
        <div className="container">
          <RevealOnScroll className="section-title-wrap">
            <span className="script-accent">{t("testimonials.tagline")}</span>
            <h2 className="section-title">{t("testimonials.title")}</h2>
            <p className="section-subtitle">{t("testimonials.subtitle")}</p>
          </RevealOnScroll>

          <div className="testimonials-slider">
            <RevealOnScroll className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">{t("testimonials.client1.text")}</p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">A</div>
                <div className="client-details">
                  <h4>{t("testimonials.client1.name")}</h4>
                  <span>{t("testimonials.client1.info")}</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">{t("testimonials.client2.text")}</p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">S</div>
                <div className="client-details">
                  <h4>{t("testimonials.client2.name")}</h4>
                  <span>{t("testimonials.client2.info")}</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">{t("testimonials.client3.text")}</p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">L</div>
                <div className="client-details">
                  <h4>{t("testimonials.client3.name")}</h4>
                  <span>{t("testimonials.client3.info")}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========================================================================
           BOOKING SECTION — BookingForm is the client island
           ======================================================================== */}
      <section id="reservation" className="booking">
        <div className="container booking-grid">
          <RevealOnScroll className="booking-info">
            <span className="script-accent">{t("booking.tagline")}</span>
            <h2 className="booking-title">{t("booking.title")}</h2>
            <p className="booking-desc">{t("booking.desc")}</p>

            <div className="booking-meta">
              <div className="meta-item">
                <div className="meta-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="meta-text">
                  <h5>{t("booking.address_title")}</h5>
                  <p>{t("booking.address_text")}</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="meta-text">
                  <h5>{t("booking.email_title")}</h5>
                  <p>sarahglams6@gmail.com</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="meta-text">
                  <h5>{t("booking.phone_title")}</h5>
                  <p>+212 7 84 47 74 94</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Client island: handles form state and WhatsApp submission */}
          <RevealOnScroll className="booking-card">
            <BookingForm />
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           SOCIAL MEDIA ENGAGEMENT SECTION
           ======================================================================== */}
      <section id="reseaux" className="socials">
        <div className="container">
          <RevealOnScroll className="reveal">
            <span className="script-accent">{t("socials.tagline")}</span>
            <h2 className="social-title">{t("socials.title")}</h2>
            <a
              href="https://www.instagram.com/sarahglam.s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-handle"
            >
              @sarahglam.s
            </a>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/sarahglam.s"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Suivre Sarahglam's Marrakech sur Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/sarahglams"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Suivre Sarahglam's Marrakech sur Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@sarahglams0"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Suivre Sarahglam's Marrakech sur TikTok"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.99 1.15 2.37 1.93 3.86 2.19v3.9c-1.57-.02-3.11-.53-4.43-1.4-1.02-.71-1.84-1.68-2.42-2.8-.08 1.83-.03 3.67-.05 5.5-.04 2.21-.63 4.41-1.78 6.27-1.34 2.11-3.56 3.63-6 4.09-2.27.42-4.66.07-6.72-1.01C1.04 19.34-.14 16.94-.03 14.4c.05-2.5 1.29-4.89 3.32-6.3 1.87-1.35 4.22-1.89 6.51-1.49v4.03c-1.31-.38-2.74-.15-3.87.58-1.07.67-1.74 1.85-1.78 3.12-.05 1.54.83 2.99 2.23 3.62 1.34.61 2.94.46 4.14-.38.98-.67 1.51-1.8 1.5-2.99.04-4.88.02-9.75.02-14.62-.01.02-.01.02 0 0z" />
                </svg>
              </a>
              <a
                href="https://snapchat.com/t/9aXMpWsa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Suivre Sarahglam's Marrakech sur Snapchat"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.75c-3.23 0-5.18 2.05-5.18 4.75 0 .34.02.66.06.94l.21 1.25.32 1.93c.09.5.15.93.18 1.22l.02.19c-.11-.01-.25-.01-.4-.01-.73 0-1.72.06-2.42.71-.62.58-1.14 1.29-1.51 1.99a.88.88 0 00.32 1.13.91.91 0 00.56.12c.49-.03 1.16-.27 1.76-.49.33-.12.63-.23.88-.3l.11-.04c.1.34.22.62.37.84.18.25.4.45.66.6a14.2 14.2 0 01-.64.7c-.82.82-1.39 1.4-1.53 1.97-.24 1.09.56 1.77 2.1 2.21.36.1.75.18 1.17.23.23.03.49.04.76.04h.3c.31-.03.62-.09.92-.19l.1-.03c.09-.03.18-.06.27-.1l.1.03c.3.1.61.16.92.19h.3c.27 0 .53-.01.76-.04.42-.05.81-.13 1.17-.23 1.54-.44 2.34-1.12 2.1-2.21-.14-.57-.71-1.15-1.53-1.97a14.2 14.2 0 01-.64-.7c.26-.15.48-.35.66-.6.15-.22.27-.5.37-.84l.11.04c.25.07.55.18.88.3.6.22 1.27.46 1.76.49.2 0 .39-.04.56-.12a.88.88 0 00.32-1.13c-.37-.7-1.39-1.89-2.01-2.47-.7-.65-1.69-.71-2.42-.71-.15 0-.29 0-.4.01l.02-.19c.03-.29.09-.72.18-1.22l.32-1.93.21-1.25c.04-.28.06-.6.06-.94 0-2.7-1.95-4.75-5.18-4.75z" />
                </svg>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
