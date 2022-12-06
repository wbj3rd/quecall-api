"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const solution_model_1 = require("./solution.model");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let Form = class Form extends user_modifiable_entity_model_1.UserModifiableEntity {
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
], Form.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
        default: {},
    }),
    tslib_1.__metadata("design:type", Object)
], Form.prototype, "formData", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], Form.prototype, "active", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Form.prototype, "solutionId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => solution_model_1.Solution),
    tslib_1.__metadata("design:type", solution_model_1.Solution)
], Form.prototype, "solution", void 0);
Form = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Form);
exports.Form = Form;
//# sourceMappingURL=form.model.js.map