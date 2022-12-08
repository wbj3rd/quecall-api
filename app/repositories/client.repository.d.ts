import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { AgentRepository } from './agent.repository';
import { SolutionRepository } from './solution.repository';
import { Solution } from '../models ';
import { Client, ClientRelations } from '../models /client.model';
export declare class ClientRepository extends DefaultCrudRepository<Client, typeof Client.prototype.id, ClientRelations> {
    protected solutionRepositoryGetter: Getter<SolutionRepository>;
    protected agentRepositoryGetter: Getter<AgentRepository>;
    readonly solutions: HasManyRepositoryFactory<Solution, typeof Client.prototype.id>;
    constructor(dataSource: PostgresDataSource, solutionRepositoryGetter: Getter<SolutionRepository>, agentRepositoryGetter: Getter<AgentRepository>);
}
