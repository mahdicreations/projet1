"use client";

import React, { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

// Services Data definition
const SERVICES_DATA = [
  {
    id: "mariee",
    tagline: "Le plus prestigieux",
    title: "Maquillage Mariée Royale",
    desc: "Pour le jour le plus inoubliable de votre vie, profitez d'une mise en beauté majestueuse. J'étudie votre type de peau, vos préférences et votre style pour concevoir un maquillage nuptial intemporel et résistant qui rayonnera sur toutes vos photos.",
    inclusions: [
      "1 Séance d'essai de 2 heures incluse à domicile (Marrakech).",
      "Maquillage complet le Jour-J avec préparation cutanée de prestige.",
      "Pose de faux-cils individuels en soie naturelle haut de gamme.",
      "Kit de retouche mariée offert (rouge à lèvres, papiers matifiants).",
    ],
    price: "1800 DH",
    priceInfo: "Essai + Maquillage Jour-J inclus",
  },
  {
    id: "fiancailles",
    tagline: "Romantique & Lumineux",
    title: "Maquillage Fiançailles Prestige",
    desc: "Célébrez votre promesse d'amour avec élégance. Une mise en beauté fraîche et intensément glowy pour vous assurer d'être éblouissante sous toutes les lumières de votre réception de fiançailles à Marrakech.",
    inclusions: [
      "Teint lumineux longue tenue résistant à la chaleur.",
      "Maquillage des yeux délicat assorti à vos caftans et bijoux.",
      "Pose de faux-cils effet naturel 3D.",
    ],
    price: "1100 DH",
    priceInfo: "Déplacement inclus à Marrakech",
  },
  {
    id: "soiree",
    tagline: "Sophistiqué & Intense",
    title: "Maquillage Soirée & Réception",
    desc: "Pour vos soirées mondaines, vos dîners de prestige ou vos anniversaires, optez pour un maquillage sophistiqué. Smoky-eyes magnétique rose gold ou cut-crease audacieux avec une bouche parfaitement dessinée.",
    inclusions: [
      "Maquillage des yeux travaillé (paillettes fines, liner parfait).",
      "Contouring sculpté et teint impeccable waterproof.",
      "Pose de faux-cils d'effet volumineux ou papillon inclus.",
    ],
    price: "850 DH",
    priceInfo: "Déplacement inclus à Marrakech",
  },
  {
    id: "invitee",
    tagline: "Élégant & Naturel",
    title: "Maquillage Invitée Prestige",
    desc: "Accompagnez vos proches avec une classe sans faille. Un maquillage élégant et harmonieux s'associant à votre tenue. Teint frais, textures légères et fards à paupières naturels.",
    inclusions: [
      "Préparation cutanée rapide et teint naturel frais.",
      "Maquillage des yeux doux (tons pastels, bronze ou champagne).",
      "Pose de mascara haute définition ou faux-cils légers.",
    ],
    price: "750 DH",
    priceInfo: "Déplacement inclus à Marrakech",
  },
  {
    id: "shooting",
    tagline: "Spécial Haute Définition",
    title: "Maquillage Shooting & Éditorial",
    desc: "Mise en beauté professionnelle adaptée aux contraintes de la photographie numérique et argentique. Parfait pour les shootings de mode dans le désert d'Agafay ou au Riad, et les séances de pré-mariage.",
    inclusions: [
      "Maquillage structuré avec correction chromatique pro (HD).",
      "Teint matifié à l'épreuve de la sueur, du vent et de la poussière.",
      "Retouches régulières possibles sur le lieu du shooting (sur devis).",
    ],
    price: "950 DH",
    priceInfo: "Déplacement inclus à Marrakech",
  },
];

// FAQ Data definition
const FAQ_DATA = [
  {
    question: "Comment réserver ma prestation à Marrakech ?",
    answer: "Pour réserver, il vous suffit de remplir le formulaire sur notre page d'accueil ou de cliquer sur le bouton WhatsApp pour nous contacter directement. Nous étudierons vos disponibilités et bloquerons votre date après versement d'un petit acompte de réservation.",
  },
  {
    question: "Quelles sont vos zones de déplacement gratuit ?",
    answer: "Je me déplace gratuitement dans tout Marrakech, y compris dans les quartiers de Gueliz, de l'Hivernage, de la Palmeraie, de la Route de l'Ourika et de la Route de Casablanca. Pour des déplacements plus lointains comme le Désert d'Agafay ou l'Ourika Montagneux, des frais kilométriques très légers s'appliquent.",
  },
  {
    question: "Quels cosmétiques utilisez-vous pour le teint ?",
    answer: "Je travaille exclusivement avec des produits de maquillage haut de gamme de grandes marques sélectives : Charlotte Tilbury (Flawless Filter), MAC Cosmetics (Studio Fix), Dior Backstage, Chanel et des palettes Natasha Denona. Ces produits garantissent un fini naturel et une résistance incomparable au climat chaud de Marrakech.",
  },
  {
    question: "Proposez-vous des tarifs de groupe pour les invitées ?",
    answer: "Oui, tout à fait ! Pour les mariages et grands événements, je propose des tarifs de groupe très avantageux à partir de 3 invitées supplémentaires en plus de la mariée. N'hésitez pas à mentionner le nombre de personnes à maquiller lors de votre demande de réservation afin d'obtenir un devis personnalisé.",
  },
];

export default function Services() {
  // FAQ Active Index State
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Toggle FAQ Accordion
  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  return (
    <main>
      {/* ========================================================================
           SERVICES HERO BANNER
           ======================================================================== */}
      <section className="services-hero watermark-bg">
        <div className="container">
          <RevealOnScroll className="reveal active">
            <span className="script-accent">Tarifs & Prestations</span>
            <h1 className="hero-title" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              Carte des Services à Marrakech
            </h1>
            <p className="hero-desc" style={{ maxWidth: "600px" }}>
              Des formules sur-mesure haut de gamme pour sublimer votre beauté naturelle lors de vos événements d&apos;exception à Marrakech.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================
           DETAILED SERVICES & TARIFFS SECTION
           ======================================================================== */}
      <section className="services-detail-section">
        <div className="container">
          <div className="service-detail-grid">
            {SERVICES_DATA.map((service) => (
              <RevealOnScroll key={service.id} className="service-detail-card">
                <div className="detail-content">
                  <span className="detail-tagline">{service.tagline}</span>
                  <h3>{service.title}</h3>
                  <p className="detail-text">{service.desc}</p>
                  <ul className="inclusions-list">
                    {service.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="inclusion-item">
                        <svg viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="detail-price-box">
                  <span className="detail-price-title">Prestation</span>
                  <span className="detail-price-value">{service.price}</span>
                  <span className="detail-price-info">{service.priceInfo}</span>
                  <Link href="/#reservation" className="btn btn-primary" style={{ width: "100%" }}>
                    Réserver
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
           FAQ INTERACTIVE ACCORDION
           ======================================================================== */}
      <section className="faq-section">
        <div className="container">
          <RevealOnScroll className="section-title-wrap">
            <span className="script-accent">Foire Aux Questions</span>
            <h2 className="section-title">Des réponses à vos questions</h2>
            <p className="section-subtitle">Toutes les informations pratiques</p>
          </RevealOnScroll>

          <div className="faq-container">
            {FAQ_DATA.map((faq, index) => {
              const isActive = activeFaqIndex === index;
              return (
                <RevealOnScroll
                  key={index}
                  className={`faq-card ${isActive ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-header">
                    <h4 className="faq-question">{faq.question}</h4>
                    <svg
                      className="faq-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <p className="faq-answer">{faq.answer}</p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
