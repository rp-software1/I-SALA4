export interface Plato {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
  disponible: boolean;
}

export interface Mesa {
  _id: string;
  numero: number;
  capacidad: number;
  estado: 'libre' | 'ocupada';
}

export interface ItemPedido {
  platoId: string;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}

export type TipoPedido = 'mesa' | 'para_llevar';

export interface EstadoPedidoContext {
  mesaId: string | null;
  tipo: TipoPedido;
  estado: 'pendiente' | 'enviado';
  items: ItemPedido[];
  total: number;
}

export interface Pedido {
  _id: string;
  mesaId: string | null;
  tipo: TipoPedido;
  estado: string;
  items: ItemPedido[];
  total: number;
  creadoEn: string;
  actualizadoEn: string;
}

export interface PedidoContextType {
  pedido: EstadoPedidoContext;
  agregarPlato: (plato: Plato) => void;
  quitarPlato: (platoId: string) => void;
  cambiarTipo: (tipo: TipoPedido) => void;
  asignarMesa: (mesaId: string) => void;
  limpiarPedido: () => void;
}