"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionAgentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionAgentController = class SolutionAgentController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async find(id, filter) {
        return this.solutionRepository.agents(id).find(filter);
    }
    async create(id, agent) {
        return this.solutionRepository.agents(id).create(agent);
    }
    async patch(id, agent, where) {
        return this.solutionRepository.agents(id).patch(agent, where);
    }
    async delete(id, where) {
        return this.solutionRepository.agents(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/agents', {
        responses: {
            '200': {
                description: 'Array of Solution has many Agent through AgentSolution',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Agent) },
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
], SolutionAgentController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solutions/{id}/agents', {
        responses: {
            '200': {
                description: 'create a Agent model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Agent) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agent, {
                    title: 'NewAgentInSolution',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionAgentController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}/agents', {
        responses: {
            '200': {
                description: 'Solution.Agent PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agent, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Agent))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionAgentController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}/agents', {
        responses: {
            '200': {
                description: 'Solution.Agent DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Agent))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionAgentController.prototype, "delete", null);
SolutionAgentController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionAgentController);
exports.SolutionAgentController = SolutionAgentController;
//# sourceMappingURL=solution-agent.controller.js.map