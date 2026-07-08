export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  operation: "Venta" | "Renta";
  type: "Casa" | "Departamento" | "Edificio" | "Terreno" | "Penthouse";
  bedrooms: number;
  bathrooms: number;
  area: number; // in m2
  imageUrl: string;
  isNew: boolean;
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Residencia de Autor La Primavera",
    location: "Culiacán, La Primavera",
    price: 14500000,
    currency: "MXN",
    operation: "Venta",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 450,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    isNew: true,
  },
  {
    id: "2",
    title: "Penthouse con Vista al Mar",
    location: "Mazatlán, Zona Dorada",
    price: 45000,
    currency: "MXN",
    operation: "Renta",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    isNew: false,
  },
  {
    id: "3",
    title: "Torre Comercial Premium",
    location: "Culiacán, Tres Ríos",
    price: 270000000,
    currency: "MXN",
    operation: "Venta",
    type: "Edificio",
    bedrooms: 0,
    bathrooms: 10,
    area: 15000,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    isNew: true,
  },
  {
    id: "4",
    title: "Departamento Luxury Centro",
    location: "Monterrey, San Pedro",
    price: 12500000,
    currency: "MXN",
    operation: "Venta",
    type: "Departamento",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 180,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    isNew: false,
  },
  {
    id: "5",
    title: "Casa de Campo Exclusiva",
    location: "Valle de Bravo, Estado de México",
    price: 85000,
    currency: "MXN",
    operation: "Renta",
    type: "Casa",
    bedrooms: 5,
    bathrooms: 5,
    area: 800,
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
    isNew: false,
  },
  {
    id: "6",
    title: "Terreno Residencial Elite",
    location: "Los Cabos, Pedregal",
    price: 5500000,
    currency: "USD",
    operation: "Venta",
    type: "Terreno",
    bedrooms: 0,
    bathrooms: 0,
    area: 2500,
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    isNew: true,
  }
];
