"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionFormController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionFormController = class SolutionFormController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async get(id, filter) {
        return this.solutionRepository.form(id).get(filter);
    }
    async create(id, form) {
        return this.solutionRepository.form(id).create(form);
    }
    async patch(id, form, where) {
        return this.solutionRepository.form(id).patch(form, where);
    }
    async delete(id, where) {
        return this.solutionRepository.form(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/form', {
        responses: {
            '200': {
                description: 'Solution has one Form',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Form),
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
], SolutionFormController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solutions/{id}/form', {
        responses: {
            '200': {
                description: 'Solution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Form) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Form, {
                    title: 'NewFormInSolution',
                    exclude: ['id'],
                    optional: ['solutionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionFormController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}/form', {
        responses: {
            '200': {
                description: 'Solution.Form PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Form, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Form))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionFormController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}/form', {
        responses: {
            '200': {
                description: 'Solution.Form DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Form))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionFormController.prototype, "delete", null);
SolutionFormController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionFormController);
exports.SolutionFormController = SolutionFormController;
//# sourceMappingURL=solution-form.controller.js.map