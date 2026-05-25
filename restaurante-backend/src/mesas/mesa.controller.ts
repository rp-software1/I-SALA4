import { Controller, Get, Patch, NotFoundException, Param, Body } from '@nestjs/common';
import { MesaService } from './mesa.service';
import type { Mesa } from './mesa.entity';
import type { EstadoMesa } from './mesa.entity';

@Controller('mesas')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Get()
  findAll(): Mesa[] {
    return this.mesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Mesa {
    const mesa = this.mesaService.findOne(id);
    if (!mesa) {
      throw new NotFoundException(`Mesa con ID ${id} no encontrada`);
    }
    return mesa;
  }

  @Patch(':id')
  updateEstado(
    @Param('id') id: string,
    @Body('estado') estado: EstadoMesa
  ): Mesa {
    const mesa = this.mesaService.updateEstado(id, estado);
    if (!mesa) {
      throw new NotFoundException(`Mesa con ID ${id} no encontrada`);
    }
    return mesa;
  }
}
