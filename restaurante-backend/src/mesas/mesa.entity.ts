export type EstadoMesa =
  | 'disponible'
  | 'ocupada'
  | 'reservada'
  | 'fuera_servicio';

export interface Mesa {
  _id: string;
  numero: number;
  capacidad: number;
  estado: EstadoMesa;
}
