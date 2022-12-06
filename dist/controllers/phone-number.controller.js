"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PhoneNumberController = class PhoneNumberController {
    constructor(phoneNumberRepository) {
        this.phoneNumberRepository = phoneNumberRepository;
    }
    async create(phoneNumber) {
        return this.phoneNumberRepository.create(phoneNumber);
    }
    async count(where) {
        return this.phoneNumberRepository.count(where);
    }
    async find(filter) {
        return this.phoneNumberRepository.find(filter);
    }
    async updateAll(phoneNumber, where) {
        return this.phoneNumberRepository.updateAll(phoneNumber, where);
    }
    async findById(id, filter) {
        return this.phoneNumberRepository.findById(id, filter);
    }
    async updateById(id, phoneNumber) {
        await this.phoneNumberRepository.updateById(id, phoneNumber);
    }
    async replaceById(id, phoneNumber) {
        await this.phoneNumberRepository.replaceById(id, phoneNumber);
    }
    async deleteById(id) {
        await this.phoneNumberRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/phone-numbers'),
    (0, rest_1.response)(200, {
        description: 'PhoneNumber model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, {
                    title: 'NewPhoneNumber',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/phone-numbers/count'),
    (0, rest_1.response)(200, {
        description: 'PhoneNumber model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PhoneNumber)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/phone-numbers'),
    (0, rest_1.response)(200, {
        description: 'Array of PhoneNumber model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PhoneNumber)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/phone-numbers'),
    (0, rest_1.response)(200, {
        description: 'PhoneNumber PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PhoneNumber)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PhoneNumber, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/phone-numbers/{id}'),
    (0, rest_1.response)(200, {
        description: 'PhoneNumber model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PhoneNumber, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/phone-numbers/{id}'),
    (0, rest_1.response)(204, {
        description: 'PhoneNumber PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PhoneNumber, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PhoneNumber]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/phone-numbers/{id}'),
    (0, rest_1.response)(204, {
        description: 'PhoneNumber PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PhoneNumber]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/phone-numbers/{id}'),
    (0, rest_1.response)(204, {
        description: 'PhoneNumber DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneNumberController.prototype, "deleteById", null);
PhoneNumberController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PhoneNumberRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PhoneNumberRepository])
], PhoneNumberController);
exports.PhoneNumberController = PhoneNumberController;
//# sourceMappingURL=phone-number.controller.js.map