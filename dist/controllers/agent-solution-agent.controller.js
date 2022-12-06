"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSolutionAgentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentSolutionAgentController = class AgentSolutionAgentController {
    constructor(agentSolutionRepository) {
        this.agentSolutionRepository = agentSolutionRepository;
    }
    async get(id, filter) {
        return this.agentSolutionRepository.agent(id).get(filter);
    }
    async create(id, agent) {
        return this.agentSolutionRepository.agent(id).create(agent);
    }
    async patch(id, agent, where) {
        return this.agentSolutionRepository.agent(id).patch(agent, where);
    }
    async delete(id, where) {
        return this.agentSolutionRepository.agent(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/agent-solutions/{id}/agent', {
        responses: {
            '200': {
                description: 'AgentSolution has one Agent',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Agent),
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
], AgentSolutionAgentController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/agent-solutions/{id}/agent', {
        responses: {
            '200': {
                description: 'AgentSolution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Agent) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Agent, {
                    title: 'NewAgentInAgentSolution',
                    exclude: ['id'],
                    optional: ['id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionAgentController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/agent-solutions/{id}/agent', {
        responses: {
            '200': {
                description: 'AgentSolution.Agent PATCH success count',
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
], AgentSolutionAgentController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/agent-solutions/{id}/agent', {
        responses: {
            '200': {
                description: 'AgentSolution.Agent DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Agent))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentSolutionAgentController.prototype, "delete", null);
AgentSolutionAgentController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AgentSolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AgentSolutionRepository])
], AgentSolutionAgentController);
exports.AgentSolutionAgentController = AgentSolutionAgentController;
//# sourceMappingURL=agent-solution-agent.controller.js.map