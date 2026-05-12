'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function MenuError({
    error,
    reset,
}: ErrorProps) {
    useEffect(() => {
        console.error(error.message);
    }, [error]);

    return (
        <div className="text-center mt-12">
            <h2 className="text-xl font-bold mb-4">
                Error al cargar menú
            </h2>

            <p className="mb-4 text-gray-500">
                {error.message}
            </p>

            <button
                onClick={reset}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Reintentar
            </button>
        </div>
    );
}