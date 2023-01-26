import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Agent } from '../models';
import { AgentRepository } from '../repositories';
export declare class AgentController {
    agentRepository: AgentRepository;
    constructor(agentRepository: AgentRepository);
    create(agent: Omit<Agent, 'id'>): Promise<Agent>;
    count(where?: Where<Agent>): Promise<Count>;
    find(filter?: Filter<Agent>): Promise<Agent[]>;
    updateAll(agent: Agent, where?: Where<Agent>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Agent>): Promise<Agent>;
    updateById(id: string, agent: Agent): Promise<void>;
    replaceById(id: string, agent: Agent): Promise<void>;
    deleteById(id: string): Promise<void>;
}
