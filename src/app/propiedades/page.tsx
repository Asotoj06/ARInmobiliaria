"use client";

import { useState, useMemo } from "react";
import { mockProperties } from "@/lib/mockProperties";
import PropertyCard from "@/components/propiedades/PropertyCard";
import PropertyFilters, { FilterState } from "@/components/propiedades/PropertyFilters";

export default function PropiedadesPage() {
  const maxPossiblePrice = Math.max(...mockProperties.map(p => p.price));
  
  const [filters, setFilters] = useState<FilterState>({
    operation: 'Todas',
    location: 'Todas',
    type: 'Todos',
    bedrooms: 'Todas',
    maxPrice: maxPossiblePrice
  });

  const [sortBy, setSortBy] = useState("Mas Recientes");

  const locations = Array.from(new Set(mockProperties.map(p => p.location.split(',')[0].trim())));
  const types = Array.from(new Set(mockProperties.map(p => p.type)));

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(p => {
      // Operation
      if (filters.operation !== 'Todas' && p.operation !== filters.operation) return false;
      // Location (matching the city part)
      if (filters.location !== 'Todas' && !p.location.includes(filters.location)) return false;
      // Type
      if (filters.type !== 'Todos' && p.type !== filters.type) return false;
      // Bedrooms
      if (filters.bedrooms !== 'Todas') {
        const beds = parseInt(filters.bedrooms);
        if (p.bedrooms < beds) return false;
      }
      // Price
      if (p.price > filters.maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "Menor Precio") return a.price - b.price;
      if (sortBy === "Mayor Precio") return b.price - a.price;
      return 0; // Default or Mas Recientes (mock data has no date, so keep original order)
    });
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen pb-24">
      {/* Header Banner */}
      <div className="relative w-full h-[40vh] bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-widest uppercase drop-shadow-lg mb-4">
            Catálogo Exclusivo
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explora nuestra selecta colección de propiedades y desarrollos de alto nivel.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <PropertyFilters 
              filters={filters} 
              setFilters={setFilters} 
              locations={locations}
              types={types}
              maxPossiblePrice={maxPossiblePrice}
            />
          </div>

          {/* Results Area */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-serif text-deep mb-4 md:mb-0">
                Resultados <span className="text-gray-400 text-base font-sans font-normal ml-2">({filteredProperties.length} Propiedades)</span>
              </h2>
              
              <div className="flex items-center gap-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-sm text-gray-600 focus:outline-none cursor-pointer hover:text-gold transition-colors"
                >
                  <option value="Mas Recientes">Más Recientes</option>
                  <option value="Menor Precio">Menor Precio</option>
                  <option value="Mayor Precio">Mayor Precio</option>
                </select>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-bone/30 border border-gray-100">
                <h3 className="text-xl font-serif text-deep mb-2">No se encontraron propiedades</h3>
                <p className="text-gray-500">Intenta ajustar los filtros para ver más resultados.</p>
                <button 
                  onClick={() => setFilters({
                    operation: 'Todas',
                    location: 'Todas',
                    type: 'Todos',
                    bedrooms: 'Todas',
                    maxPrice: maxPossiblePrice
                  })}
                  className="mt-6 px-6 py-2 bg-gold text-white uppercase tracking-widest text-sm font-bold hover:bg-deep transition-colors"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
