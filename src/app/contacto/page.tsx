export default function ContactoPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-4xl md:text-6xl font-serif text-white tracking-widest uppercase text-center px-4 drop-shadow-lg">
          Contacto
        </h1>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-deep font-bold mb-6 uppercase leading-tight">
                Estamos a tu disposición.
              </h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ya sea que estés buscando tu próxima residencia de lujo o desees poner en venta tu propiedad, 
                nuestro equipo de asesores expertos está listo para guiarte en cada paso del camino.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-4 rounded-full text-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-deep font-bold mb-2 uppercase">Oficinas Corporativas</h3>
                  <p className="text-gray-600 text-lg">Av. Paseo de la Reforma 123,<br/>Ciudad de México, CDMX 01000</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-4 rounded-full text-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-deep font-bold mb-2 uppercase">Teléfono</h3>
                  <p className="text-gray-600 text-lg">+52 (55) 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-4 rounded-full text-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-deep font-bold mb-2 uppercase">Correo Electrónico</h3>
                  <p className="text-gray-600 text-lg">contacto@arinmobiliaria.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 md:p-12 rounded-2xl shadow-2xl relative">
            <h3 className="text-2xl font-serif text-gold mb-8 text-center uppercase tracking-wide">Envíanos un Mensaje</h3>
            <form className="space-y-8">
              <div>
                <input type="text" className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder-gray-400" placeholder="Tu Nombre Completo" />
              </div>
              <div>
                <input type="email" className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder-gray-400" placeholder="Tu Correo Electrónico" />
              </div>
              <div>
                <textarea rows={5} className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder-gray-400 resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="button" className="w-full bg-gold text-deep font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-all uppercase tracking-wide mt-4">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
