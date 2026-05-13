import { MesaService } from './mesa.service';
import { Mesa } from './mesa.entity';
export declare class MesaController {
    private readonly mesaService;
    constructor(mesaService: MesaService);
    findAll(): Mesa[];
}
