import Link from "next/link";
import ReviewCarousel from "@/components/ui/ReviewCarousel";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-deep text-bone overflow-hidden">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Encuentra la Residencia de tus <span className="text-gold italic">Sueños</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Propiedades exclusivas seleccionadas para quienes buscan la máxima distinción y estilo de vida.
          </p>
          
          {/* Main Search Bar Placeholder */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-sm flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="¿Dónde quieres vivir?" 
              className="flex-grow px-4 py-3 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <select className="px-4 py-3 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-gold border-l md:border-l-gray-300">
              <option>Venta</option>
              <option>Renta</option>
            </select>
            <button className="bg-gold text-deep font-bold px-8 py-3 hover:bg-white transition-colors uppercase tracking-widest">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      <section className="py-24 bg-bone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-deep mb-4">Propiedades Destacadas</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          {/* Grid of properties (Placeholders) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white shadow-lg group overflow-hidden cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` }}
                  />
                  <div className="absolute top-4 left-4 bg-deep text-bone px-3 py-1 text-xs uppercase tracking-widest font-bold">
                    En Venta
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gold font-bold text-2xl mb-2">$1,250,000 USD</div>
                  <h3 className="text-xl font-serif text-deep mb-2 line-clamp-1">Villa Contemporánea en la Costa</h3>
                  <p className="text-gray-500 text-sm mb-4">📍 Zona Diamante, Ciudad</p>
                  <div className="flex justify-between border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <span>🛏️ 4 Rec</span>
                    <span>🛁 4.5 Baños</span>
                    <span>📐 450 m²</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/propiedades" className="inline-block border border-deep text-deep px-8 py-3 uppercase tracking-widest text-sm hover:bg-deep hover:text-bone transition-colors">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* SELLERS CTA SECTION */}
      <section className="py-24 bg-deep text-bone relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Maximiza el valor de tu <span className="text-gold">propiedad</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light">
              Nuestro equipo de expertos utiliza estrategias de marketing de vanguardia y una red exclusiva de clientes para vender tu propiedad en las mejores condiciones.
            </p>
            <Link href="/vende-tu-propiedad" className="inline-block bg-gold text-deep font-bold px-8 py-4 hover:bg-white transition-colors uppercase tracking-widest text-sm">
              Valora tu inmueble gratis
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Asesor Inmobiliario" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-bone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-deep mb-4">Lo que dicen nuestros clientes</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <ReviewCarousel />
        </div>
      </section>
    </div>
  );
}
