// src/services/api.ts

import type { Mesa, Plato, Pedido, EstadoPedido } from '../types';

// 🔥 MOCK DE PLATOS CORREGIDO
const platosMock: Plato[] = [
    {
        _id: '1',
        nombre: 'Lomo Saltado',
        descripcion: 'Carne salteada con papas y arroz',
        precio: 25,
        categoria: 'Platos',
        disponible: true,
    },
    {
        _id: '2',
        nombre: 'Arroz Chaufa',
        descripcion: 'Arroz frito estilo chino',
        precio: 20,
        categoria: 'Platos',
        disponible: true,
    },
];

// 🔥 MOCK DE MESAS CORREGIDO
const mesasMock: Mesa[] = [
    {
        _id: 'm1',
        numero: 1,
        capacidad: 4,
        estado: 'disponible', // 🔥 antes "libre"
        pedidoActivoId: null,
    },
    {
        _id: 'm2',
        numero: 2,
        capacidad: 2,
        estado: 'ocupada',
        pedidoActivoId: 'p1',
    },
    {
        _id: 'm3',
        numero: 3,
        capacidad: 6,
        estado: 'reservada',
        pedidoActivoId: null,
    },
];

// ─────────────────────────────────────────
// FUNCIONES API (MOCK)
// ─────────────────────────────────────────

export async function getPlatos(): Promise<Plato[]> {
    return Promise.resolve(platosMock);
}

export async function getMesas(): Promise<Mesa[]> {
    return Promise.resolve(mesasMock);
}

export async function crearPedido(
    datos: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>
): Promise<Pedido> {
    const nuevoPedido: Pedido = {
        _id: 'pedido_' + Date.now(),
        ...datos,
        creadoEn: new Date().toISOString(),
        actualizadoEn: new Date().toISOString(),
    };

    return Promise.resolve(nuevoPedido);
}

export async function cambiarEstadoPedido(
    pedidoId: string,
    estado: EstadoPedido
): Promise<Pedido> {
    // mock simple
    return Promise.resolve({
        _id: pedidoId,
        mesaId: null,
        tipo: 'mesa',
        estado,
        items: [],
        total: 0,
        creadoEn: new Date().toISOString(),
        actualizadoEn: new Date().toISOString(),
    });
}