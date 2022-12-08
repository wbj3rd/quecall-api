import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {AgentSolution, AgentSolutionRelations, Solution, Client, Agent} from '../models ';
import {SolutionRepository} from './solution.repository';
import {ClientRepository} from './client.repository';
import {AgentRepository} from './agent.repository';

export class AgentSolutionRepository extends DefaultCrudRepository<
  AgentSolution,
  typeof AgentSolution.prototype.id,
  AgentSolutionRelations
> {

  public readonly solution: HasOneRepositoryFactory<Solution, typeof AgentSolution.prototype.id>;

  public readonly client: HasOneRepositoryFactory<Client, typeof AgentSolution.prototype.id>;

  public readonly agent: HasOneRepositoryFactory<Agent, typeof AgentSolution.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('SolutionRepository') protected solutionRepositoryGetter: Getter<SolutionRepository>, @repository.getter('ClientRepository') protected clientRepositoryGetter: Getter<ClientRepository>, @repository.getter('AgentRepository') protected agentRepositoryGetter: Getter<AgentRepository>,
  ) {
    super(AgentSolution, dataSource);
    this.agent = this.createHasOneRepositoryFactoryFor('agent', agentRepositoryGetter);
    this.registerInclusionResolver('agent', this.agent.inclusionResolver);
    this.client = this.createHasOneRepositoryFactoryFor('client', clientRepositoryGetter);
    this.registerInclusionResolver('client', this.client.inclusionResolver);
    this.solution = this.createHasOneRepositoryFactoryFor('solution', solutionRepositoryGetter);
    this.registerInclusionResolver('solution', this.solution.inclusionResolver);
  }
}
