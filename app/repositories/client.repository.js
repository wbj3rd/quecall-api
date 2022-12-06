"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const client_model_1 = require("../models/client.model");
let ClientRepository = class ClientRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, solutionRepositoryGetter, agentRepositoryGetter) {
        super(client_model_1.Client, dataSource);
        this.solutionRepositoryGetter = solutionRepositoryGetter;
        this.agentRepositoryGetter = agentRepositoryGetter;
        this.solutions = this.createHasManyRepositoryFactoryFor('solutions', solutionRepositoryGetter);
        this.registerInclusionResolver('solutions', this.solutions.inclusionResolver);
    }
};
ClientRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.postgres')),
    tslib_1.__param(1, repository_1.repository.getter('SolutionRepository')),
    tslib_1.__param(2, repository_1.repository.getter('AgentRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource, Function, Function])
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map