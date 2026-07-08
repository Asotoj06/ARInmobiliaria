import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

// Configure Global Metadata and Open Graph
export const metadata: Metadata = {
  title: {
    default: "ARInmobiliaria | Propiedades Exclusivas",
    template: "%s | ARInmobiliaria",
  },
  description: "Descubre las propiedades más exclusivas y de alta gama en tu zona. Compra, renta o vende tu inmueble con expertos.",
  openGraph: {
    title: "ARInmobiliaria | Propiedades Exclusivas",
    description: "La plataforma líder en bienes raíces de lujo. Encuentra tu próxima propiedad soñada.",
    url: "https://arinmobiliaria.com",
    siteName: "ARInmobiliaria",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ARInmobiliaria - Inicio",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARInmobiliaria",
    description: "Propiedades exclusivas a tu alcance.",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col pt-[72px]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
