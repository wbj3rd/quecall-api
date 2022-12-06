"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FormController = class FormController {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async create(form) {
        return this.formRepository.create(form);
    }
    async count(where) {
        return this.formRepository.count(where);
    }
    async find(filter) {
        return this.formRepository.find(filter);
    }
    async updateAll(form, where) {
        return this.formRepository.updateAll(form, where);
    }
    async findById(id, filter) {
        return this.formRepository.findById(id, filter);
    }
    async updateById(id, form) {
        await this.formRepository.updateById(id, form);
    }
    async replaceById(id, form) {
        await this.formRepository.replaceById(id, form);
    }
    async deleteById(id) {
        await this.formRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/forms'),
    (0, rest_1.response)(200, {
        description: 'Form model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Form) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Form, {
                    title: 'NewForm',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/forms/count'),
    (0, rest_1.response)(200, {
        description: 'Form model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Form)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/forms'),
    (0, rest_1.response)(200, {
        description: 'Array of Form model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Form, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Form)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/forms'),
    (0, rest_1.response)(200, {
        description: 'Form PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Form, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Form)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Form, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/forms/{id}'),
    (0, rest_1.response)(200, {
        description: 'Form model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Form, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Form, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/forms/{id}'),
    (0, rest_1.response)(204, {
        description: 'Form PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Form, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Form]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/forms/{id}'),
    (0, rest_1.response)(204, {
        description: 'Form PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Form]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/forms/{id}'),
    (0, rest_1.response)(204, {
        description: 'Form DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FormController.prototype, "deleteById", null);
FormController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FormRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FormRepository])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map