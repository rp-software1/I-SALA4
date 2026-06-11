import { AppService, PedidosService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly pedidosService;
    constructor(appService: AppService, pedidosService: PedidosService);
    getHello(): string;
    createPedido(body: any): import("./app.service").Pedido;
    listarPedidos(): import("./app.service").Pedido[];
    actualizarEstado(id: string, estado: string): import("./app.service").Pedido;
    obtenerPedido(id: string): import("./app.service").Pedido;
}
