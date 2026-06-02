import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap", // Prevent render-blocking FOIT
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap", // Prevent render-blocking FOIT
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap", // Prevent render-blocking FOIT
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarahglams.com"),
  title: "Sarahglam's | Maquillage à Domicile Marrakech | Prestige & Soft Glam",
  description: "Sublimez votre éclat avec Sarahglam's, spécialiste du maquillage à domicile à Marrakech (Gueliz, Hivernage, Palmeraie). Maquilleuse professionnelle de prestige pour mariages, fiançailles, soirées et shootings.",
  keywords: [
    "maquillage a domicile marrakech",
    "maquilleuse marrakech",
    "maquilleuse gueliz",
    "sarahglams marrakech",
    "maquillage mariage marrakech",
    "soft glam marrakech",
    "mise en beaute marrakech",
    "makeup artist marrakech"
  ],
  authors: [{ name: "Sarahglam's Marrakech" }],
  openGraph: {
    type: "website",
    title: "Sarahglam's | Maquillage à Domicile Marrakech",
    description: "Prestation de maquillage professionnel haut de gamme à domicile à Marrakech (Gueliz & environs). Spécialiste mariées et événements de luxe.",
    images: ["/assets/hero-makeup.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarahglam's | Maquillage à Domicile Marrakech",
    description: "Mise en beauté de luxe à domicile à Marrakech pour mariées, shootings et soirées.",
    images: ["/assets/hero-makeup.png"],
  },
  icons: {
    icon: "/assets/logo-clean.png",
  },
};

// Proper viewport configuration for mobile — affects CLS and mobile scoring
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0a00" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${cormorant.variable} ${alexBrush.variable}`}
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
