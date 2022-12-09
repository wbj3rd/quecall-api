"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const base_entity_model_1 = require("./base-entity.model");
let Music = class Music extends base_entity_model_1.BaseEntity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Music.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Music.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Music.prototype, "link", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Music.prototype, "codec", void 0);
Music = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Music);
exports.Music = Music;
//# sourceMappingURL=music.model.js.map