import { Count, Filter, Where } from '@loopback/repository';
import { AgentSolution, Solution } from '../models';
import { AgentSolutionRepository } from '../repositories';
export declare class AgentSolutionSolutionController {
    protected agentSolutionRepository: AgentSolutionRepository;
    constructor(agentSolutionRepository: AgentSolutionRepository);
    get(id: number, filter?: Filter<Solution>): Promise<Solution>;
    create(id: typeof AgentSolution.prototype.id, solution: Omit<Solution, 'id'>): Promise<Solution>;
    patch(id: number, solution: Partial<Solution>, where?: Where<Solution>): Promise<Count>;
    delete(id: number, where?: Where<Solution>): Promise<Count>;
}
