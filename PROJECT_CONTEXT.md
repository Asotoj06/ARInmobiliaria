# Contexto del Proyecto: AR Inmobiliaria (Plataforma de Lujo)

Este documento contiene todo el contexto arquitectónico, visual y técnico del proyecto para que cualquier agente IA pueda retomar el desarrollo de forma fluida.

## 📌 Objetivo del Proyecto
Desarrollar una plataforma inmobiliaria digital de alta gama (multipage application). El enfoque es doble: **compradores** (catálogo de propiedades con filtros) y **vendedores** (captación de leads para valorar inmuebles). Está profundamente enfocada en **SEO Técnico** y optimizada para integrarse con redes sociales (Open Graph).

## 🛠️ Stack Tecnológico
- **Framework:** Next.js (App Router, versión 16+).
- **Estilos:** Tailwind CSS v4 (Configurado vía variables CSS en `src/app/globals.css`, NO usa `tailwind.config.js`).
- **Paquetería:** `pnpm` estricto (Evitar usar `npm`).
- **Base de Datos / Backend:** Supabase (PostgreSQL).
- **Despliegue:** Vercel (vía repositorio de GitHub).

## 🎨 Sistema de Diseño (Luxury Minimalist)
- **Colores (Definidos en `globals.css`):**
  - Fondo (`--color-bone`): `#F7F4EF`
  - Textos e interfaces pesadas (`--color-deep`): `#111111`
  - Acentos y CTAs (`--color-gold`): `#C5A059`
- **Tipografía (Google Fonts vía `next/font/google`):**
  - Títulos y destacados: `Playfair Display` (Serif).
  - Texto base y formularios: `Inter` (Sans-serif).

## ✅ Estado Actual (Fase 1 Completada)
1. **Configuración Base:** Proyecto inicializado correctamente en `D:\Proyectos\ARInmobiliaria\ARInmobiliaria`. Dependencias de Supabase (`@supabase/supabase-js`, `@supabase/ssr`) ya instaladas.
2. **Layout y Navegación:** `layout.tsx` global configurado con metadatos SEO. Componentes `Header.tsx` (glassmorphism) y `Footer.tsx` funcionales.
3. **Páginas Creadas:**
   - `/` (Home): Ensamblada con Hero, Destacados, CTA de Vendedores y un `ReviewCarousel.tsx` (interactivo con React state).
   - Páginas placeholder creadas y enlazadas: `/propiedades`, `/vende-tu-propiedad`, `/nosotros`, `/blog`, `/contacto`.
4. **Base de Datos:** El archivo `supabase_schema.sql` existe en la raíz del proyecto. Contiene las tablas de `propiedades`, `resenas` y `leads_vendedores` con sus reglas de seguridad (RLS).

## 🚀 Próximos Pasos (Pendientes)
El siguiente agente debe enfocarse en:
1. **Conectar Supabase:** Crear el cliente en `src/lib/supabase` usando las credenciales del usuario, o configurar migraciones locales.
2. **Página de Catálogo (`/propiedades`):** Desarrollar un grid interactivo que consuma propiedades de Supabase, incluyendo una barra de filtros avanzados (compra/renta, precio, etc.).
3. **Página de Captación (`/vende-tu-propiedad`):** Crear el formulario interactivo para que los vendedores dejen sus datos, y conectarlo a la tabla `leads_vendedores` de Supabase.
4. **Diseño Frontend:** Terminar de armar visualmente las páginas restantes (Nosotros, Contacto, Blog).

> [!NOTE]
> **Recordatorio para el próximo agente:** Respeta en todo momento la paleta de colores y asegúrate de mantener el diseño premium ("Luxury Minimalist"). Todas las modificaciones deben hacerse a través de **pnpm**.
