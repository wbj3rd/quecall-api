"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSolutionSolutionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentSolutionSolutionController = class AgentSolutionSolutionController {
    constructor(agentSolutionRepository) {
        this.agentSolutionRepository = agentSolutionRepository;
    }
    async get(id, filter) {
        return this.agentSolutionRepository.solution(id).get(filter);
    }
    async create(id, solution) {
        return this.agentSolutionRepository.solution(id).create(solution);
    }
    async patch(id, solution, where) {
        return this.agentSolutionRepository.solution(id).patch(solution, where);
    }
    async delete(id, where) {
        return this.agentSolutionRepository.solution(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/agent-solutions/{id}/solution', {
        responses: {
            '200': {
                description: 'AgentSolution has one Solution',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Solution),
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
], AgentSolutionSolutionController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/agent-solutions/{id}/solution', {
        responses: {
            '200': {
                description: 'AgentSolution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solution) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, {
                    title: 'NewSolutionInAgentSolution',
                    exclude: ['id'],
                    optional: ['id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionSolutionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agent-solutions/{id}/solution', {
        responses: {
            '200': {
                description: 'AgentSolution.Solution PATCH success count',
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
], AgentSolutionSolutionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agent-solutions/{id}/solution', {
        responses: {
            '200': {
                description: 'AgentSolution.Solution DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionSolutionController.prototype, "delete", null);
AgentSolutionSolutionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentSolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentSolutionRepository])
], AgentSolutionSolutionController);
exports.AgentSolutionSolutionController = AgentSolutionSolutionController;
//# sourceMappingURL=agent-solution-solution.controller.js.map