"use client";

import React, { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

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

  const services = [
    {
      id: "mariee",
      tagline: t("services.detail.tagline.royal"),
      title: t("services.detail.mariee.title"),
      desc: t("services.detail.mariee.desc"),
      inclusions: [
        t("services.detail.mariee.inc1"),
        t("services.detail.mariee.inc2"),
        t("services.detail.mariee.inc3"),
        t("services.detail.mariee.inc4"),
      ],
      price: "1800 DH",
      priceInfo: t("services.detail.mariee.priceInfo"),
    },
    {
      id: "fiancailles",
      tagline: t("services.detail.tagline.romantique"),
      title: t("services.detail.fiancailles.title"),
      desc: t("services.detail.fiancailles.desc"),
      inclusions: [
        t("services.detail.fiancailles.inc1"),
        t("services.detail.fiancailles.inc2"),
        t("services.detail.fiancailles.inc3"),
      ],
      price: "1100 DH",
      priceInfo: t("services.detail.fiancailles.priceInfo"),
    },
    {
      id: "soiree",
      tagline: t("services.detail.tagline.soiree"),
      title: t("services.detail.soiree.title"),
      desc: t("services.detail.soiree.desc"),
      inclusions: [
        t("services.detail.soiree.inc1"),
        t("services.detail.soiree.inc2"),
        t("services.detail.soiree.inc3"),
      ],
      price: "850 DH",
      priceInfo: t("services.detail.soiree.priceInfo"),
    },
    {
      id: "invitee",
      tagline: t("services.detail.tagline.invitee"),
      title: t("services.detail.invitee.title"),
      desc: t("services.detail.invitee.desc"),
      inclusions: [
        t("services.detail.invitee.inc1"),
        t("services.detail.invitee.inc2"),
        t("services.detail.invitee.inc3"),
      ],
      price: "750 DH",
      priceInfo: t("services.detail.invitee.priceInfo"),
    },
    {
      id: "shooting",
      tagline: t("services.detail.tagline.shooting"),
      title: t("services.detail.shooting.title"),
      desc: t("services.detail.shooting.desc"),
      inclusions: [
        t("services.detail.shooting.inc1"),
        t("services.detail.shooting.inc2"),
        t("services.detail.shooting.inc3"),
      ],
      price: "950 DH",
      priceInfo: t("services.detail.shooting.priceInfo"),
    },
    {
      id: "volume-russe",
      tagline: t("services.detail.tagline.volume_russe"),
      title: t("services.detail.volume_russe.title"),
      desc: t("services.detail.volume_russe.desc"),
      inclusions: [
        t("services.detail.volume_russe.inc1"),
        t("services.detail.volume_russe.inc2"),
        t("services.detail.volume_russe.inc3"),
      ],
      price: "540 DH",
      priceInfo: t("services.detail.volume_russe.priceInfo"),
    },
    {
      id: "cil-a-cil",
      tagline: t("services.detail.tagline.cil_a_cil"),
      title: t("services.detail.cil_a_cil.title"),
      desc: t("services.detail.cil_a_cil.desc"),
      inclusions: [
        t("services.detail.cil_a_cil.inc1"),
        t("services.detail.cil_a_cil.inc2"),
        t("services.detail.cil_a_cil.inc3"),
      ],
      price: "320 DH",
      priceInfo: t("services.detail.cil_a_cil.priceInfo"),
    },
    {
      id: "tous-les-jours",
      tagline: t("services.detail.tagline.tous_les_jours"),
      title: t("services.detail.tous_les_jours.title"),
      desc: t("services.detail.tous_les_jours.desc"),
      inclusions: [
        t("services.detail.tous_les_jours.inc1"),
        t("services.detail.tous_les_jours.inc2"),
        t("services.detail.tous_les_jours.inc3"),
      ],
      price: "500 DH",
      priceInfo: t("services.detail.tous_les_jours.priceInfo"),
    },
    {
      id: "express",
      tagline: t("services.detail.tagline.express"),
      title: t("services.detail.express.title"),
      desc: t("services.detail.express.desc"),
      inclusions: [
        t("services.detail.express.inc1"),
        t("services.detail.express.inc2"),
        t("services.detail.express.inc3"),
      ],
      price: "400 DH",
      priceInfo: t("services.detail.express.priceInfo"),
    },
  ];


  const faqs = [
    {
      question: t("services.faq.q1"),
      answer: t("services.faq.a1"),
    },
    {
      question: t("services.faq.q2"),
      answer: t("services.faq.a2"),
    },
    {
      question: t("services.faq.q3"),
      answer: t("services.faq.a3"),
    },
    {
      question: t("services.faq.q4"),
      answer: t("services.faq.a4"),
    },
  ];

  return (
    <main>
      {/* ========================================================================
           SERVICES HERO BANNER
           ======================================================================== */}
      <section className="services-hero watermark-bg">
        <div className="container">
          <RevealOnScroll className="reveal active">
            <span className="script-accent">{t("services.hero.tagline")}</span>
            <h1 className="hero-title" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              {t("services.hero.title")}
            </h1>
            <p className="hero-desc" style={{ maxWidth: "600px" }}>
              {t("services.hero.desc")}
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
            {services.map((service) => (
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
                  <span className="detail-price-title">{t("services.detail.price_label")}</span>
                  <span className="detail-price-value">{service.price}</span>
                  <span className="detail-price-info">{service.priceInfo}</span>
                  <Link href="/#reservation" className="btn btn-primary" style={{ width: "100%" }}>
                    {t("nav.cta")}
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
            <span className="script-accent">{t("services.faq.tagline")}</span>
            <h2 className="section-title">{t("services.faq.title")}</h2>
            <p className="section-subtitle">{t("services.faq.subtitle")}</p>
          </RevealOnScroll>

          <div className="faq-container">
            {faqs.map((faq, index) => {
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
