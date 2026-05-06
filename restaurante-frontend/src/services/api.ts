import type { Plato, Mesa, Pedido } from '../types';

const platosMock: Plato[] = [
  { _id: '1', nombre: 'Pizza Clásica', descripcion: 'Tomate y queso', precio: 25, categoria: 'pizza', stock: 10, disponible: true },
  { _id: '2', nombre: 'Pizza Pepperoni', descripcion: 'Pepperoni', precio: 30, categoria: 'pizza', stock: 10, disponible: true },
  { _id: '3', nombre: 'Hamburguesa', descripcion: 'Carne', precio: 18, categoria: 'fastfood', stock: 15, disponible: true },
  { _id: '4', nombre: 'Hamburguesa Doble', descripcion: 'Doble carne', precio: 24, categoria: 'fastfood', stock: 12, disponible: true },
  { _id: '5', nombre: 'Pasta Alfredo', descripcion: 'Salsa blanca', precio: 22, categoria: 'pasta', stock: 8, disponible: true },
  { _id: '6', nombre: 'Pasta Bolognesa', descripcion: 'Carne', precio: 23, categoria: 'pasta', stock: 8, disponible: true },
];

const mesasMock: Mesa[] = [
  { _id: '1', numero: 1, capacidad: 4, estado: 'libre' },
  { _id: '2', numero: 2, capacidad: 2, estado: 'ocupada' },
  { _id: '3', numero: 3, capacidad: 6, estado: 'libre' },
  { _id: '4', numero: 4, capacidad: 4, estado: 'libre' },
];

export const getPlatos = async (): Promise<Plato[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(platosMock), 300));
};

export const getMesas = async (): Promise<Mesa[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mesasMock), 300));
};

export const crearPedido = async (
  pedido: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>
): Promise<Pedido> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...pedido,
        _id: Math.random().toString(),
        creadoEn: new Date().toISOString(),
        actualizadoEn: new Date().toISOString(),
      });
    }, 300);
  });
};