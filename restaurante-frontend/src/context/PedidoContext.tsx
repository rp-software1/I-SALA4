import React, { createContext, useContext, useState } from "react";
import type { Plato, TipoPedido, EstadoPedidoContext, PedidoContextType } from "../types";

const estadoInicial: EstadoPedidoContext = {
    mesaId: null,
    tipo: "para_llevar",
    estado: "pendiente",
    items: [],
    total: 0,
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export function PedidoProvider({ children }: { children: React.ReactNode }) {
    const [pedido, setPedido] = useState<EstadoPedidoContext>(estadoInicial);

    const agregarPlato = (plato: Plato) => {
        setPedido((prev) => {
            const existe = prev.items.find(i => i.platoId === plato._id);

            if (existe) {
                return {
                    ...prev,
                    items: prev.items.map(i =>
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

    const quitarPlato = (platoId: string) => {
        setPedido((prev) => {
            const item = prev.items.find(i => i.platoId === platoId);
            if (!item) return prev;

            if (item.cantidad === 1) {
                return {
                    ...prev,
                    items: prev.items.filter(i => i.platoId !== platoId),
                    total: prev.total - item.precioUnitario,
                };
            }

            return {
                ...prev,
                items: prev.items.map(i =>
                    i.platoId === platoId
                        ? { ...i, cantidad: i.cantidad - 1 }
                        : i
                ),
                total: prev.total - item.precioUnitario,
            };
        });
    };

    const cambiarTipo = (tipo: TipoPedido) => {
        setPedido(prev => ({ ...prev, tipo }));
    };

    const asignarMesa = (mesaId: string) => {
        setPedido(prev => ({ ...prev, mesaId, tipo: "mesa" }));
    };

    const limpiarPedido = () => setPedido(estadoInicial);

    return (
        <PedidoContext.Provider value={{ pedido, agregarPlato, quitarPlato, cambiarTipo, asignarMesa, limpiarPedido }}>
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido() {
    const context = useContext(PedidoContext);
    if (!context) throw new Error("usePedido debe usarse dentro de PedidoProvider");
    return context;
}