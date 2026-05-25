"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaService = void 0;
const common_1 = require("@nestjs/common");
let MesaService = class MesaService {
    mesas = [
        {
            _id: '1',
            numero: 1,
            capacidad: 4,
            estado: 'disponible',
        },
        {
            _id: '2',
            numero: 2,
            capacidad: 2,
            estado: 'ocupada',
        },
        {
            _id: '3',
            numero: 3,
            capacidad: 6,
            estado: 'reservada',
        },
    ];
    findAll() {
        return this.mesas;
    }
    findOne(id) {
        return this.mesas.find((mesa) => mesa._id === id);
    }
    updateEstado(id, nuevoEstado) {
        const mesa = this.findOne(id);
        if (!mesa)
            return undefined;
        mesa.estado = nuevoEstado;
        return mesa;
    }
};
exports.MesaService = MesaService;
exports.MesaService = MesaService = __decorate([
    (0, common_1.Injectable)()
], MesaService);
//# sourceMappingURL=mesa.service.js.map