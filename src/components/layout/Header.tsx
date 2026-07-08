"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrolled(scrollPos > 20);
    };

    handleScroll(); // Initialize on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass text-bone h-[72px] transition-all duration-300">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative h-full flex items-center" style={{ minWidth: isScrolled ? 'auto' : '8rem' }}>
          {isScrolled ? (
            <span className="text-xl md:text-2xl font-serif tracking-widest text-gold font-bold animate-in fade-in duration-300">
              AR<span className="text-bone font-light">Inmobiliaria</span>
            </span>
          ) : (
            <Image 
              src={logo} 
              alt="ARInmobiliaria Logo" 
              width={340} 
              height={340} 
              className="absolute -top-10 -left-8 md:-top-6 md:-left-12 max-w-none object-contain drop-shadow-xl animate-in fade-in duration-300" 
            />
          )}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-sm uppercase tracking-wide">
          <Link href="/propiedades" className="hover:text-gold transition-colors duration-300">
            Propiedades
          </Link>
          <Link href="/nosotros" className="hover:text-gold transition-colors duration-300">
            Nosotros
          </Link>
          <Link href="/blog" className="hover:text-gold transition-colors duration-300">
            Blog
          </Link>
          <Link href="/contacto" className="hover:text-gold transition-colors duration-300">
            Contacto
          </Link>
          <Link
            href="/vende-tu-propiedad"
            className="bg-gold text-deep px-5 py-2 font-medium hover:bg-white transition-colors duration-300"
          >
            Vende tu Propiedad
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-deep/95 backdrop-blur-md shadow-xl border-t border-gray-800 flex flex-col items-center py-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
          <Link href="/propiedades" onClick={() => setIsMobileMenuOpen(false)} className="text-bone hover:text-gold transition-colors text-lg uppercase tracking-wide">
            Propiedades
          </Link>
          <Link href="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-bone hover:text-gold transition-colors text-lg uppercase tracking-wide">
            Nosotros
          </Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-bone hover:text-gold transition-colors text-lg uppercase tracking-wide">
            Blog
          </Link>
          <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-bone hover:text-gold transition-colors text-lg uppercase tracking-wide">
            Contacto
          </Link>
          <Link
            href="/vende-tu-propiedad"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gold text-deep px-6 py-3 font-medium hover:bg-white transition-colors text-lg"
          >
            Vende tu Propiedad
          </Link>
        </div>
      )}
    </header>
  );
}
