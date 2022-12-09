"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionController = class SolutionController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async create(solution) {
        return this.solutionRepository.create(solution);
    }
    async count(where) {
        return this.solutionRepository.count(where);
    }
    async find(filter) {
        return this.solutionRepository.find(filter);
    }
    async updateAll(solution, where) {
        return this.solutionRepository.updateAll(solution, where);
    }
    async findById(id, filter) {
        return this.solutionRepository.findById(id, filter);
    }
    async updateById(id, solution) {
        console.log("YEEEECH");
        await this.solutionRepository.updateById(id, solution);
    }
    async replaceById(id, solution) {
        console.log("WHOAMI");
        delete solution.phoneNumber;
        delete solution.client;
        await this.solutionRepository.replaceById(id, solution);
        return this.solutionRepository.findById(id, { "include": [{ "relation": "music" }, { "relation": "phoneNumber" }, { "relation": "agents" }, { "relation": "client" }] });
    }
    async deleteById(id) {
        await this.solutionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/solutions'),
    (0, rest_1.response)(200, {
        description: 'Solution model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solution) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, {
                    title: 'NewSolution',
                    exclude: ['id', 'agents'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/count'),
    (0, rest_1.response)(200, {
        description: 'Solution model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Solution)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/solutions'),
    (0, rest_1.response)(200, {
        description: 'Array of Solution model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Solution, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Solution)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions'),
    (0, rest_1.response)(200, {
        description: 'Solution PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Solution)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Solution, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Solution model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Solution, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Solution PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Solution]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/solutions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Solution PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Solution DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionController.prototype, "deleteById", null);
SolutionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionController);
exports.SolutionController = SolutionController;
//# sourceMappingURL=solution.controller.js.map