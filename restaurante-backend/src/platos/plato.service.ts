import { Injectable } from '@nestjs/common';
import { Plato } from './plato.entity';

@Injectable()
export class PlatoService {
  private readonly platos: Plato[] = [
    {
      _id: '1',
      nombre: 'Lomo saltado',
      descripcion: 'Trozos de carne salteados con cebolla y tomate.',
      precio: 32.5,
      categoria: 'principal',
      stock: 10,
      disponible: true,
    },
    {
      _id: '2',
      nombre: 'Ceviche mixto',
      descripcion: 'Fresco ceviche de mariscos con leche de tigre.',
      precio: 28.0,
      categoria: 'mariscos',
      stock: 5,
      disponible: true,
    },
    {
      _id: '3',
      nombre: 'Ají de gallina',
      descripcion: 'Pollo en crema de ají amarillo con arroz blanco.',
      precio: 24.0,
      categoria: 'principal',
      stock: 0,
      disponible: false,
    },
    {
      _id: '4',
      nombre: 'Choclo con queso',
      descripcion: 'Choclo peruano con queso fresco.',
      precio: 12.0,
      categoria: 'entrada',
      stock: 8,
      disponible: true,
    },
  ];

  findAll(): Plato[] {
    return this.platos;
  }
}
