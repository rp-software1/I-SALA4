import { Injectable } from '@nestjs/common';
import { Mesa } from './mesa.entity';

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
}
