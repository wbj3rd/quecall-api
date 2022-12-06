"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let PhoneNumber = class PhoneNumber extends user_modifiable_entity_model_1.UserModifiableEntity {
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
], PhoneNumber.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PhoneNumber.prototype, "phone_number", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PhoneNumber.prototype, "twilioId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], PhoneNumber.prototype, "solutionId", void 0);
PhoneNumber = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], PhoneNumber);
exports.PhoneNumber = PhoneNumber;
//# sourceMappingURL=phone-number.model.js.map