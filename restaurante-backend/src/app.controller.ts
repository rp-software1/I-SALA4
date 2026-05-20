import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
