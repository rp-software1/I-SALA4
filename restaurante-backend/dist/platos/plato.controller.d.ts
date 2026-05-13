import { PlatoService } from './plato.service';
import { Plato } from './plato.entity';
export declare class PlatoController {
    private readonly platoService;
    constructor(platoService: PlatoService);
    findAll(): Plato[];
}
