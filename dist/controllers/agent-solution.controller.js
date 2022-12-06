"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSolutionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentSolutionController = class AgentSolutionController {
    constructor(agentRepository) {
        this.agentRepository = agentRepository;
    }
    async find(id, filter) {
        return this.agentRepository.solutions(id).find(filter);
    }
    async create(id, solution) {
        return this.agentRepository.solutions(id).create(solution);
    }
    async patch(id, solution, where) {
        return this.agentRepository.solutions(id).patch(solution, where);
    }
    async delete(id, where) {
        return this.agentRepository.solutions(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/agents/{id}/solutions', {
        responses: {
            '200': {
                description: 'Array of Agent has many Solution through AgentSolution',
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
], AgentSolutionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/agents/{id}/solutions', {
        responses: {
            '200': {
                description: 'create a Solution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solution) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, {
                    title: 'NewSolutionInAgent',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agents/{id}/solutions', {
        responses: {
            '200': {
                description: 'Agent.Solution PATCH success count',
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
], AgentSolutionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agents/{id}/solutions', {
        responses: {
            '200': {
                description: 'Agent.Solution DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionController.prototype, "delete", null);
AgentSolutionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentRepository])
], AgentSolutionController);
exports.AgentSolutionController = AgentSolutionController;
//# sourceMappingURL=agent-solution.controller.js.map