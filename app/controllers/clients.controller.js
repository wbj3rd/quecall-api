"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models ");
const repositories_1 = require("../repositories");
const ping_controller_1 = require("./ping.controller");
let ClientsController = class ClientsController {
    constructor(clientRepository, pingController) {
        this.clientRepository = clientRepository;
        this.pingController = pingController;
    }
    async create(client) {
        return this.clientRepository.create(client);
    }
    async count(where) {
        return this.clientRepository.count(where);
    }
    async find(filter) {
        return this.clientRepository.find(filter);
    }
    async updateAll(client, where) {
        return this.clientRepository.updateAll(client, where);
    }
    async findById(id, filter) {
        return this.clientRepository.findById(id, filter);
    }
    async updateById(id, client) {
        await this.clientRepository.updateById(id, client);
    }
    async replaceById(id, client) {
        await this.clientRepository.replaceById(id, client);
    }
    async deleteById(id) {
        await this.clientRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/clients'),
    (0, rest_1.response)(200, {
        description: 'Client model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Client) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Client, {
                    title: 'NewClient',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/clients/count'),
    (0, rest_1.response)(200, {
        description: 'Client model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Client)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/clients'),
    (0, rest_1.response)(200, {
        description: 'Array of Client model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Client, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Client)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/clients'),
    (0, rest_1.response)(200, {
        description: 'Client PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Client, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Client)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Client, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/clients/{id}'),
    (0, rest_1.response)(200, {
        description: 'Client model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Client, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Client, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/clients/{id}'),
    (0, rest_1.response)(204, {
        description: 'Client PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Client, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Client]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/clients/{id}'),
    (0, rest_1.response)(204, {
        description: 'Client PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Client]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/clients/{id}'),
    (0, rest_1.response)(204, {
        description: 'Client DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientsController.prototype, "deleteById", null);
ClientsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClientRepository)),
    tslib_1.__param(1, (0, core_1.inject)('controllers.PingController')),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClientRepository,
        ping_controller_1.PingController])
], ClientsController);
exports.ClientsController = ClientsController;
//# sourceMappingURL=clients.controller.js.map