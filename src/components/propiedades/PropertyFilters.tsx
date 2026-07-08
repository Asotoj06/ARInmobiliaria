"use client";

import React from "react";

export interface FilterState {
  operation: string;
  location: string;
  type: string;
  bedrooms: string;
  maxPrice: number;
}

interface PropertyFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  locations: string[];
  types: string[];
  maxPossiblePrice: number;
}

export default function PropertyFilters({
  filters,
  setFilters,
  locations,
  types,
  maxPossiblePrice
}: PropertyFiltersProps) {

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }));
  };

  const formatPrice = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  };

  return (
    <div className="bg-white border border-gray-100 shadow-sm p-6 lg:sticky lg:top-[100px]">
      <h3 className="text-xl font-serif text-deep mb-6 uppercase tracking-widest border-b border-gray-100 pb-4">
        Filtros Avanzados
      </h3>

      <div className="space-y-6">
        {/* Operación */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Operación
          </label>
          <select
            name="operation"
            value={filters.operation}
            onChange={handleSelectChange}
            className="w-full bg-bone border border-gray-200 text-deep text-sm p-3 focus:outline-none focus:border-gold transition-colors"
          >
            <option value="Todas">Todas</option>
            <option value="Venta">En Venta</option>
            <option value="Renta">En Renta</option>
          </select>
        </div>

        {/* Ubicación */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Ubicación
          </label>
          <select
            name="location"
            value={filters.location}
            onChange={handleSelectChange}
            className="w-full bg-bone border border-gray-200 text-deep text-sm p-3 focus:outline-none focus:border-gold transition-colors"
          >
            <option value="Todas">Cualquier Ubicación</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Tipo de Propiedad */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Tipo de Propiedad
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleSelectChange}
            className="w-full bg-bone border border-gray-200 text-deep text-sm p-3 focus:outline-none focus:border-gold transition-colors"
          >
            <option value="Todos">Cualquier Tipo</option>
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Recámaras */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Recámaras
          </label>
          <div className="flex bg-bone border border-gray-200">
            {['Todas', '1+', '2+', '3+', '4+'].map(bed => (
              <button
                key={bed}
                onClick={() => setFilters(prev => ({ ...prev, bedrooms: bed }))}
                className={`flex-1 py-2 text-sm text-center transition-colors border-r border-gray-200 last:border-r-0 ${
                  filters.bedrooms === bed 
                    ? 'bg-deep text-white font-bold' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {bed === 'Todas' ? '...' : bed}
              </button>
            ))}
          </div>
        </div>

        {/* Rango de Precio */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
              Precio Máximo
            </label>
            <span className="text-gold font-bold text-sm">
              {formatPrice(filters.maxPrice)}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={maxPossiblePrice}
            step={maxPossiblePrice > 10000000 ? 500000 : 10000}
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>$0</span>
            <span>{formatPrice(maxPossiblePrice)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
          <button
            onClick={() => setFilters({
              operation: 'Todas',
              location: 'Todas',
              type: 'Todos',
              bedrooms: 'Todas',
              maxPrice: maxPossiblePrice
            })}
            className="w-full py-3 text-sm font-bold uppercase tracking-widest text-deep border border-deep hover:bg-deep hover:text-white transition-colors duration-300"
          >
            Limpiar Filtros
          </button>
        </div>

      </div>
    </div>
  );
}
