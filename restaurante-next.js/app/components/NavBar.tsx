// archivo: NavBar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    const activo = (ruta: string) =>
        pathname === ruta ? 'font-bold text-blue-600' : '';

    return (
        <nav className="flex gap-4 p-4 bg-white shadow">
            <Link href="/mesas" className={activo('/mesas')}>Mesas</Link>
            <Link href="/menu" className={activo('/menu')}>Menú</Link>
            <Link href="/carrito" className={activo('/carrito')}>Carrito</Link>
        </nav>
    );
}