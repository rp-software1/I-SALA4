"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoController = void 0;
const common_1 = require("@nestjs/common");
const plato_service_1 = require("./plato.service");
let PlatoController = class PlatoController {
    platoService;
    constructor(platoService) {
        this.platoService = platoService;
    }
    findAll() {
        return this.platoService.findAll();
    }
};
exports.PlatoController = PlatoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PlatoController.prototype, "findAll", null);
exports.PlatoController = PlatoController = __decorate([
    (0, common_1.Controller)('platos'),
    __metadata("design:paramtypes", [plato_service_1.PlatoService])
], PlatoController);
//# sourceMappingURL=plato.controller.js.map