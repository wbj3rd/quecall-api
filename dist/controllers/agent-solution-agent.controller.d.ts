import { Count, Filter, Where } from '@loopback/repository';
import { AgentSolution, Agent } from '../models';
import { AgentSolutionRepository } from '../repositories';
export declare class AgentSolutionAgentController {
    protected agentSolutionRepository: AgentSolutionRepository;
    constructor(agentSolutionRepository: AgentSolutionRepository);
    get(id: number, filter?: Filter<Agent>): Promise<Agent>;
    create(id: typeof AgentSolution.prototype.id, agent: Omit<Agent, 'id'>): Promise<Agent>;
    patch(id: number, agent: Partial<Agent>, where?: Where<Agent>): Promise<Count>;
    delete(id: number, where?: Where<Agent>): Promise<Count>;
}
