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
    private dataFile;
    constructor();
    create(pedido: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>): Pedido;
    findAll(): Pedido[];
    updateEstado(id: string, estado: string): Pedido | null;
    findById(id: string): Pedido | null;
}
