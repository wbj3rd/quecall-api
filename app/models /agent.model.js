"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const agent_solution_model_1 = require("./agent-solution.model");
const client_model_1 = require("./client.model");
const extension_model_1 = require("./extension.model");
const solution_model_1 = require("./solution.model");
const user_model_1 = require("./user.model");
let Agent = class Agent extends user_model_1.User {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => extension_model_1.Extension),
    tslib_1.__metadata("design:type", extension_model_1.Extension)
], Agent.prototype, "extension", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => client_model_1.Client, { through: { model: () => agent_solution_model_1.AgentSolution } }),
    tslib_1.__metadata("design:type", Array)
], Agent.prototype, "clients", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => agent_solution_model_1.AgentSolution),
    tslib_1.__metadata("design:type", Array)
], Agent.prototype, "agentSolutions", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => solution_model_1.Solution, { through: { model: () => agent_solution_model_1.AgentSolution } }),
    tslib_1.__metadata("design:type", Array)
], Agent.prototype, "solutions", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Agent.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "type", void 0);
Agent = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Agent);
exports.Agent = Agent;
//# sourceMappingURL=agent.model.js.map