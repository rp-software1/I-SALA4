export declare class AppService {
    getHello(): string;
}
export interface Pedido {
    _id: string;
    mesaId: string | null;
    tipo: string;
    estado: string;
    items: any[];
    total: number;
    creadoEn: string;
    actualizadoEn: string;
}
export declare class PedidosService {
    private pedidos;
    create(pedido: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>): Pedido;
    findAll(): Pedido[];
}
