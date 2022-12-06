"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionMusicController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionMusicController = class SolutionMusicController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async get(id, filter) {
        return this.solutionRepository.music(id).get(filter);
    }
    async create(id, music) {
        return this.solutionRepository.music(id).create(music);
    }
    async patch(id, music, where) {
        return this.solutionRepository.music(id).patch(music, where);
    }
    async delete(id, where) {
        return this.solutionRepository.music(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/music', {
        responses: {
            '200': {
                description: 'Solution has one Music',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Music),
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
], SolutionMusicController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/solutions/{id}/music', {
        responses: {
            '200': {
                description: 'Solution model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Music) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Music, {
                    title: 'NewMusicInSolution',
                    exclude: ['id'],
                    optional: ['solutionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionMusicController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/solutions/{id}/music', {
        responses: {
            '200': {
                description: 'Solution.Music PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Music, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Music))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionMusicController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/solutions/{id}/music', {
        responses: {
            '200': {
                description: 'Solution.Music DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Music))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionMusicController.prototype, "delete", null);
SolutionMusicController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionMusicController);
exports.SolutionMusicController = SolutionMusicController;
//# sourceMappingURL=solution-music.controller.js.map