"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionAgentSolutionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionAgentSolutionController = class SolutionAgentSolutionController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async find(id, filter) {
        return this.solutionRepository.agentSolutions(id).find(filter);
    }
    async create(id, agentSolution) {
        return this.solutionRepository.agentSolutions(id).create(agentSolution);
    }
    async patch(id, agentSolution, where) {
        return this.solutionRepository.agentSolutions(id).patch(agentSolution, where);
    }
    async delete(id, where) {
        return this.solutionRepository.agentSolutions(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/agent-solutions', {
        responses: {
            '200': {
                description: 'Array of Solution has many AgentSolution',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution) },
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
], SolutionAgentSolutionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solutions/{id}/agent-solutions', {
        responses: {
            '200': {
                description: 'Solution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, {
                    title: 'NewAgentSolutionInSolution',
                    exclude: ['id'],
                    optional: ['solutionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionAgentSolutionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}/agent-solutions', {
        responses: {
            '200': {
                description: 'Solution.AgentSolution PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AgentSolution, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.AgentSolution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionAgentSolutionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}/agent-solutions', {
        responses: {
            '200': {
                description: 'Solution.AgentSolution DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.AgentSolution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionAgentSolutionController.prototype, "delete", null);
SolutionAgentSolutionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionAgentSolutionController);
exports.SolutionAgentSolutionController = SolutionAgentSolutionController;
//# sourceMappingURL=solution-agent-solution.controller.js.map