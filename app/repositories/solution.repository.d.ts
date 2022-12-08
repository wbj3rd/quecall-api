import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory, HasManyRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Agent, AgentSolution, Client, Music, PhoneNumber, Queue, Solution, SolutionRelations, Form } from '../models ';
import { AgentSolutionRepository } from './agent-solution.repository';
import { AgentRepository } from './agent.repository';
import { ClientRepository } from './client.repository';
import { MusicRepository } from './music.repository';
import { PhoneNumberRepository } from './phone-number.repository';
import { QueueRepository } from './queue.repository';
import { FormRepository } from './form.repository';
export declare class SolutionRepository extends DefaultCrudRepository<Solution, typeof Solution.prototype.id, SolutionRelations> {
    protected agentRepositoryGetter: Getter<AgentRepository>;
    protected phoneNumberRepositoryGetter: Getter<PhoneNumberRepository>;
    protected musicRepositoryGetter: Getter<MusicRepository>;
    protected queueRepositoryGetter: Getter<QueueRepository>;
    protected agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>;
    protected clientRepositoryGetter: Getter<ClientRepository>;
    protected formRepositoryGetter: Getter<FormRepository>;
    readonly phoneNumber: HasOneRepositoryFactory<PhoneNumber, typeof Solution.prototype.id>;
    readonly music: HasOneRepositoryFactory<Music, typeof Solution.prototype.id>;
    readonly queue: HasOneRepositoryFactory<Queue, typeof Solution.prototype.id>;
    readonly client: BelongsToAccessor<Client, typeof Solution.prototype.id>;
    readonly agents: HasManyThroughRepositoryFactory<Agent, typeof Agent.prototype.id, AgentSolution, typeof Solution.prototype.id>;
    readonly agentSolutions: HasManyRepositoryFactory<AgentSolution, typeof Solution.prototype.id>;
    readonly form: HasOneRepositoryFactory<Form, typeof Solution.prototype.id>;
    constructor(dataSource: PostgresDataSource, agentRepositoryGetter: Getter<AgentRepository>, phoneNumberRepositoryGetter: Getter<PhoneNumberRepository>, musicRepositoryGetter: Getter<MusicRepository>, queueRepositoryGetter: Getter<QueueRepository>, agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>, clientRepositoryGetter: Getter<ClientRepository>, formRepositoryGetter: Getter<FormRepository>);
}
