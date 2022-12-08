import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';

import {AgentRepository} from './agent.repository';
import {SolutionRepository} from './solution.repository';

import {Solution} from '../models';
import {Client, ClientRelations} from '../models/client.model';


export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.id,
  ClientRelations
> {

  public readonly solutions: HasManyRepositoryFactory<Solution, typeof Client.prototype.id>;



  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('SolutionRepository') protected solutionRepositoryGetter: Getter<SolutionRepository>, @repository.getter('AgentRepository') protected agentRepositoryGetter: Getter<AgentRepository>,
  ) {
    super(Client, dataSource);

    this.solutions = this.createHasManyRepositoryFactoryFor('solutions', solutionRepositoryGetter,);
    this.registerInclusionResolver('solutions', this.solutions.inclusionResolver);
  }
}
