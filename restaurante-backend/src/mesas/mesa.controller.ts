import { Controller, Get } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { Mesa } from './mesa.entity';

@Controller('mesas')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Get()
  findAll(): Mesa[] {
    return this.mesaService.findAll();
  }
}
