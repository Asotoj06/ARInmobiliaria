export default function BlogPage() {
  const articles = [
    { title: "Tendencias del Mercado Inmobiliario de Lujo en 2026", date: "15 Oct 2026", category: "Mercado", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { title: "Cómo Aumentar el Valor de tu Propiedad Antes de Vender", date: "02 Sep 2026", category: "Consejos", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" },
    { title: "Las 5 Zonas de Mayor Plusvalía para Invertir", date: "28 Ago 2026", category: "Inversión", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-serif text-white tracking-widest uppercase text-center px-4 drop-shadow-lg">
          Blog Inmobiliario
        </h1>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-deep font-bold mb-6 uppercase">Noticias & Tendencias</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Mantente informado con los mejores consejos, análisis de mercado y tendencias exclusivas 
            del sector inmobiliario de lujo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {articles.map((article, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white flex flex-col group cursor-pointer">
              <div 
                className="h-64 bg-gray-200 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${article.img})` }}
              ></div>
              <div className="p-8 flex flex-col flex-grow relative bg-white z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-gold uppercase tracking-widest">{article.category}</span>
                  <span className="text-xs text-gray-500 font-medium">{article.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-deep mb-6 leading-snug group-hover:text-gold transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-deep group-hover:text-gold transition-colors inline-flex items-center gap-2 uppercase tracking-wide">
                    Leer artículo <span className="text-lg">&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
