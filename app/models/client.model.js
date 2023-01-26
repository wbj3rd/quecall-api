"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const solution_model_1 = require("./solution.model");
const user_model_1 = require("./user.model");
let Client = class Client extends user_model_1.User {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => solution_model_1.Solution),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "solutions", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        name: 'name',
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "name", void 0);
Client = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Client);
exports.Client = Client;
//# sourceMappingURL=client.model.js.map