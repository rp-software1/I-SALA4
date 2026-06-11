import { Controller, Get, Post, Body, Patch, Param, NotFoundException } from '@nestjs/common';
import { AppService, PedidosService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pedidosService: PedidosService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('pedidos')
  createPedido(@Body() body: any) {
    return this.pedidosService.create(body);
  }

  @Get('pedidos')
  listarPedidos() {
    return this.pedidosService.findAll();
  }

  @Patch('pedidos/:id/estado')
  actualizarEstado(@Param('id') id: string, @Body('estado') estado: string) {
    const actualizado = this.pedidosService.updateEstado(id, estado);
    if (!actualizado) throw new NotFoundException('Pedido no encontrado');
    return actualizado;
  }

  @Get('pedidos/:id')
  obtenerPedido(@Param('id') id: string) {
    const pedido = this.pedidosService.findById(id);
    if (!pedido) throw new NotFoundException('Pedido no encontrado');
    return pedido;
  }
}
