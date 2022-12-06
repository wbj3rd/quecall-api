"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSolutionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FormSolutionController = class FormSolutionController {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async get(id, filter) {
        return this.formRepository.solution(id).get(filter);
    }
    async create(id, solution) {
        return this.formRepository.solution(id).create(solution);
    }
    async patch(id, solution, where) {
        return this.formRepository.solution(id).patch(solution, where);
    }
    async delete(id, where) {
        return this.formRepository.solution(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/forms/{id}/solution', {
        responses: {
            '200': {
                description: 'Form has one Solution',
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
], FormSolutionController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/forms/{id}/solution', {
        responses: {
            '200': {
                description: 'Form model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solution) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solution, {
                    title: 'NewSolutionInForm',
                    exclude: ['id'],
                    optional: ['formId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormSolutionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/forms/{id}/solution', {
        responses: {
            '200': {
                description: 'Form.Solution PATCH success count',
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
], FormSolutionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/forms/{id}/solution', {
        responses: {
            '200': {
                description: 'Form.Solution DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solution))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FormSolutionController.prototype, "delete", null);
FormSolutionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FormRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FormRepository])
], FormSolutionController);
exports.FormSolutionController = FormSolutionController;
//# sourceMappingURL=form-solution.controller.js.map