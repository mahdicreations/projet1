import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src="/assets/logo-clean.png" alt="Sarahglam's Marrakech" className="footer-logo" />
          <span className="footer-brand-title">Sarahglam's</span>
          <span className="footer-brand-tagline">Maquillage à Domicile Marrakech</span>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul className="footer-nav">
            <li><Link href="/#accueil">Accueil</Link></li>
            <li><Link href="/#a-propos">À Propos</Link></li>
            <li><Link href="/services">Services & Tarifs</Link></li>
            <li><Link href="/#galerie">Galerie</Link></li>
            <li><Link href="/#temoignages">Témoignages</Link></li>
            <li><Link href="/#reservation">Réservation</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Direct</h4>
          <ul className="footer-contact-list">
            <li><strong>WhatsApp :</strong> +212 6 12 34 56 78</li>
            <li><strong>E-mail :</strong> contact@sarahglams.com</li>
            <li><strong>Adresse :</strong> Gueliz, Marrakech, Maroc</li>
            <li><strong>Secteur :</strong> Gueliz, Hivernage, Palmeraie, Route de l'Ourika & Agafay</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sarahglam&apos;s Marrakech. Tous droits réservés.</p>
        <div className="footer-bottom-links">
          <Link href="#">Mentions Légales</Link>
          <Link href="#">Politique de Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
