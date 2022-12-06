"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionPhoneNumberController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionPhoneNumberController = class SolutionPhoneNumberController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async get(id, filter) {
        return this.solutionRepository.phoneNumber(id).get(filter);
    }
    async create(id, phoneNumber) {
        return this.solutionRepository.phoneNumber(id).create(phoneNumber);
    }
    async patch(id, phoneNumber, where) {
        return this.solutionRepository.phoneNumber(id).patch(phoneNumber, where);
    }
    async delete(id, where) {
        return this.solutionRepository.phoneNumber(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/phone-number', {
        responses: {
            '200': {
                description: 'Solution has one PhoneNumber',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber),
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
], SolutionPhoneNumberController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solutions/{id}/phone-number', {
        responses: {
            '200': {
                description: 'Solution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, {
                    title: 'NewPhoneNumberInSolution',
                    exclude: ['id'],
                    optional: ['solutionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionPhoneNumberController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}/phone-number', {
        responses: {
            '200': {
                description: 'Solution.PhoneNumber PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.PhoneNumber))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionPhoneNumberController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}/phone-number', {
        responses: {
            '200': {
                description: 'Solution.PhoneNumber DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.PhoneNumber))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionPhoneNumberController.prototype, "delete", null);
SolutionPhoneNumberController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionPhoneNumberController);
exports.SolutionPhoneNumberController = SolutionPhoneNumberController;
//# sourceMappingURL=solution-phone-number.controller.js.map