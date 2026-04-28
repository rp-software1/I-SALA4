import React, { createContext, useContext, useState } from "react";
import type {
    Plato,
    TipoPedido,
    EstadoPedidoContext,
    PedidoContextType,
} from "../types";

// estado inicial TIPADO
const estadoInicial: EstadoPedidoContext = {
    mesaId: null,
    tipo: "para_llevar",
    estado: "pendiente",
    items: [],
    total: 0,
};

// 👇 ESTO ES LO QUE TE FALTABA
const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export function PedidoProvider({ children }: { children: React.ReactNode }) {
    // 👇 ESTO EVITA never[]
    const [pedido, setPedido] = useState<EstadoPedidoContext>(estadoInicial);

    const agregarPlato = (plato: Plato): void => {
        setPedido((prev) => {
            const existe = prev.items.find((i) => i.platoId === plato._id);

            if (existe) {
                return {
                    ...prev,
                    items: prev.items.map((i) =>
                        i.platoId === plato._id
                            ? { ...i, cantidad: i.cantidad + 1 }
                            : i
                    ),
                    total: prev.total + plato.precio,
                };
            }

            return {
                ...prev,
                items: [
                    ...prev.items,
                    {
                        platoId: plato._id,
                        nombre: plato.nombre,
                        cantidad: 1,
                        precioUnitario: plato.precio,
                    },
                ],
                total: prev.total + plato.precio,
            };
        });
    };

    const quitarPlato = (platoId: string): void => {
        setPedido((prev) => {
            const item = prev.items.find((i) => i.platoId === platoId);
            if (!item) return prev;

            if (item.cantidad === 1) {
                return {
                    ...prev,
                    items: prev.items.filter((i) => i.platoId !== platoId),
                    total: prev.total - item.precioUnitario,
                };
            }

            return {
                ...prev,
                items: prev.items.map((i) =>
                    i.platoId === platoId
                        ? { ...i, cantidad: i.cantidad - 1 }
                        : i
                ),
                total: prev.total - item.precioUnitario,
            };
        });
    };

    const cambiarTipo = (tipo: TipoPedido): void => {
        setPedido((prev) => ({ ...prev, tipo }));
    };

    const asignarMesa = (mesaId: string): void => {
        setPedido((prev) => ({
            ...prev,
            mesaId,
            tipo: "mesa",
        }));
    };

    const limpiarPedido = (): void => {
        setPedido(estadoInicial);
    };

    const value: PedidoContextType = {
        pedido,
        agregarPlato,
        quitarPlato,
        cambiarTipo,
        asignarMesa,
        limpiarPedido,
    };

    return (
        <PedidoContext.Provider value={value}>
            {children}
        </PedidoContext.Provider>
    );
}

// hook tipado
export function usePedido(): PedidoContextType {
    const context = useContext(PedidoContext);

    if (!context) {
        throw new Error("usePedido debe usarse dentro de PedidoProvider");
    }

    return context;
}

export default PedidoContext;