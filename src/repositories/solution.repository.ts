import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Agent, AgentSolution, Client, Music, PhoneNumber, Queue, Solution, SolutionRelations, Form} from '../models ';
import {AgentSolutionRepository} from './agent-solution.repository';
import {AgentRepository} from './agent.repository';
import {ClientRepository} from './client.repository';
import {MusicRepository} from './music.repository';
import {PhoneNumberRepository} from './phone-number.repository';
import {QueueRepository} from './queue.repository';
import {FormRepository} from './form.repository';

export class SolutionRepository extends DefaultCrudRepository<
  Solution,
  typeof Solution.prototype.id,
  SolutionRelations
> {



  public readonly phoneNumber: HasOneRepositoryFactory<PhoneNumber, typeof Solution.prototype.id>;

  public readonly music: HasOneRepositoryFactory<Music, typeof Solution.prototype.id>;

  public readonly queue: HasOneRepositoryFactory<Queue, typeof Solution.prototype.id>;



  public readonly client: BelongsToAccessor<Client, typeof Solution.prototype.id>;

  public readonly agents: HasManyThroughRepositoryFactory<Agent, typeof Agent.prototype.id,
    AgentSolution,
    typeof Solution.prototype.id
  >;

  public readonly agentSolutions: HasManyRepositoryFactory<AgentSolution, typeof Solution.prototype.id>;

  public readonly form: HasOneRepositoryFactory<Form, typeof Solution.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('AgentRepository') protected agentRepositoryGetter: Getter<AgentRepository>, @repository.getter('PhoneNumberRepository') protected phoneNumberRepositoryGetter: Getter<PhoneNumberRepository>, @repository.getter('MusicRepository') protected musicRepositoryGetter: Getter<MusicRepository>, @repository.getter('QueueRepository') protected queueRepositoryGetter: Getter<QueueRepository>, @repository.getter('AgentSolutionRepository') protected agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>, @repository.getter('ClientRepository') protected clientRepositoryGetter: Getter<ClientRepository>, @repository.getter('FormRepository') protected formRepositoryGetter: Getter<FormRepository>,
  ) {
    super(Solution, dataSource);
    this.form = this.createHasOneRepositoryFactoryFor('form', formRepositoryGetter);
    this.registerInclusionResolver('form', this.form.inclusionResolver);
    this.agentSolutions = this.createHasManyRepositoryFactoryFor('agentSolutions', agentSolutionRepositoryGetter,);
    this.registerInclusionResolver('agentSolutions', this.agentSolutions.inclusionResolver);
    this.agents = this.createHasManyThroughRepositoryFactoryFor('agents', agentRepositoryGetter, agentSolutionRepositoryGetter,);
    this.registerInclusionResolver('agents', this.agents.inclusionResolver);


    this.client = this.createBelongsToAccessorFor('client', clientRepositoryGetter,);
    this.registerInclusionResolver('client', this.client.inclusionResolver);

    this.queue = this.createHasOneRepositoryFactoryFor('queue', queueRepositoryGetter);
    this.registerInclusionResolver('queue', this.queue.inclusionResolver);
    this.music = this.createHasOneRepositoryFactoryFor('music', musicRepositoryGetter);
    this.registerInclusionResolver('music', this.music.inclusionResolver);
    this.phoneNumber = this.createHasOneRepositoryFactoryFor('phoneNumber', phoneNumberRepositoryGetter);
    this.registerInclusionResolver('phoneNumber', this.phoneNumber.inclusionResolver);

  }
}
