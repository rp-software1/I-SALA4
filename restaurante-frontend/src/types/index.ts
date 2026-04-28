// ─── Estados ─────────────────────────────
export type EstadoMesa = "libre" | "ocupada" | "reservada";

export type TipoPedido = "mesa" | "para_llevar";

export type EstadoPedido = "pendiente";

// ─── Entidades ───────────────────────────
export interface Mesa {
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    comensales: number;
}

export interface Plato {
    _id: string;
    nombre: string;
    precio: number;
}

export interface ItemPedido {
    platoId: string;
    nombre: string;
    cantidad: number;
    precioUnitario: number;
}

export interface Pedido {
    _id: string;
    mesaId: string | null;
    tipo: TipoPedido;
    estado: EstadoPedido;
    items: ItemPedido[];
    total: number;
    creadoEn: string;
    actualizadoEn: string;
}

// ─── Context ─────────────────────────────
export interface EstadoPedidoContext {
    mesaId: string | null;
    tipo: TipoPedido;
    estado: EstadoPedido;
    items: ItemPedido[];
    total: number;
}

export interface PedidoContextType {
    pedido: EstadoPedidoContext;
    agregarPlato: (plato: Plato) => void;
    quitarPlato: (platoId: string) => void;
    cambiarTipo: (tipo: TipoPedido) => void;
    asignarMesa: (mesaId: string) => void;
    limpiarPedido: () => void;
}