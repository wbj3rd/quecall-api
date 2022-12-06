"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SolutionRepository = class SolutionRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, agentRepositoryGetter, phoneNumberRepositoryGetter, musicRepositoryGetter, queueRepositoryGetter, agentSolutionRepositoryGetter, clientRepositoryGetter, formRepositoryGetter) {
        super(models_1.Solution, dataSource);
        this.agentRepositoryGetter = agentRepositoryGetter;
        this.phoneNumberRepositoryGetter = phoneNumberRepositoryGetter;
        this.musicRepositoryGetter = musicRepositoryGetter;
        this.queueRepositoryGetter = queueRepositoryGetter;
        this.agentSolutionRepositoryGetter = agentSolutionRepositoryGetter;
        this.clientRepositoryGetter = clientRepositoryGetter;
        this.formRepositoryGetter = formRepositoryGetter;
        this.form = this.createHasOneRepositoryFactoryFor('form', formRepositoryGetter);
        this.registerInclusionResolver('form', this.form.inclusionResolver);
        this.agentSolutions = this.createHasManyRepositoryFactoryFor('agentSolutions', agentSolutionRepositoryGetter);
        this.registerInclusionResolver('agentSolutions', this.agentSolutions.inclusionResolver);
        this.agents = this.createHasManyThroughRepositoryFactoryFor('agents', agentRepositoryGetter, agentSolutionRepositoryGetter);
        this.registerInclusionResolver('agents', this.agents.inclusionResolver);
        this.client = this.createBelongsToAccessorFor('client', clientRepositoryGetter);
        this.registerInclusionResolver('client', this.client.inclusionResolver);
        this.queue = this.createHasOneRepositoryFactoryFor('queue', queueRepositoryGetter);
        this.registerInclusionResolver('queue', this.queue.inclusionResolver);
        this.music = this.createHasOneRepositoryFactoryFor('music', musicRepositoryGetter);
        this.registerInclusionResolver('music', this.music.inclusionResolver);
        this.phoneNumber = this.createHasOneRepositoryFactoryFor('phoneNumber', phoneNumberRepositoryGetter);
        this.registerInclusionResolver('phoneNumber', this.phoneNumber.inclusionResolver);
    }
};
SolutionRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.postgres')),
    tslib_1.__param(1, repository_1.repository.getter('AgentRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PhoneNumberRepository')),
    tslib_1.__param(3, repository_1.repository.getter('MusicRepository')),
    tslib_1.__param(4, repository_1.repository.getter('QueueRepository')),
    tslib_1.__param(5, repository_1.repository.getter('AgentSolutionRepository')),
    tslib_1.__param(6, repository_1.repository.getter('ClientRepository')),
    tslib_1.__param(7, repository_1.repository.getter('FormRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource, Function, Function, Function, Function, Function, Function, Function])
], SolutionRepository);
exports.SolutionRepository = SolutionRepository;
//# sourceMappingURL=solution.repository.js.map