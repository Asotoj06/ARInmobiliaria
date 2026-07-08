import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass text-bone">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif tracking-widest text-gold font-bold">
          LUXURY<span className="text-bone font-light">ESTATES</span>
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

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-gold focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
