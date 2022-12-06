import { Count, Filter, Where } from '@loopback/repository';
import { Agent, Client } from '../models';
import { AgentRepository } from '../repositories';
export declare class AgentClientController {
    protected agentRepository: AgentRepository;
    constructor(agentRepository: AgentRepository);
    find(id: number, filter?: Filter<Client>): Promise<Client[]>;
    create(id: typeof Agent.prototype.id, client: Omit<Client, 'id'>): Promise<Client>;
    patch(id: number, client: Partial<Client>, where?: Where<Client>): Promise<Count>;
    delete(id: number, where?: Where<Client>): Promise<Count>;
}
