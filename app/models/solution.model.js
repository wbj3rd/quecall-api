"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const agent_solution_model_1 = require("./agent-solution.model");
const agent_model_1 = require("./agent.model");
const client_model_1 = require("./client.model");
const form_model_1 = require("./form.model");
const music_model_1 = require("./music.model");
const phone_number_model_1 = require("./phone-number.model");
const queue_model_1 = require("./queue.model");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let Solution = class Solution extends user_modifiable_entity_model_1.UserModifiableEntity {
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
    (0, repository_1.hasOne)(() => phone_number_model_1.PhoneNumber),
    tslib_1.__metadata("design:type", phone_number_model_1.PhoneNumber)
], Solution.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => music_model_1.Music),
    tslib_1.__metadata("design:type", music_model_1.Music)
], Solution.prototype, "music", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => queue_model_1.Queue),
    tslib_1.__metadata("design:type", queue_model_1.Queue)
], Solution.prototype, "queue", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => agent_model_1.Agent, { through: { model: () => agent_solution_model_1.AgentSolution } }),
    tslib_1.__metadata("design:type", Array)
], Solution.prototype, "agents", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => client_model_1.Client),
    tslib_1.__metadata("design:type", Number)
], Solution.prototype, "clientId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => agent_solution_model_1.AgentSolution),
    tslib_1.__metadata("design:type", Array)
], Solution.prototype, "agentSolutions", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => form_model_1.Form, { keyFrom: 'formId', keyTo: "id" }),
    tslib_1.__metadata("design:type", form_model_1.Form)
], Solution.prototype, "form", void 0);
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