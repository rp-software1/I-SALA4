import { Injectable } from '@nestjs/common';
import type { Mesa, EstadoMesa } from './mesa.entity';

@Injectable()
export class MesaService {
  private readonly mesas: Mesa[] = [
    {
      _id: '1',
      numero: 1,
      capacidad: 4,
      estado: 'disponible',
    },
    {
      _id: '2',
      numero: 2,
      capacidad: 2,
      estado: 'ocupada',
    },
    {
      _id: '3',
      numero: 3,
      capacidad: 6,
      estado: 'reservada',
    },
  ];

  findAll(): Mesa[] {
    return this.mesas;
  }

  findOne(id: string): Mesa | undefined {
    return this.mesas.find((mesa) => mesa._id === id);
  }

  updateEstado(id: string, nuevoEstado: EstadoMesa): Mesa | undefined {
    const mesa = this.findOne(id);
    if (!mesa) return undefined;
    mesa.estado = nuevoEstado;
    return mesa;
  }
}
