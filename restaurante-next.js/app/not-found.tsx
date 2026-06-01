export default function NotFound() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
      <a href="/mesas" className="text-blue-600 hover:underline">Volver a las mesas</a>
    </div>
  );
}
