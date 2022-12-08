"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const client_model_1 = require("./client.model");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let Solution = class Solution extends user_modifiable_entity_model_1.UserModifiableEntity {
    constructor(data) {
        super();
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Solution.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Solution.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Solution.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Solution.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], Solution.prototype, "active", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'number'
    }),
    tslib_1.__metadata("design:type", Array)
], Solution.prototype, "agentIds", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => client_model_1.Client),
    tslib_1.__metadata("design:type", Number)
], Solution.prototype, "clientId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Solution.prototype, "formId", void 0);
Solution = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Solution);
exports.Solution = Solution;
//# sourceMappingURL=solution.model.js.map