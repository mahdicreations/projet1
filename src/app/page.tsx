"use client";

import React, { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

// Gallery Items definition
const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/assets/gallery-bridal.png",
    alt: "Sophisticated Marrakech bridal soft glam look",
    category: "Mariage",
    title: "Douceur Nuptiale",
  },
  {
    id: 2,
    src: "/assets/gallery-glam.png",
    alt: "Prestige evening makeup in Marrakech by Sarahglam's",
    category: "Glam Soirée",
    title: "Regard Braise & Rose Gold",
  },
  {
    id: 3,
    src: "/assets/hero-makeup.png",
    alt: "Engagement glow makeup Marrakech",
    category: "Fiançailles",
    title: "Éclat Romantique",
  },
];

export default function Home() {
  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    city: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp Config
  const WHATSAPP_NUMBER = "212612345678";

  // Handle Form Change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldName = id.replace("form-", "");
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  // Open Lightbox
  const openLightbox = (item: typeof GALLERY_ITEMS[0]) => {
    setLightboxImage(item);
    document.body.classList.add("no-scroll");
  };

  // Close Lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.classList.remove("no-scroll");
  };

  // Generate WhatsApp Message Link
  const generateWhatsAppMessage = () => {
    let text = `✨ *Demande de Maquillage à Domicile Marrakech - Sarahglam's* ✨\n\n`;
    text += `🌸 *Nom :* ${formData.name}\n`;
    text += `📞 *Téléphone :* ${formData.phone}\n`;
    text += `📅 *Date souhaitée :* ${formData.date}\n`;
    text += `📍 *Quartier/Riad/Hôtel :* ${formData.city}\n`;
    text += `💄 *Prestation :* ${formData.service}\n\n`;

    if (formData.message.trim()) {
      text += `💌 *Message/Détails :*\n_${formData.message.trim()}_\n\n`;
    }

    text += `Merci de me reconfirmer vos disponibilités pour Marrakech ! 💕`;
    return encodeURIComponent(text);
  };

  // Form Submit Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.city || !formData.service) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);
    const whatsappText = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        date: "",
        city: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  // Direct WhatsApp Button click handler
  const handleDirectWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Bonjour Sarahglam's ! Je souhaite obtenir des informations sur vos prestations de maquillage à domicile à Marrakech. ✨"
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main>
      {/* ========================================================================
           HERO SECTION
           ======================================================================== */}
      <section id="accueil" className="hero watermark-bg">
        <div className="container hero-grid">
          <RevealOnScroll className="hero-content">
            <span className="hero-tagline">Prestige Makeup Artist Marrakech</span>
            <h1 className="hero-title">
              Maquillage à domicile Marrakech <span>avec Sarahglam&apos;s</span>
            </h1>
            <p className="hero-desc">
              Sublimez vos moments d&apos;exception dans la Ville Rouge. Un service de mise en beauté prestigieux, romantique et sur-mesure, directement chez vous ou dans votre hôtel à Marrakech.
            </p>
            <div className="hero-actions">
              <Link href="#reservation" className="btn btn-primary">
                Réserver maintenant
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Services & Tarifs
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="hero-visual">
            <div className="hero-img-frame">
              <img
                src="/assets/hero-makeup.png"
                alt="Prestige bridal makeup in Marrakech by Sarahglam's"
              />
            </div>
            <div className="hero-deco-flower"></div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           ABOUT SECTION
           ======================================================================== */}
      <section id="a-propos" className="about">
        <div className="container about-grid">
          <RevealOnScroll className="about-visual">
            <div className="about-img-frame">
              <img
                src="/assets/about-makeup.png"
                alt="Luxurious makeup setup with rose gold accessories in Gueliz Marrakech"
              />
            </div>
            <div className="experience-badge">
              <span className="experience-years">8+</span>
              <span className="experience-text">Ans d&apos;Élite</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="about-content">
            <span className="script-accent">Maquilleuse Professionnelle</span>
            <h2 className="about-title">Votre mise en beauté sur-mesure à Marrakech</h2>
            <p className="about-bio">
              Bienvenue dans l&apos;univers exclusif de <strong>Sarahglam&apos;s</strong>, votre prestataire privilège pour le <strong>maquillage à domicile à Marrakech</strong>. En tant que makeup artist passionnée, je me déplace chez vous, dans votre riad ou dans les plus prestigieux hôtels de la ville pour sublimer votre éclat.
            </p>
            <p className="about-bio">
              Spécialisée dans les mariages de destination à Marrakech et les événements haut de gamme, je crée des looks soft-glam et romantiques adaptés à vos envies. J&apos;utilise uniquement des produits iconiques <em>(Charlotte Tilbury, MAC, Dior, Chanel, Natasha Denona)</em> formulés pour résister à la douce chaleur marrakchia et durer parfaitement toute la nuit.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 10.5l-1.2-2.8L15 6.5l2.8-1.2L19 2.5l1.2 2.8L23 6.5l-2.8 1.2L19 10.5zm-8.5 3L8.5 7.2 6.5 1.5 4.5 7.2 2.5 13.5 8.2 15.5l5.7 2-5.7 2-2 5.7 2-5.7 5.7-2-5.7-2z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Produits de Luxe</h3>
                  <p className="feature-desc">
                    Teint glowy impeccable, texture fine et tenue professionnelle longue durée.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Hygiène Meticuleuse</h3>
                  <p className="feature-desc">
                    Pinceaux stérilisés, produits désinfectés et applicateurs jetables.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Ponctualité Globale</h3>
                  <p className="feature-desc">
                    Déplacement rapide à Gueliz, Hivernage, Palmeraie et environs.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Conseil Personnalisé</h3>
                  <p className="feature-desc">
                    Mise en beauté accordée à votre carnation, votre tenue et au climat.
                  </p>
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
            <span className="script-accent">Ma Sélection Prestige</span>
            <h2 className="section-title">Mes Services à Marrakech</h2>
            <p className="section-subtitle">L&apos;élégance sous toutes ses déclinaisons</p>
          </RevealOnScroll>

          <div className="services-grid">
            {/* Card 1: Mariée */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M2 19h20v2H2zm1-8l3 8h12l3-8-5 4-3-6-3 6z" />
                </svg>
              </div>
              <h3>Maquillage Mariée</h3>
              <p className="service-desc">
                Le maquillage de vos rêves pour votre mariage à Marrakech. Comprend un essai personnalisé complet à votre domicile et la mise en beauté royale le jour J.
              </p>
              <div className="service-price">
                <span>Formule complète</span>
                1800 DH
              </div>
            </RevealOnScroll>

            {/* Card 2: Fiancailles */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                </svg>
              </div>
              <h3>Maquillage Fiançailles</h3>
              <p className="service-desc">
                Un teint frais, lumineux et intensément romantique. Idéal pour être éblouissante sous les projecteurs de votre fête de fiançailles à Marrakech.
              </p>
              <div className="service-price">
                <span>La prestation</span>
                1100 DH
              </div>
            </RevealOnScroll>

            {/* Card 3: Soirée */}
            <RevealOnScroll className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-9 8.3-9.8.5-.1 1 .2 1.2.6.2.5 0 1.1-.4 1.4-1.9 1.4-2.9 3.7-2.9 6.1 0 4.1 3.3 7.4 7.4 7.4 2.4 0 4.7-1 6.1-2.9.3-.4.9-.6 1.4-.4.5.2.8.7.6 1.2-.8 4.8-5 8.3-9.8 8.3z" />
                </svg>
              </div>
              <h3>Maquillage Soirée</h3>
              <p className="service-desc">
                Un look glamour sophistiqué. Smoky-eyes rose gold, liner haute précision et lèvres nude ou rouges intenses pour toutes vos réceptions à Marrakech.
              </p>
              <div className="service-price">
                <span>La prestation</span>
                850 DH
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll className="reveal" style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/services" className="btn btn-primary">
              Voir tous les Tarifs & Services
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           GALERIE SECTION (Interactive React Lightbox)
           ======================================================================== */}
      <section id="galerie" className="gallery">
        <div className="container">
          <RevealOnScroll className="section-title-wrap">
            <span className="script-accent">Mon Portfolio</span>
            <h2 className="section-title">Mes Réalisations</h2>
            <p className="section-subtitle">L&apos;élégance marocaine capturée en images</p>
          </RevealOnScroll>

          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <RevealOnScroll
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(item)}
              >
                <img src={item.src} alt={item.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span className="gallery-category">{item.category}</span>
                    <h4 className="gallery-title">{item.title}</h4>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
           TESTIMONIALS SECTION
           ======================================================================== */}
      <section id="temoignages" className="testimonials">
        <div className="container">
          <RevealOnScroll className="section-title-wrap">
            <span className="script-accent">Leur Récit Beauté</span>
            <h2 className="section-title">Témoignages Clients</h2>
            <p className="section-subtitle">Des mots doux de nos clientes à Marrakech</p>
          </RevealOnScroll>

          <div className="testimonials-slider">
            {/* Testimonial 1 */}
            <RevealOnScroll className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                &quot;Sarah a été tout simplement magique pour mon mariage à la Palmeraie de Marrakech ! Le maquillage soft glam était sublime, lumineux et a parfaitement résisté à la chaleur marrakchia. Une artiste bienveillante et ultra talentueuse !&quot;
              </p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">A</div>
                <div className="client-details">
                  <h4>Amandine L.</h4>
                  <span>Mariage Palmeraie 2025</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Testimonial 2 */}
            <RevealOnScroll className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                &quot;Prestation incroyable à notre riad à Gueliz. Sarah est ponctuelle, adorable, et travaille avec une hygiène irréprochable. Mes copines et moi avons été maquillées pour ma soirée de fiançailles, c&apos;était tout simplement parfait !&quot;
              </p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">S</div>
                <div className="client-details">
                  <h4>Sofia B.</h4>
                  <span>Fiançailles Riad Gueliz</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Testimonial 3 */}
            <RevealOnScroll className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                &quot;J&apos;ai fait appel à Sarahglam&apos;s pour un shooting d&apos;éditorial dans le désert d&apos;Agafay. Le teint était incroyable, matifié à la perfection pour résister aux objectifs et aux fortes lumières. Une maquilleuse d&apos;élite à Marrakech !&quot;
              </p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">L</div>
                <div className="client-details">
                  <h4>Léa M.</h4>
                  <span>Shooting Éditorial Agafay</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========================================================================
           BOOKING SECTION
           ======================================================================== */}
      <section id="reservation" className="booking">
        <div className="container booking-grid">
          <RevealOnScroll className="booking-info">
            <span className="script-accent">Contact & Réservations</span>
            <h2 className="booking-title">Planifiez votre mise en beauté</h2>
            <p className="booking-desc">
              Remplissez le formulaire ci-contre pour soumettre votre demande. Vous recevrez une confirmation instantanée via WhatsApp ou par appel téléphonique sous 2 heures.
            </p>

            <div className="booking-meta">
              <div className="meta-item">
                <div className="meta-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="meta-text">
                  <h5>Adresse Salon & Bureau</h5>
                  <p>Gueliz, Marrakech, Maroc</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="meta-text">
                  <h5>E-mail de Contact</h5>
                  <p>contact@sarahglams.com</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="meta-text">
                  <h5>Réservations & WhatsApp</h5>
                  <p>+212 6 12 34 56 78</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form Card Container */}
          <RevealOnScroll className="booking-card">
            <form onSubmit={handleFormSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Nom complet *</label>
                  <input
                    type="text"
                    id="form-name"
                    className="form-input"
                    placeholder="Ex: Amandine Martin"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-phone">N° Téléphone *</label>
                  <input
                    type="tel"
                    id="form-phone"
                    className="form-input"
                    placeholder="Ex: +212 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-date">Date souhaitée *</label>
                  <input
                    type="date"
                    id="form-date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-city">Quartier / Riad ou Hôtel *</label>
                  <input
                    type="text"
                    id="form-city"
                    className="form-input"
                    placeholder="Ex: Gueliz / Riad Zaytoun"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-service">Prestation désirée *</label>
                <select
                  id="form-service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>-- Sélectionnez une mise en beauté --</option>
                  <option value="Maquillage Mariée (Essai + Jour J)">Maquillage Mariée (Essai + Jour J) - 1800 DH</option>
                  <option value="Maquillage Fiançailles">Maquillage Fiançailles - 1100 DH</option>
                  <option value="Maquillage Soirée">Maquillage Soirée - 850 DH</option>
                  <option value="Maquillage Invitée">Maquillage Invitée - 750 DH</option>
                  <option value="Maquillage Shooting">Maquillage Shooting - 950 DH</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="form-message">Message, détails ou demandes spéciales (Optionnel)</label>
                <textarea
                  id="form-message"
                  className="form-input"
                  placeholder="Ex: Précisions sur l'heure, votre type de peau, ou si vous souhaitez maquiller des invitées en plus..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Redirection en cours... ✨" : "Demander ma réservation"}
                </button>
                <div className="form-divider">ou</div>
                <button
                  type="button"
                  id="direct-whatsapp-btn"
                  className="btn btn-whatsapp"
                  onClick={handleDirectWhatsAppClick}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.479 2.005 14.019.98 11.997.98 6.561.98 2.135 5.352 2.132 10.783c0 1.693.456 3.348 1.32 4.792l-.997 3.639 3.73-.974.002.002c1.42.825 2.94 1.258 4.49 1.258z" />
                  </svg>
                  Discuter sur WhatsApp
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           SOCIAL MEDIA ENGAGEMENT SECTION
           ======================================================================== */}
      <section id="reseaux" className="socials">
        <div className="container">
          <RevealOnScroll className="reveal">
            <span className="script-accent">Rejoignez ma communauté</span>
            <h2 className="social-title">Suivez mes coulisses à Marrakech</h2>
            <a
              href="https://instagram.com/sarahglams"
              target="_blank"
              rel="noopener noreferrer"
              className="social-handle"
            >
              @sarahglams
            </a>

            <div className="social-icons">
              {/* Instagram */}
              <a
                href="https://instagram.com/sarahglams"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Suivre Sarahglam's Marrakech sur Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
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
              {/* TikTok */}
              <a
                href="https://tiktok.com/@sarahglams"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Suivre Sarahglam's Marrakech sur TikTok"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.99 1.15 2.37 1.93 3.86 2.19v3.9c-1.57-.02-3.11-.53-4.43-1.4-1.02-.71-1.84-1.68-2.42-2.8-.08 1.83-.03 3.67-.05 5.5-.04 2.21-.63 4.41-1.78 6.27-1.34 2.11-3.56 3.63-6 4.09-2.27.42-4.66.07-6.72-1.01C1.04 19.34-.14 16.94-.03 14.4c.05-2.5 1.29-4.89 3.32-6.3 1.87-1.35 4.22-1.89 6.51-1.49v4.03c-1.31-.38-2.74-.15-3.87.58-1.07.67-1.74 1.85-1.78 3.12-.05 1.54.83 2.99 2.23 3.62 1.34.61 2.94.46 4.14-.38.98-.67 1.51-1.8 1.5-2.99.04-4.88.02-9.75.02-14.62-.01.02-.01.02 0 0z" />
                </svg>
              </a>
              {/* Snapchat */}
              <a
                href="https://snapchat.com/add/sarahglams"
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

      {/* ========================================================================
           LIGHTBOX POPUP (Interactive React Overlay)
           ======================================================================== */}
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
            <img
              className="lightbox-img"
              src={lightboxImage.src}
              alt={lightboxImage.alt}
            />
            <div className="lightbox-caption">
              {lightboxImage.category} - {lightboxImage.title}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
