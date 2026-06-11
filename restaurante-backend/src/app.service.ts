import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

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
  private dataFile: string;

  constructor() {
    const dataDir = path.resolve(process.cwd(), 'data');
    this.dataFile = path.resolve(dataDir, 'pedidos.json');
    try {
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      if (fs.existsSync(this.dataFile)) {
        const raw = fs.readFileSync(this.dataFile, 'utf-8');
        const parsed = JSON.parse(raw) as Pedido[];
        this.pedidos = parsed;
      }
    } catch (err) {
      // si falla la lectura, empezamos con array vacío
      this.pedidos = [];
    }
  }

  create(pedido: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>): Pedido {
    const nuevo: Pedido = {
      ...pedido,
      _id: Date.now().toString(),
      creadoEn: new Date().toISOString(),
      actualizadoEn: new Date().toISOString(),
    } as Pedido;
    this.pedidos.push(nuevo);
    try { fs.writeFileSync(this.dataFile, JSON.stringify(this.pedidos, null, 2), 'utf-8'); } catch {}
    return nuevo;
  }

  findAll(): Pedido[] {
    return this.pedidos;
  }

  updateEstado(id: string, estado: string): Pedido | null {
    const idx = this.pedidos.findIndex((p) => p._id === id);
    if (idx === -1) return null;
    this.pedidos[idx] = {
      ...this.pedidos[idx],
      estado,
      actualizadoEn: new Date().toISOString(),
    };
    try { fs.writeFileSync(this.dataFile, JSON.stringify(this.pedidos, null, 2), 'utf-8'); } catch {}
    return this.pedidos[idx];
  }

  findById(id: string): Pedido | null {
    return this.pedidos.find((p) => p._id === id) ?? null;
  }
}
