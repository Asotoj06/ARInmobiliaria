import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep text-bone pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Intro */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-serif tracking-widest text-gold font-bold inline-block mb-4">
            LUXURY<span className="text-bone font-light">ESTATES</span>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm">
            Elevando el estándar en bienes raíces. Propiedades exclusivas, servicio incomparable y resultados que superan expectativas.
          </p>
        </div>

        {/* SEO Local Links */}
        <div>
          <h4 className="font-serif text-gold text-lg mb-4">Explorar</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/propiedades?tipo=casa" className="hover:text-gold transition-colors">Casas en Venta en Zona Centro</Link></li>
            <li><Link href="/propiedades?tipo=departamento" className="hover:text-gold transition-colors">Departamentos de Lujo</Link></li>
            <li><Link href="/vende-tu-propiedad" className="hover:text-gold transition-colors">Vender Propiedad Rápido</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-serif text-gold text-lg mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400 mb-6">
            <li>contacto@luxuryestates.com</li>
            <li>+52 (55) 1234 5678</li>
          </ul>
          <div className="flex space-x-4 text-gold">
            {/* Social Icons Placeholder */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">IG</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">FB</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">LI</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Luxury Estates. Todos los derechos reservados. | <Link href="/privacidad" className="hover:text-gold">Aviso de Privacidad</Link></p>
      </div>
    </footer>
  );
}
