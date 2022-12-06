"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MusicController = class MusicController {
    constructor(musicRepository) {
        this.musicRepository = musicRepository;
    }
    async create(music) {
        return this.musicRepository.create(music);
    }
    async count(where) {
        return this.musicRepository.count(where);
    }
    async find(filter) {
        return this.musicRepository.find(filter);
    }
    async updateAll(music, where) {
        return this.musicRepository.updateAll(music, where);
    }
    async findById(id, filter) {
        return this.musicRepository.findById(id, filter);
    }
    async updateById(id, music) {
        await this.musicRepository.updateById(id, music);
    }
    async replaceById(id, music) {
        await this.musicRepository.replaceById(id, music);
    }
    async deleteById(id) {
        await this.musicRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/music'),
    (0, rest_1.response)(200, {
        description: 'Music model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Music) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Music, {
                    title: 'NewMusic',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/music/count'),
    (0, rest_1.response)(200, {
        description: 'Music model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Music)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/music'),
    (0, rest_1.response)(200, {
        description: 'Array of Music model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Music, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Music)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/music'),
    (0, rest_1.response)(200, {
        description: 'Music PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Music, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Music)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Music, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/music/{id}'),
    (0, rest_1.response)(200, {
        description: 'Music model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Music, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Music, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/music/{id}'),
    (0, rest_1.response)(204, {
        description: 'Music PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Music, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Music]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/music/{id}'),
    (0, rest_1.response)(204, {
        description: 'Music PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Music]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/music/{id}'),
    (0, rest_1.response)(204, {
        description: 'Music DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MusicController.prototype, "deleteById", null);
MusicController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MusicRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MusicRepository])
], MusicController);
exports.MusicController = MusicController;
//# sourceMappingURL=music.controller.js.map