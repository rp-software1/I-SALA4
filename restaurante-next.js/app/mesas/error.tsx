'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function MesasError({
    error,
    reset,
}: ErrorProps) {
    useEffect(() => {
        console.error(error.message);
    }, [error]);

    const isNetworkError = error.message
        .toLowerCase()
        .includes('no se pudo conectar');

    return (
        <div className="text-center mt-12">
            <h2 className="text-xl font-bold mb-4">
                Error al cargar mesas
            </h2>

            <p className="mb-4 text-gray-500">
                {error.message}
            </p>

            {isNetworkError && (
                <p className="text-sm text-gray-400 mb-4">
                    Verifica que el backend esté activo en{' '}
                    <strong>http://localhost:3001</strong>.
                </p>
            )}

            <button
                onClick={reset}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Reintentar
            </button>
        </div>
    );
}