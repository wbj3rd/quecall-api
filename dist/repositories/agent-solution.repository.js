"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSolutionRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AgentSolutionRepository = class AgentSolutionRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, solutionRepositoryGetter, clientRepositoryGetter, agentRepositoryGetter) {
        super(models_1.AgentSolution, dataSource);
        this.solutionRepositoryGetter = solutionRepositoryGetter;
        this.clientRepositoryGetter = clientRepositoryGetter;
        this.agentRepositoryGetter = agentRepositoryGetter;
        this.agent = this.createHasOneRepositoryFactoryFor('agent', agentRepositoryGetter);
        this.registerInclusionResolver('agent', this.agent.inclusionResolver);
        this.client = this.createHasOneRepositoryFactoryFor('client', clientRepositoryGetter);
        this.registerInclusionResolver('client', this.client.inclusionResolver);
        this.solution = this.createHasOneRepositoryFactoryFor('solution', solutionRepositoryGetter);
        this.registerInclusionResolver('solution', this.solution.inclusionResolver);
    }
};
AgentSolutionRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.postgres')),
    tslib_1.__param(1, repository_1.repository.getter('SolutionRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ClientRepository')),
    tslib_1.__param(3, repository_1.repository.getter('AgentRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource, Function, Function, Function])
], AgentSolutionRepository);
exports.AgentSolutionRepository = AgentSolutionRepository;
//# sourceMappingURL=agent-solution.repository.js.map