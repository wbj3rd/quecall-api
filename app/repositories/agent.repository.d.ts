import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Agent, AgentRelations, AgentSolution } from '../models ';
import { AgentSolutionRepository } from './agent-solution.repository';
import { ClientRepository } from './client.repository';
import { ExtensionRepository } from './extension.repository';
import { SolutionRepository } from './solution.repository';
export declare class AgentRepository extends DefaultCrudRepository<Agent, typeof Agent.prototype.id, AgentRelations> {
    protected extensionRepositoryGetter: Getter<ExtensionRepository>;
    protected agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>;
    protected clientRepositoryGetter: Getter<ClientRepository>;
    protected solutionRepositoryGetter: Getter<SolutionRepository>;
    readonly agentSolutions: HasManyRepositoryFactory<AgentSolution, typeof Agent.prototype.id>;
    constructor(dataSource: PostgresDataSource, extensionRepositoryGetter: Getter<ExtensionRepository>, agentSolutionRepositoryGetter: Getter<AgentSolutionRepository>, clientRepositoryGetter: Getter<ClientRepository>, solutionRepositoryGetter: Getter<SolutionRepository>);
}
