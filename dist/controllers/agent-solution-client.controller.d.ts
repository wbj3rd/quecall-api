import { Count, Filter, Where } from '@loopback/repository';
import { AgentSolution, Client } from '../models';
import { AgentSolutionRepository } from '../repositories';
export declare class AgentSolutionClientController {
    protected agentSolutionRepository: AgentSolutionRepository;
    constructor(agentSolutionRepository: AgentSolutionRepository);
    get(id: number, filter?: Filter<Client>): Promise<Client>;
    create(id: typeof AgentSolution.prototype.id, client: Omit<Client, 'id'>): Promise<Client>;
    patch(id: number, client: Partial<Client>, where?: Where<Client>): Promise<Count>;
    delete(id: number, where?: Where<Client>): Promise<Count>;
}
