import type { Metadata } from 'next';
import type { Plato } from '../../src/types';
import { getPlatos } from '../../src/services/api';
import PlatoCard from './PlatoCard';

export const metadata: Metadata = {
  description: 'Menú completo del restaurante con platos disponibles y precios.',
}

export default async function MenuPage() {
  const platos: Plato[] = await getPlatos();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Menú</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platos.map((plato) => (
          <PlatoCard key={plato._id} plato={plato} />
        ))}
      </div>
    </div>
  );
}
