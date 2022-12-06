"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let QueueController = class QueueController {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async create(queue) {
        return this.queueRepository.create(queue);
    }
    async count(where) {
        return this.queueRepository.count(where);
    }
    async find(filter) {
        return this.queueRepository.find(filter);
    }
    async updateAll(queue, where) {
        return this.queueRepository.updateAll(queue, where);
    }
    async findById(id, filter) {
        return this.queueRepository.findById(id, filter);
    }
    async updateById(id, queue) {
        await this.queueRepository.updateById(id, queue);
    }
    async replaceById(id, queue) {
        await this.queueRepository.replaceById(id, queue);
    }
    async deleteById(id) {
        await this.queueRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/queues'),
    (0, rest_1.response)(200, {
        description: 'Queue model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Queue) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Queue, {
                    title: 'NewQueue',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/queues/count'),
    (0, rest_1.response)(200, {
        description: 'Queue model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Queue)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/queues'),
    (0, rest_1.response)(200, {
        description: 'Array of Queue model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Queue, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Queue)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/queues'),
    (0, rest_1.response)(200, {
        description: 'Queue PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Queue, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Queue)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Queue, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/queues/{id}'),
    (0, rest_1.response)(200, {
        description: 'Queue model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Queue, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Queue, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/queues/{id}'),
    (0, rest_1.response)(204, {
        description: 'Queue PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Queue, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Queue]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/queues/{id}'),
    (0, rest_1.response)(204, {
        description: 'Queue PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Queue]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/queues/{id}'),
    (0, rest_1.response)(204, {
        description: 'Queue DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], QueueController.prototype, "deleteById", null);
QueueController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.QueueRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.QueueRepository])
], QueueController);
exports.QueueController = QueueController;
//# sourceMappingURL=queue.controller.js.map