import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { AgentSolution, AgentSolutionRelations, Solution, Client, Agent } from '../models';
import { SolutionRepository } from './solution.repository';
import { ClientRepository } from './client.repository';
import { AgentRepository } from './agent.repository';
export declare class AgentSolutionRepository extends DefaultCrudRepository<AgentSolution, typeof AgentSolution.prototype.id, AgentSolutionRelations> {
    protected solutionRepositoryGetter: Getter<SolutionRepository>;
    protected clientRepositoryGetter: Getter<ClientRepository>;
    protected agentRepositoryGetter: Getter<AgentRepository>;
    readonly solution: HasOneRepositoryFactory<Solution, typeof AgentSolution.prototype.id>;
    readonly client: HasOneRepositoryFactory<Client, typeof AgentSolution.prototype.id>;
    readonly agent: HasOneRepositoryFactory<Agent, typeof AgentSolution.prototype.id>;
    constructor(dataSource: PostgresDataSource, solutionRepositoryGetter: Getter<SolutionRepository>, clientRepositoryGetter: Getter<ClientRepository>, agentRepositoryGetter: Getter<AgentRepository>);
}
