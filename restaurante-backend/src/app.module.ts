import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, PedidosService } from './app.service';
import { MesaModule } from './mesas/mesa.module';
import { PlatoModule } from './platos/plato.module';

@Module({
  imports: [MesaModule, PlatoModule],
  controllers: [AppController],
  providers: [AppService, PedidosService],
})
export class AppModule {}
