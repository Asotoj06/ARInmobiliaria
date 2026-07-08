export default function VendedoresPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-[url('https://images.unsplash.com/photo-1628611225249-6c11760eba71?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-serif text-white tracking-widest uppercase text-center px-4 drop-shadow-lg">
          Vende tu Propiedad
        </h1>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Text Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-deep font-bold mb-6 uppercase leading-tight">
              Maximiza el valor de tu patrimonio.
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Confía tu propiedad a expertos. En AR Inmobiliaria analizamos el mercado para asegurar que obtengas el mejor rendimiento. 
              Te conectamos con la cartera de clientes más exclusiva y manejamos todo el proceso con absoluta discreción y profesionalismo.
            </p>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-center gap-4 text-lg">
                <div className="bg-gold/20 p-2 rounded-full text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                Valuación precisa del mercado
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="bg-gold/20 p-2 rounded-full text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                Marketing inmobiliario de alto nivel
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="bg-gold/20 p-2 rounded-full text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                Cartera de inversionistas premium
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8 md:p-12 shadow-2xl relative">
            <h3 className="text-2xl font-serif text-gold mb-8 text-center uppercase tracking-wide">Solicita una Valuación</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Teléfono</label>
                  <input type="tel" className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Ej. 55 1234 5678" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="tu@correo.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Dirección de la Propiedad</label>
                <input type="text" className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Calle, Colonia, Ciudad" />
              </div>
              <button type="button" className="w-full bg-gold text-deep font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-all mt-6 uppercase tracking-wide">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
