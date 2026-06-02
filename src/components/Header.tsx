"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const menuItems = [
    { label: t("nav.home"), href: "/#accueil", sectionId: "accueil" },
    { label: t("nav.about"), href: "/#a-propos", sectionId: "a-propos" },
    { label: t("nav.services"), href: "/services", sectionId: "services" },
    { label: t("nav.gallery"), href: "/#galerie", sectionId: "galerie" },
    { label: t("nav.testimonials"), href: "/#temoignages", sectionId: "temoignages" },
    { label: t("nav.booking"), href: "/#reservation", sectionId: "reservation" },
  ];

  // Logic to determine if a link is active
  const isActive = (itemHref: string) => {
    if (itemHref === "/services") {
      return pathname === "/services";
    }
    return pathname === "/" && itemHref === "/#accueil";
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Link href="/#accueil" className="logo-wrap" aria-label="Sarahglam's Marrakech Accueil" onClick={closeMenu}>
            <Image
              src="/assets/logo-clean.png"
              alt="Sarahglam's Logo"
              className="logo-img"
              width={225}
              height={90}
              style={{ objectFit: "contain", height: "auto" }}
            />
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav aria-label="Navigation principale">
            <ul className="nav-menu">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Call to Action & Language Switcher Group */}
          <div className="nav-cta-group">
            <div className="lang-switcher" role="navigation" aria-label="Sélecteur de langue">
              <button 
                className={`lang-btn ${locale === "fr" ? "active" : ""}`}
                onClick={() => setLocale("fr")}
                title="Français"
                aria-label="Passer en Français"
              >
                <svg className="flag-svg" viewBox="0 0 3 2" width="18" height="12">
                  <rect width="1" height="2" fill="#002395"/>
                  <rect x="1" width="1" height="2" fill="#ffffff"/>
                  <rect x="2" width="1" height="2" fill="#ED2939"/>
                </svg>
              </button>
              
              <button 
                className={`lang-btn ${locale === "en" ? "active" : ""}`}
                onClick={() => setLocale("en")}
                title="English"
                aria-label="Switch to English"
              >
                <svg className="flag-svg" viewBox="0 0 50 30" width="18" height="11">
                  <rect width="50" height="30" fill="#012169"/>
                  <path d="M0,0 L50,30 M0,30 L50,0" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L50,30 M0,30 L50,0" stroke="#C8102E" strokeWidth="2"/>
                  <path d="M25,0 L25,30 M0,15 L50,15" stroke="#fff" strokeWidth="10"/>
                  <path d="M25,0 L25,30 M0,15 L50,15" stroke="#C8102E" strokeWidth="6"/>
                </svg>
              </button>

              <button 
                className={`lang-btn ${locale === "ar" ? "active" : ""}`}
                onClick={() => setLocale("ar")}
                title="العربية"
                aria-label="تغيير اللغة إلى العربية"
              >
                <svg className="flag-svg" viewBox="0 0 30 20" width="18" height="12">
                  <rect width="30" height="20" fill="#006C35"/>
                  <circle cx="15" cy="10" r="5" fill="none" stroke="#E5A93B" strokeWidth="0.8" strokeDasharray="1 0.8"/>
                  <path d="M13,8 A3,3 0 1,0 17.5,12.5 A2.6,2.6 0 1,1 13,8" fill="#ffffff"/>
                </svg>
              </button>
            </div>

            <div className="nav-cta">
              <Link href="/#reservation" className="btn btn-primary">
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className={`burger-menu ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={isOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      <aside className={`mobile-nav ${isOpen ? "open" : ""}`} aria-label="Navigation mobile">
        <nav>
          <ul className="mobile-nav-list">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Language Switcher */}
        <div className="mobile-lang-switcher">
          <button 
            className={`mobile-lang-btn ${locale === "fr" ? "active" : ""}`}
            onClick={() => { setLocale("fr"); closeMenu(); }}
            aria-label="Passer en Français"
          >
            <svg className="flag-svg" viewBox="0 0 3 2" width="20" height="13">
              <rect width="1" height="2" fill="#002395"/>
              <rect x="1" width="1" height="2" fill="#ffffff"/>
              <rect x="2" width="1" height="2" fill="#ED2939"/>
            </svg>
            <span>Français</span>
          </button>
          <button 
            className={`mobile-lang-btn ${locale === "en" ? "active" : ""}`}
            onClick={() => { setLocale("en"); closeMenu(); }}
            aria-label="Switch to English"
          >
            <svg className="flag-svg" viewBox="0 0 50 30" width="20" height="12">
              <rect width="50" height="30" fill="#012169"/>
              <path d="M0,0 L50,30 M0,30 L50,0" stroke="#fff" strokeWidth="6"/>
              <path d="M0,0 L50,30 M0,30 L50,0" stroke="#C8102E" strokeWidth="2"/>
              <path d="M25,0 L25,30 M0,15 L50,15" stroke="#fff" strokeWidth="10"/>
              <path d="M25,0 L25,30 M0,15 L50,15" stroke="#C8102E" strokeWidth="6"/>
            </svg>
            <span>English</span>
          </button>
          <button 
            className={`mobile-lang-btn ${locale === "ar" ? "active" : ""}`}
            onClick={() => { setLocale("ar"); closeMenu(); }}
            aria-label="تغيير اللغة إلى العربية"
          >
            <svg className="flag-svg" viewBox="0 0 30 20" width="20" height="13">
              <rect width="30" height="20" fill="#006C35"/>
              <circle cx="15" cy="10" r="5" fill="none" stroke="#E5A93B" strokeWidth="0.8" strokeDasharray="1 0.8"/>
              <path d="M13,8 A3,3 0 1,0 17.5,12.5 A2.6,2.6 0 1,1 13,8" fill="#ffffff"/>
            </svg>
            <span>العربية</span>
          </button>
        </div>

        <div className="mobile-nav-cta">
          <Link href="/#reservation" className="btn btn-primary" onClick={closeMenu}>
            {t("nav.cta_mobile")}
          </Link>
        </div>
      </aside>
    </>
  );
}
