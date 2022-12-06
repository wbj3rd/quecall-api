"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSolutionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClientSolutionController = class ClientSolutionController {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async find(id, filter) {
        return this.clientRepository.solutions(id).find(filter);
    }
    async create(id, solution) {
        return this.clientRepository.solutions(id).create(solution);
    }
    async patch(id, solution, where) {
        return this.clientRepository.solutions(id).patch(solution, where);
    }
    async delete(id, where) {
        return this.clientRepository.solutions(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/clients/{id}/solutions', {
        responses: {
            '200': {
                description: 'Array of Client has many Solution',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Solution) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientSolutionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/clients/{id}/solutions', {
        responses: {
            '200': {
                description: 'Client model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solution) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, {
                    title: 'NewSolutionInClient',
                    exclude: ['id'],
                    optional: ['clientId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientSolutionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/clients/{id}/solutions', {
        responses: {
            '200': {
                description: 'Client.Solution PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientSolutionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/clients/{id}/solutions', {
        responses: {
            '200': {
                description: 'Client.Solution DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientSolutionController.prototype, "delete", null);
ClientSolutionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClientRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClientRepository])
], ClientSolutionController);
exports.ClientSolutionController = ClientSolutionController;
//# sourceMappingURL=client-solution.controller.js.map