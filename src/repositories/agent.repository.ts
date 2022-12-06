import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Agent, AgentRelations, AgentSolution, Client, Extension, Solution} from '../models';
import {AgentSolutionRepository} from './agent-solution.repository';
import {ClientRepository} from './client.repository';
import {ExtensionRepository} from './extension.repository';
import {SolutionRepository} from './solution.repository';

export class AgentRepository extends DefaultCrudRepository<
  Agent,
  typeof Agent.prototype.id,
  AgentRelations
> {

  public readonly extension: HasOneRepositoryFactory<Extension, typeof Agent.prototype.id>;


  public readonly clients: HasManyThroughRepositoryFactory<Client, typeof Client.prototype.id,
    AgentSolution,
    typeof Agent.prototype.id
  >;

  public readonly solutions: HasManyThroughRepositoryFactory<Solution, typeof Solution.prototype.id,
    AgentSolution,
    typeof Agent.prototype.id
  >;

  public readonly agentSolutions: HasManyRepositoryFactory<AgentSolution, typeof Agent.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('ExtensionRepository') protected extensionRepositoryGetter: Getter<ExtensionRepository>, @repository.getter('AgentSolutionRepository') protected agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>, @repository.getter('ClientRepository') protected clientRepositoryGetter: Getter<ClientRepository>, @repository.getter('SolutionRepository') protected solutionRepositoryGetter: Getter<SolutionRepository>,
  ) {
    super(Agent, dataSource);
    this.agentSolutions = this.createHasManyRepositoryFactoryFor('agentSolutions', agentSolutionRepositoryGetter,);
    this.registerInclusionResolver('agentSolutions', this.agentSolutions.inclusionResolver);
    this.solutions = this.createHasManyThroughRepositoryFactoryFor('solutions', solutionRepositoryGetter, agentSolutionRepositoryGetter,);
    this.registerInclusionResolver('solutions', this.solutions.inclusionResolver);
    this.clients = this.createHasManyThroughRepositoryFactoryFor('clients', clientRepositoryGetter, agentSolutionRepositoryGetter,);
    this.registerInclusionResolver('clients', this.clients.inclusionResolver);

    this.extension = this.createHasOneRepositoryFactoryFor('extension', extensionRepositoryGetter);
    this.registerInclusionResolver('extension', this.extension.inclusionResolver);
  }
}
