import axios from "axios";
import { platosMock } from "../data/mock";
import type { Plato, Mesa, Pedido, EstadoPedido } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

// 🔹 GET PLATOS
export async function getPlatos(): Promise<Plato[]> {
    try {
        const response = await axios.get<Plato[]>(
            `${BASE_URL}/api/platos`
        );
        return response.data;
    } catch {
        console.warn("⚠️ Usando mock platos");
        await new Promise((res) => setTimeout(res, 500));
        return platosMock;
    }
}

// 🔹 GET MESAS (mock básico)
export async function getMesas(): Promise<Mesa[]> {
    await new Promise((res) => setTimeout(res, 300));

    return [
        { numero: 1, capacidad: 4, estado: "libre", comensales: 0 },
        { numero: 2, capacidad: 2, estado: "ocupada", comensales: 2 },
        { numero: 3, capacidad: 6, estado: "reservada", comensales: 0 },
    ];
}

// 🔹 CREAR PEDIDO (mock)
export async function crearPedido(
    datos: Omit<Pedido, "_id" | "creadoEn" | "actualizadoEn">
): Promise<Pedido> {
    await new Promise((res) => setTimeout(res, 500));

    return {
        _id: "pedido_mock",
        ...datos,
        creadoEn: new Date().toISOString(),
        actualizadoEn: new Date().toISOString(),
    };
}

// 🔹 CAMBIAR ESTADO (opcional)
export async function cambiarEstadoPedido(
    pedidoId: string,
    estado: EstadoPedido
): Promise<Pedido> {
    await new Promise((res) => setTimeout(res, 300));

    return {
        _id: pedidoId,
        mesaId: null,
        tipo: "mesa",
        estado,
        items: [],
        total: 0,
        creadoEn: new Date().toISOString(),
        actualizadoEn: new Date().toISOString(),
    };
}