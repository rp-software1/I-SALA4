import { Controller, Get } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { Plato } from './plato.entity';

@Controller('platos')
export class PlatoController {
  constructor(private readonly platoService: PlatoService) {}

  @Get()
  findAll(): Plato[] {
    return this.platoService.findAll();
  }
}
