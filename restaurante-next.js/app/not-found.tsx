import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h1>404 - No existe</h1>
            <Link href="/mesas">Volver</Link>
        </div>
    );
}