import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AgentSolution } from '../models';
import { AgentSolutionRepository } from '../repositories';
export declare class AgentSolutionComboController {
    agentSolutionRepository: AgentSolutionRepository;
    constructor(agentSolutionRepository: AgentSolutionRepository);
    create(agentSolution: Omit<AgentSolution, 'id'>): Promise<AgentSolution>;
    count(where?: Where<AgentSolution>): Promise<Count>;
    find(filter?: Filter<AgentSolution>): Promise<AgentSolution[]>;
    updateAll(agentSolution: AgentSolution, where?: Where<AgentSolution>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<AgentSolution>): Promise<AgentSolution>;
    updateById(id: number, agentSolution: AgentSolution): Promise<void>;
    replaceById(id: number, agentSolution: AgentSolution): Promise<void>;
    deleteById(id: number): Promise<void>;
}
