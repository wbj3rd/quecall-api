"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSolution = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const agent_model_1 = require("./agent.model");
const client_model_1 = require("./client.model");
const solution_model_1 = require("./solution.model");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let AgentSolution = class AgentSolution extends user_modifiable_entity_model_1.UserModifiableEntity {
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
], AgentSolution.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "agentId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "solutionId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "clientId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "agentAccepted", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "agentActivated", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "agentRemoved", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 1,
    }),
    tslib_1.__metadata("design:type", Number)
], AgentSolution.prototype, "solutionActive", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => solution_model_1.Solution, { keyFrom: 'solutionId', keyTo: "id" }),
    tslib_1.__metadata("design:type", solution_model_1.Solution)
], AgentSolution.prototype, "solution", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => client_model_1.Client, { keyFrom: 'clientId', keyTo: 'id' }),
    tslib_1.__metadata("design:type", client_model_1.Client)
], AgentSolution.prototype, "client", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => agent_model_1.Agent, { keyFrom: 'agentId', keyTo: 'id' }),
    tslib_1.__metadata("design:type", agent_model_1.Agent)
], AgentSolution.prototype, "agent", void 0);
AgentSolution = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AgentSolution);
exports.AgentSolution = AgentSolution;
//# sourceMappingURL=agent-solution.model.js.map