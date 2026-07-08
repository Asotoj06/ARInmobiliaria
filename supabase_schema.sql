-- =========================================================================
-- PLATAFORMA INMOBILIARIA - ESQUEMA DE BASE DE DATOS (SUPABASE / POSTGRESQL)
-- =========================================================================

-- Habilitar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabla de Propiedades
CREATE TABLE IF NOT EXISTS public.propiedades (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(12, 2) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    zona VARCHAR(100),
    tipo VARCHAR(50) CHECK (tipo IN ('casa', 'departamento', 'terreno', 'comercial')),
    estado VARCHAR(50) CHECK (estado IN ('venta', 'renta')),
    imagenes TEXT[] DEFAULT '{}',
    recamaras INTEGER DEFAULT 0,
    banos NUMERIC(3, 1) DEFAULT 0, -- Permite medios baños (ej. 2.5)
    metros_cuadrados NUMERIC(10, 2),
    destacado BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla de Reseñas
CREATE TABLE IF NOT EXISTS public.resenas (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    nombre_cliente VARCHAR(150) NOT NULL,
    tipo_cliente VARCHAR(50) CHECK (tipo_cliente IN ('comprador', 'vendedor', 'arrendatario', 'arrendador')),
    texto_resena TEXT NOT NULL,
    estrellas INTEGER CHECK (estrellas >= 1 AND estrellas <= 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabla de Leads de Vendedores (Captación)
CREATE TABLE IF NOT EXISTS public.leads_vendedores (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    correo VARCHAR(150),
    direccion_propiedad TEXT NOT NULL,
    valor_estimado_usuario NUMERIC(12, 2),
    estatus VARCHAR(50) DEFAULT 'nuevo' CHECK (estatus IN ('nuevo', 'contactado', 'en_proceso', 'cerrado', 'descartado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Políticas de Seguridad de Fila (Row Level Security - RLS) básicas para lectura pública
ALTER TABLE public.propiedades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resenas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads_vendedores ENABLE ROW LEVEL SECURITY;

-- Permitir a cualquier usuario (incluso anónimos) LEER las propiedades y reseñas
CREATE POLICY "Permitir lectura publica de propiedades" ON public.propiedades FOR SELECT USING (true);
CREATE POLICY "Permitir lectura publica de resenas" ON public.resenas FOR SELECT USING (true);

-- Permitir a cualquier usuario anónimo INSERTAR leads, pero NO leerlos
CREATE POLICY "Permitir insercion anonima de leads" ON public.leads_vendedores FOR INSERT WITH CHECK (true);
