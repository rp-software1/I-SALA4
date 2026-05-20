// archivo: NavBar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePedido } from '../../src/context/PedidoProvider';

export default function NavBar() {
    const pathname = usePathname();

    const activo = (ruta: string) =>
        pathname === ruta ? 'font-bold text-blue-600' : '';

    const { pedido } = usePedido();
    const totalItems = pedido.items.reduce((acc, it) => acc + it.cantidad, 0);

    return (
        <nav className="flex gap-4 p-4 bg-white shadow">
            <Link href="/mesas" className={activo('/mesas')}>Mesas</Link>
            <Link href="/menu" className={activo('/menu')}>Menú</Link>
            <Link href="/carrito" className={`flex items-center gap-2 ${activo('/carrito')}`}>
                Carrito
                {totalItems > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{totalItems}</span>
                )}
            </Link>
        </nav>
    );
}