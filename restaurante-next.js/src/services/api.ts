import type { Mesa, Plato, Pedido } from '../types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMesas(): Promise<Mesa[]> {
  if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_URL no configurada');
  const res = await fetch(`${BASE_URL}/mesas`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener mesas: ${res.status}`);
  return res.json();
}

export async function getPlatos(): Promise<Plato[]> {
  if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_URL no configurada');
  const res = await fetch(`${BASE_URL}/platos`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener platos: ${res.status}`);
  return res.json();
}

export async function getMesaById(id: string): Promise<Mesa> {
  if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_URL no configurada');
  const res = await fetch(`${BASE_URL}/mesas/${id}`, { cache: 'no-store' });
  if (res.status === 404) throw new Error(`Mesa con ID ${id} no encontrada`);
  if (!res.ok) throw new Error(`Error al obtener mesa: ${res.status}`);
  return res.json();
}

export async function getPedidos(): Promise<Pedido[]> {
  if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_URL no configurada');
  const res = await fetch(`${BASE_URL}/pedidos`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener pedidos: ${res.status}`);
  return res.json();
}
