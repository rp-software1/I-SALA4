# Sistema de Restaurante - RPSoft Bootcamp

## Proyectos

### restaurante-nextjs (produccion)
Stack: Next.js 15 - TypeScript - Tailwind CSS - App Router
Backend: NestJS en localhost:3001 (o URL de produccion)

#### Instalacion
cd restaurante-nextjs
npm install
cp .env.local.example .env.local
npm run dev

#### Variables de entorno
NEXT_PUBLIC_API_URL=http://localhost:3001

#### Rutas
- /        -> Home
- /mesas   -> Lista de mesas y gestion de estados
- /menu    -> Menu de platos disponibles
- /carrito -> Carrito de comandas
- /comandas -> Panel de gestion de comandas (staff)
- /mesa/[id] -> Detalle y cambio de estado de una mesa

## Equipo
I-SALA1 - RPSoft Bootcamp
