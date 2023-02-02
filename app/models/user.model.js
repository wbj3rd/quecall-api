"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let User = class User extends user_modifiable_entity_model_1.UserModifiableEntity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        name: 'first_name',
        postgresql: {
            columnName: 'first_name',
            dataType: 'VARCHAR',
            dataLength: 20,
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        name: 'last_name',
        postgresql: {
            columnName: 'last_name',
            dataType: 'VARCHAR',
            dataLength: 20,
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        name: 'middle_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middleName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "image", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "voice_sample", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "industry", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        name: 'default_tenant',
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "defaultTenant", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        name: 'last_login',
        postgresql: {
            column: 'last_login',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        name: "kc_id"
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "kc_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "object",
        name: "attributes"
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "attributes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "object",
        name: "user_profile_metadata"
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "userProfileMetadata", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "boolean",
        name: "email_verified"
    }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "boolean",
        name: "profile_complete"
    }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "profileComplete", void 0);
User = tslib_1.__decorate([
    (0, repository_1.model)({
        name: 'users',
        settings: {
            strict: "filter"
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map