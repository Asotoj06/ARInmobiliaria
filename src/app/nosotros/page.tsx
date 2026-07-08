export default function NosotrosPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl md:text-7xl font-serif text-white tracking-widest uppercase text-center px-4 drop-shadow-lg">
          Nosotros
        </h1>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side: About */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-deep font-bold mb-6 uppercase leading-tight">
              AR Inmobiliaria es una agencia diferente.
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Somos una agencia boutique especializada en propiedades de lujo y alto valor. En AR Inmobiliaria, 
              nos dedicamos a conectar a nuestros clientes con residencias excepcionales que se adaptan a su 
              estilo de vida.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nuestro enfoque es brindar un servicio personalizado, discreto y de la más alta calidad, 
              asegurando que cada transacción sea una experiencia inigualable y libre de estrés.
            </p>
          </div>

          {/* Right Side: Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-12 pt-4">
            <div>
              <div className="text-gold mb-6">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-3 4H2v2h12v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-deep font-bold uppercase mb-4">Misión</h3>
              <div className="w-8 h-0.5 bg-gold mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Elevar el estándar del servicio inmobiliario, ofreciendo una asesoría integral y transparente 
                que garantice la satisfacción total de nuestros clientes en la búsqueda o venta de su patrimonio.
              </p>
            </div>

            <div>
              <div className="text-gold mb-6">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-deep font-bold uppercase mb-4">Visión</h3>
              <div className="w-8 h-0.5 bg-gold mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Ser reconocidos como la firma inmobiliaria líder en el mercado de lujo, distinguiéndonos por 
                nuestra exclusividad, innovación y compromiso inquebrantable con la excelencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
