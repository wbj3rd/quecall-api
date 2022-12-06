import { Count, Filter, Where } from '@loopback/repository';
import { Agent, AgentSolution } from '../models';
import { AgentRepository } from '../repositories';
export declare class AgentAgentSolutionController {
    protected agentRepository: AgentRepository;
    constructor(agentRepository: AgentRepository);
    find(id: number, filter?: Filter<AgentSolution>): Promise<AgentSolution[]>;
    create(id: typeof Agent.prototype.id, agentSolution: Omit<AgentSolution, 'id'>): Promise<AgentSolution>;
    patch(id: number, agentSolution: Partial<AgentSolution>, where?: Where<AgentSolution>): Promise<Count>;
    delete(id: number, where?: Where<AgentSolution>): Promise<Count>;
}
