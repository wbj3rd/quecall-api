import { Count, Filter, Where } from '@loopback/repository';
import { Solution, AgentSolution } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionAgentSolutionController {
    protected solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    find(id: number, filter?: Filter<AgentSolution>): Promise<AgentSolution[]>;
    create(id: typeof Solution.prototype.id, agentSolution: Omit<AgentSolution, 'id'>): Promise<AgentSolution>;
    patch(id: number, agentSolution: Partial<AgentSolution>, where?: Where<AgentSolution>): Promise<Count>;
    delete(id: number, where?: Where<AgentSolution>): Promise<Count>;
}
