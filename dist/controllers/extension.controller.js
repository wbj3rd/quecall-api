"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ExtensionController = class ExtensionController {
    constructor(extensionRepository) {
        this.extensionRepository = extensionRepository;
    }
    async create(extension) {
        return this.extensionRepository.create(extension);
    }
    async count(where) {
        return this.extensionRepository.count(where);
    }
    async find(filter) {
        return this.extensionRepository.find(filter);
    }
    async updateAll(extension, where) {
        return this.extensionRepository.updateAll(extension, where);
    }
    async findById(id, filter) {
        return this.extensionRepository.findById(id, filter);
    }
    async updateById(id, extension) {
        await this.extensionRepository.updateById(id, extension);
    }
    async replaceById(id, extension) {
        await this.extensionRepository.replaceById(id, extension);
    }
    async deleteById(id) {
        await this.extensionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/extensions'),
    (0, rest_1.response)(200, {
        description: 'Extension model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Extension) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Extension, {
                    title: 'NewExtension',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/extensions/count'),
    (0, rest_1.response)(200, {
        description: 'Extension model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Extension)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/extensions'),
    (0, rest_1.response)(200, {
        description: 'Array of Extension model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Extension, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Extension)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/extensions'),
    (0, rest_1.response)(200, {
        description: 'Extension PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Extension, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Extension)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Extension, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/extensions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Extension model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Extension, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Extension, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/extensions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Extension PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Extension, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Extension]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/extensions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Extension PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Extension]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/extensions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Extension DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ExtensionController.prototype, "deleteById", null);
ExtensionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ExtensionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ExtensionRepository])
], ExtensionController);
exports.ExtensionController = ExtensionController;
//# sourceMappingURL=extension.controller.js.map