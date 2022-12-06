"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentClientController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentClientController = class AgentClientController {
    constructor(agentRepository) {
        this.agentRepository = agentRepository;
    }
    async find(id, filter) {
        return this.agentRepository.clients(id).find(filter);
    }
    async create(id, client) {
        return this.agentRepository.clients(id).create(client);
    }
    async patch(id, client, where) {
        return this.agentRepository.clients(id).patch(client, where);
    }
    async delete(id, where) {
        return this.agentRepository.clients(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/agents/{id}/clients', {
        responses: {
            '200': {
                description: 'Array of Agent has many Client through AgentSolution',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Client) },
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
], AgentClientController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/agents/{id}/clients', {
        responses: {
            '200': {
                description: 'create a Client model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Client) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Client, {
                    title: 'NewClientInAgent',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentClientController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agents/{id}/clients', {
        responses: {
            '200': {
                description: 'Agent.Client PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Client, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Client))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentClientController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agents/{id}/clients', {
        responses: {
            '200': {
                description: 'Agent.Client DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Client))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentClientController.prototype, "delete", null);
AgentClientController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentRepository])
], AgentClientController);
exports.AgentClientController = AgentClientController;
//# sourceMappingURL=agent-client.controller.js.map