import Link from 'next/link';
import type { Mesa } from '../../src/types';

interface MesaCardProps {
  mesa: Mesa;
}

export default function MesaCard({ mesa }: MesaCardProps) {
  const colorFondo = mesa.estado === 'disponible' ? 'bg-green-100 border-green-500' :
                     mesa.estado === 'ocupada' ? 'bg-red-100 border-red-500' :
                     mesa.estado === 'reservada' ? 'bg-yellow-100 border-yellow-500' :
                     'bg-gray-100 border-gray-500';

  return (
    <Link href={`/mesa/${mesa._id}`} className={`block border-2 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${colorFondo}`}>
      <h3 className="font-bold text-xl mb-2">Mesa {mesa.numero}</h3>
      <p className="text-sm text-gray-600">Capacidad: {mesa.capacidad} personas</p>
      <p className="text-sm mt-2 capitalize font-medium">Estado: {mesa.estado.replace('_', ' ')}</p>
    </Link>
  );
}
