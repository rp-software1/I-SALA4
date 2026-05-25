import type { Mesa, EstadoMesa } from './mesa.entity';
export declare class MesaService {
    private readonly mesas;
    findAll(): Mesa[];
    findOne(id: string): Mesa | undefined;
    updateEstado(id: string, nuevoEstado: EstadoMesa): Mesa | undefined;
}
