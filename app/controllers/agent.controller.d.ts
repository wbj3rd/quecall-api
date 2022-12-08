import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Agent } from '../models ';
import { AgentRepository } from '../repositories';
import { PingController } from './ping.controller';
export declare class AgentController {
    agentRepository: AgentRepository;
    pingController: PingController;
    constructor(agentRepository: AgentRepository, pingController: PingController);
    create(agent: Omit<Agent, 'id'>): Promise<Agent>;
    count(where?: Where<Agent>): Promise<Count>;
    find(filter?: Filter<Agent>): Promise<Agent[]>;
    updateAll(agent: Agent, where?: Where<Agent>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Agent>): Promise<Agent>;
    updateById(id: number, agent: Agent): Promise<void>;
    replaceById(id: number, agent: Agent): Promise<void>;
    deleteById(id: number): Promise<void>;
}
