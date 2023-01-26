"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentController = class AgentController {
    constructor(agentRepository) {
        this.agentRepository = agentRepository;
    }
    async create(agent) {
        console.log("NEW AGENT");
        console.log(agent);
        return this.agentRepository.create(agent);
    }
    async count(where) {
        return this.agentRepository.count(where);
    }
    async find(filter) {
        return this.agentRepository.find(filter);
    }
    async updateAll(agent, where) {
        return this.agentRepository.updateAll(agent, where);
    }
    async findById(id, filter) {
        return this.agentRepository.findById(id, filter);
    }
    async updateById(id, agent) {
        await this.agentRepository.updateById(id, agent);
    }
    async replaceById(id, agent) {
        await this.agentRepository.replaceById(id, agent);
    }
    async deleteById(id) {
        await this.agentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/agents'),
    (0, rest_1.response)(200, {
        description: 'Agent model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Agent) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/agents/count'),
    (0, rest_1.response)(200, {
        description: 'Agent model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Agent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/agents'),
    (0, rest_1.response)(200, {
        description: 'Array of Agent model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Agent, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Agent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agents'),
    (0, rest_1.response)(200, {
        description: 'Agent PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agent, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Agent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Agent, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/agents/{id}'),
    (0, rest_1.response)(200, {
        description: 'Agent model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agent, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Agent, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Agent PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agent, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Agent]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/agents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Agent PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Agent]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Agent DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "deleteById", null);
AgentController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentRepository])
], AgentController);
exports.AgentController = AgentController;
//# sourceMappingURL=agent.controller.js.map