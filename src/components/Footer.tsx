"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src="/assets/logo-clean.png" alt="Sarahglam's Marrakech" className="footer-logo" />
          <span className="footer-brand-title">Sarahglam's</span>
          <span className="footer-brand-tagline">{t("footer.brand.tagline")}</span>
        </div>

        <div className="footer-links">
          <h4>{t("footer.nav_title")}</h4>
          <ul className="footer-nav">
            <li><Link href="/#accueil">{t("nav.home")}</Link></li>
            <li><Link href="/#a-propos">{t("nav.about")}</Link></li>
            <li><Link href="/services">{t("nav.services")}</Link></li>
            <li><Link href="/#galerie">{t("nav.gallery")}</Link></li>
            <li><Link href="/#temoignages">{t("nav.testimonials")}</Link></li>
            <li><Link href="/#reservation">{t("nav.booking")}</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{t("footer.contact_title")}</h4>
          <ul className="footer-contact-list">
            <li><strong>{t("footer.contact.whatsapp")}</strong> +212 6 12 34 56 78</li>
            <li><strong>{t("footer.contact.email")}</strong> contact@sarahglams.com</li>
            <li><strong>{t("footer.contact.address")}</strong> {t("booking.address_text")}</li>
            <li><strong>{t("footer.contact.sector")}</strong> {t("footer.contact.sector_val")}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sarahglam&apos;s Marrakech. {t("footer.copy")}</p>
        <div className="footer-bottom-links">
          <Link href="#">{t("footer.bottom.legal")}</Link>
          <Link href="#">{t("footer.bottom.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}
