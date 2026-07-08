import Image from "next/image";
import { Property } from "@/lib/mockProperties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="group bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Overlay subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-4 py-1 text-xs font-bold tracking-wider uppercase text-white ${property.operation === 'Venta' ? 'bg-deep' : 'bg-gold'}`}>
            EN {property.operation}
          </span>
          {property.isNew && (
            <span className="px-4 py-1 text-xs font-bold tracking-wider uppercase bg-bone text-deep">
              NUEVO
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <p className="text-2xl font-bold text-gold mb-2">
            {formattedPrice} <span className="text-sm font-normal text-gray-500">{property.operation === 'Renta' ? '/ Mes' : ''}</span>
          </p>
          <h3 className="text-xl font-serif text-deep mb-2 line-clamp-2 leading-snug group-hover:text-gold transition-colors duration-300">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Features Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-gray-600 text-sm">
          {property.bedrooms > 0 ? (
            <div className="flex items-center" title="Recámaras">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.bedrooms}</span>
            </div>
          ) : (
            <div className="text-xs text-gray-400 uppercase tracking-widest">{property.type}</div>
          )}

          {property.bathrooms > 0 && (
            <div className="flex items-center" title="Baños">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{property.bathrooms}</span>
            </div>
          )}

          <div className="flex items-center" title="Área">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
