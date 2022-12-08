import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory, HasOneRepositoryFactory, HasManyRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Agent, AgentRelations, AgentSolution, Client, Extension, Solution } from '../models ';
import { AgentSolutionRepository } from './agent-solution.repository';
import { ClientRepository } from './client.repository';
import { ExtensionRepository } from './extension.repository';
import { SolutionRepository } from './solution.repository';
export declare class AgentRepository extends DefaultCrudRepository<Agent, typeof Agent.prototype.id, AgentRelations> {
    protected extensionRepositoryGetter: Getter<ExtensionRepository>;
    protected agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>;
    protected clientRepositoryGetter: Getter<ClientRepository>;
    protected solutionRepositoryGetter: Getter<SolutionRepository>;
    readonly extension: HasOneRepositoryFactory<Extension, typeof Agent.prototype.id>;
    readonly clients: HasManyThroughRepositoryFactory<Client, typeof Client.prototype.id, AgentSolution, typeof Agent.prototype.id>;
    readonly solutions: HasManyThroughRepositoryFactory<Solution, typeof Solution.prototype.id, AgentSolution, typeof Agent.prototype.id>;
    readonly agentSolutions: HasManyRepositoryFactory<AgentSolution, typeof Agent.prototype.id>;
    constructor(dataSource: PostgresDataSource, extensionRepositoryGetter: Getter<ExtensionRepository>, agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>, clientRepositoryGetter: Getter<ClientRepository>, solutionRepositoryGetter: Getter<SolutionRepository>);
}
