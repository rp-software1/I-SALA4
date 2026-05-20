import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
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

@Injectable()
export class PedidosService {
  private pedidos: Pedido[] = [];

  create(pedido: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>): Pedido {
    const nuevo: Pedido = {
      ...pedido,
      _id: Date.now().toString(),
      creadoEn: new Date().toISOString(),
      actualizadoEn: new Date().toISOString(),
    } as Pedido;
    this.pedidos.push(nuevo);
    return nuevo;
  }

  findAll(): Pedido[] {
    return this.pedidos;
  }
}
