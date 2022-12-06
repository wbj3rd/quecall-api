import { Count, Filter, Where } from '@loopback/repository';
import { Solution, Agent } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionAgentController {
    protected solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    find(id: number, filter?: Filter<Agent>): Promise<Agent[]>;
    create(id: typeof Solution.prototype.id, agent: Omit<Agent, 'id'>): Promise<Agent>;
    patch(id: number, agent: Partial<Agent>, where?: Where<Agent>): Promise<Count>;
    delete(id: number, where?: Where<Agent>): Promise<Count>;
}
