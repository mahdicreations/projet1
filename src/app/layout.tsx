import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
