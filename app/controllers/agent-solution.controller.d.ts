import { Count, Filter, Where } from '@loopback/repository';
import { Agent, Solution } from '../models';
import { AgentRepository } from '../repositories';
export declare class AgentSolutionController {
    protected agentRepository: AgentRepository;
    constructor(agentRepository: AgentRepository);
    find(id: number, filter?: Filter<Solution>): Promise<Solution[]>;
    create(id: typeof Agent.prototype.id, solution: Omit<Solution, 'id'>): Promise<Solution>;
    patch(id: number, solution: Partial<Solution>, where?: Where<Solution>): Promise<Count>;
    delete(id: number, where?: Where<Solution>): Promise<Count>;
}
