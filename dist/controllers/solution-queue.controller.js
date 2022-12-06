"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionQueueController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionQueueController = class SolutionQueueController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async get(id, filter) {
        return this.solutionRepository.queue(id).get(filter);
    }
    async create(id, queue) {
        return this.solutionRepository.queue(id).create(queue);
    }
    async patch(id, queue, where) {
        return this.solutionRepository.queue(id).patch(queue, where);
    }
    async delete(id, where) {
        return this.solutionRepository.queue(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/queue', {
        responses: {
            '200': {
                description: 'Solution has one Queue',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Queue),
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
], SolutionQueueController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solutions/{id}/queue', {
        responses: {
            '200': {
                description: 'Solution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Queue) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Queue, {
                    title: 'NewQueueInSolution',
                    exclude: ['id'],
                    optional: ['solutionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionQueueController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}/queue', {
        responses: {
            '200': {
                description: 'Solution.Queue PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Queue, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Queue))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionQueueController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}/queue', {
        responses: {
            '200': {
                description: 'Solution.Queue DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Queue))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionQueueController.prototype, "delete", null);
SolutionQueueController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionQueueController);
exports.SolutionQueueController = SolutionQueueController;
//# sourceMappingURL=solution-queue.controller.js.map