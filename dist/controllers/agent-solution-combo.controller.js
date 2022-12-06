"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSolutionComboController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentSolutionComboController = class AgentSolutionComboController {
    constructor(agentSolutionRepository) {
        this.agentSolutionRepository = agentSolutionRepository;
    }
    async create(agentSolution) {
        return this.agentSolutionRepository.create(agentSolution);
    }
    async count(where) {
        return this.agentSolutionRepository.count(where);
    }
    async find(filter) {
        return this.agentSolutionRepository.find(filter);
    }
    async updateAll(agentSolution, where) {
        return this.agentSolutionRepository.updateAll(agentSolution, where);
    }
    async findById(id, filter) {
        return this.agentSolutionRepository.findById(id, filter);
    }
    async updateById(id, agentSolution) {
        await this.agentSolutionRepository.updateById(id, agentSolution);
    }
    async replaceById(id, agentSolution) {
        await this.agentSolutionRepository.replaceById(id, agentSolution);
    }
    async deleteById(id) {
        await this.agentSolutionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/agent-solution-combo'),
    (0, rest_1.response)(200, {
        description: 'AgentSolution model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, {
                    title: 'NewAgentSolution',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/agent-solution-combo/count'),
    (0, rest_1.response)(200, {
        description: 'AgentSolution model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AgentSolution)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/agent-solution-combo'),
    (0, rest_1.response)(200, {
        description: 'Array of AgentSolution model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AgentSolution)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agent-solution-combo'),
    (0, rest_1.response)(200, {
        description: 'AgentSolution PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AgentSolution)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AgentSolution, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/agent-solution-combo/{id}'),
    (0, rest_1.response)(200, {
        description: 'AgentSolution model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AgentSolution, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agent-solution-combo/{id}'),
    (0, rest_1.response)(204, {
        description: 'AgentSolution PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AgentSolution]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/agent-solution-combo/{id}'),
    (0, rest_1.response)(204, {
        description: 'AgentSolution PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AgentSolution]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agent-solution-combo/{id}'),
    (0, rest_1.response)(204, {
        description: 'AgentSolution DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionComboController.prototype, "deleteById", null);
AgentSolutionComboController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentSolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentSolutionRepository])
], AgentSolutionComboController);
exports.AgentSolutionComboController = AgentSolutionComboController;
//# sourceMappingURL=agent-solution-combo.controller.js.map