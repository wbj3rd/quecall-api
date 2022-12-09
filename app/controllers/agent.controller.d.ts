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
    findById(id: number, filter?: FilterExcludingWhere<Agent>): Promise<Agent>;
    updateById(id: number, agent: Agent): Promise<void>;
    replaceById(id: number, agent: Agent): Promise<void>;
    deleteById(id: number): Promise<void>;
}
