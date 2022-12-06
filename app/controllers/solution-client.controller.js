"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionClientController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolutionClientController = class SolutionClientController {
    constructor(solutionRepository) {
        this.solutionRepository = solutionRepository;
    }
    async getClient(id) {
        return this.solutionRepository.client(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/solutions/{id}/client', {
        responses: {
            '200': {
                description: 'Client belonging to Solution',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Client) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SolutionClientController.prototype, "getClient", null);
SolutionClientController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SolutionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SolutionRepository])
], SolutionClientController);
exports.SolutionClientController = SolutionClientController;
//# sourceMappingURL=solution-client.controller.js.map