// archivo: not-found.tsx

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-gray-500 mb-6">Página no encontrada</p>
            <Link href="/mesas" className="text-blue-600 underline">
                Volver a Mesas
            </Link>
        </div>
    );
}