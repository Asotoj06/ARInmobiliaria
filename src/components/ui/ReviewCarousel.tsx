"use client";

import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Carolina Mendoza",
    role: "Compradora",
    text: "El servicio fue impecable. Encontraron exactamente el penthouse que buscaba en menos de una semana. Totalmente recomendados.",
    stars: 5,
  },
  {
    id: 2,
    name: "Roberto Garza",
    role: "Vendedor",
    text: "Vendieron mi casa en tiempo récord y al precio justo. La presentación y marketing de la propiedad fueron de otro nivel.",
    stars: 5,
  },
  {
    id: 3,
    name: "Familia Torres",
    role: "Compradores",
    text: "Una experiencia sumamente profesional y transparente. Nos acompañaron en cada paso del proceso de compra de nuestra nueva casa.",
    stars: 5,
  }
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-8 bg-white shadow-xl rounded-sm">
      {/* Decorative quotes */}
      <div className="absolute top-4 left-4 text-gold opacity-30 text-6xl font-serif">"</div>
      
      <div className="text-center transition-opacity duration-500 min-h-[150px] flex flex-col justify-center">
        {/* Stars */}
        <div className="flex justify-center space-x-1 mb-6 text-gold">
          {[...Array(reviews[currentIndex].stars)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Text */}
        <p className="text-xl md:text-2xl font-serif text-deep mb-8 italic">
          {reviews[currentIndex].text}
        </p>
        
        {/* Author */}
        <div>
          <h4 className="font-bold text-deep uppercase tracking-wider">{reviews[currentIndex].name}</h4>
          <span className="text-sm text-gray-500 uppercase tracking-widest">{reviews[currentIndex].role}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center -ml-4 md:-ml-12">
        <button onClick={prevReview} className="bg-bone text-deep p-3 rounded-full hover:bg-gold hover:text-white transition-colors shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center -mr-4 md:-mr-12">
        <button onClick={nextReview} className="bg-bone text-deep p-3 rounded-full hover:bg-gold hover:text-white transition-colors shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
