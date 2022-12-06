"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AgentRepository = class AgentRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, extensionRepositoryGetter, agentSolutionRepositoryGetter, clientRepositoryGetter, solutionRepositoryGetter) {
        super(models_1.Agent, dataSource);
        this.extensionRepositoryGetter = extensionRepositoryGetter;
        this.agentSolutionRepositoryGetter = agentSolutionRepositoryGetter;
        this.clientRepositoryGetter = clientRepositoryGetter;
        this.solutionRepositoryGetter = solutionRepositoryGetter;
        this.agentSolutions = this.createHasManyRepositoryFactoryFor('agentSolutions', agentSolutionRepositoryGetter);
        this.registerInclusionResolver('agentSolutions', this.agentSolutions.inclusionResolver);
        this.solutions = this.createHasManyThroughRepositoryFactoryFor('solutions', solutionRepositoryGetter, agentSolutionRepositoryGetter);
        this.registerInclusionResolver('solutions', this.solutions.inclusionResolver);
        this.clients = this.createHasManyThroughRepositoryFactoryFor('clients', clientRepositoryGetter, agentSolutionRepositoryGetter);
        this.registerInclusionResolver('clients', this.clients.inclusionResolver);
        this.extension = this.createHasOneRepositoryFactoryFor('extension', extensionRepositoryGetter);
        this.registerInclusionResolver('extension', this.extension.inclusionResolver);
    }
};
AgentRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.postgres')),
    tslib_1.__param(1, repository_1.repository.getter('ExtensionRepository')),
    tslib_1.__param(2, repository_1.repository.getter('AgentSolutionRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ClientRepository')),
    tslib_1.__param(4, repository_1.repository.getter('SolutionRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource, Function, Function, Function, Function])
], AgentRepository);
exports.AgentRepository = AgentRepository;
//# sourceMappingURL=agent.repository.js.map