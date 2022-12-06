"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentExtensionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentExtensionController = class AgentExtensionController {
    constructor(agentRepository) {
        this.agentRepository = agentRepository;
    }
    async get(id, filter) {
        return this.agentRepository.extension(id).get(filter);
    }
    async create(id, extension) {
        return this.agentRepository.extension(id).create(extension);
    }
    async patch(id, extension, where) {
        return this.agentRepository.extension(id).patch(extension, where);
    }
    async delete(id, where) {
        return this.agentRepository.extension(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/agents/{id}/extension', {
        responses: {
            '200': {
                description: 'Agent has one Extension',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Extension),
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
], AgentExtensionController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/agents/{id}/extension', {
        responses: {
            '200': {
                description: 'Agent model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Extension) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Extension, {
                    title: 'NewExtensionInAgent',
                    exclude: ['id'],
                    optional: ['agentId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentExtensionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agents/{id}/extension', {
        responses: {
            '200': {
                description: 'Agent.Extension PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Extension, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Extension))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentExtensionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agents/{id}/extension', {
        responses: {
            '200': {
                description: 'Agent.Extension DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Extension))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentExtensionController.prototype, "delete", null);
AgentExtensionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentRepository])
], AgentExtensionController);
exports.AgentExtensionController = AgentExtensionController;
//# sourceMappingURL=agent-extension.controller.js.map