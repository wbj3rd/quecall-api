"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AuthUser = class AuthUser extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true
    }),
    tslib_1.__metadata("design:type", Number)
], AuthUser.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        name: 'first_name',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        name: 'last_name',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        name: 'middle_name',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "middleName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AuthUser.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], AuthUser.prototype, "roles", void 0);
AuthUser = tslib_1.__decorate([
    (0, repository_1.model)({
        name: 'users',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthUser);
exports.AuthUser = AuthUser;
//# sourceMappingURL=auth-user.model.js.map