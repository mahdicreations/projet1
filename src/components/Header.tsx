"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
    { label: "Accueil", href: "/#accueil", sectionId: "accueil" },
    { label: "À Propos", href: "/#a-propos", sectionId: "a-propos" },
    { label: "Services & Tarifs", href: "/services", sectionId: "services" },
    { label: "Galerie", href: "/#galerie", sectionId: "galerie" },
    { label: "Avis", href: "/#temoignages", sectionId: "temoignages" },
    { label: "Réservation", href: "/#reservation", sectionId: "reservation" },
  ];

  // Logic to determine if a link is active
  const isActive = (itemHref: string) => {
    if (itemHref === "/services") {
      return pathname === "/services";
    }
    // On the homepage, let browser CSS active styles work or default to path
    return pathname === "/" && itemHref === "/#accueil";
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Link href="/#accueil" className="logo-wrap" aria-label="Sarahglam's Marrakech Accueil" onClick={closeMenu}>
            <img src="/assets/logo-clean.png" alt="Sarahglam's Logo" className="logo-img" />
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

          {/* Desktop Call to Action */}
          <div className="nav-cta">
            <Link href="/#reservation" className="btn btn-primary">
              Réserver
            </Link>
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
        <div className="mobile-nav-cta">
          <Link href="/#reservation" className="btn btn-primary" onClick={closeMenu}>
            Réserver un maquillage
          </Link>
        </div>
      </aside>
    </>
  );
}
