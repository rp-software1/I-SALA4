"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoService = void 0;
const common_1 = require("@nestjs/common");
let PlatoService = class PlatoService {
    platos = [
        {
            _id: '1',
            nombre: 'Lomo saltado',
            descripcion: 'Trozos de carne salteados con cebolla y tomate.',
            precio: 32.5,
            categoria: 'principal',
            stock: 10,
            disponible: true,
        },
        {
            _id: '2',
            nombre: 'Ceviche mixto',
            descripcion: 'Fresco ceviche de mariscos con leche de tigre.',
            precio: 28.0,
            categoria: 'mariscos',
            stock: 5,
            disponible: true,
        },
        {
            _id: '3',
            nombre: 'Ají de gallina',
            descripcion: 'Pollo en crema de ají amarillo con arroz blanco.',
            precio: 24.0,
            categoria: 'principal',
            stock: 0,
            disponible: false,
        },
        {
            _id: '4',
            nombre: 'Choclo con queso',
            descripcion: 'Choclo peruano con queso fresco.',
            precio: 12.0,
            categoria: 'entrada',
            stock: 8,
            disponible: true,
        },
    ];
    findAll() {
        return this.platos;
    }
};
exports.PlatoService = PlatoService;
exports.PlatoService = PlatoService = __decorate([
    (0, common_1.Injectable)()
], PlatoService);
//# sourceMappingURL=plato.service.js.map