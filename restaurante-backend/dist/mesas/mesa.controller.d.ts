import { MesaService } from './mesa.service';
import type { Mesa } from './mesa.entity';
import type { EstadoMesa } from './mesa.entity';
export declare class MesaController {
    private readonly mesaService;
    constructor(mesaService: MesaService);
    findAll(): Mesa[];
    findOne(id: string): Mesa;
    updateEstado(id: string, estado: EstadoMesa): Mesa;
}
