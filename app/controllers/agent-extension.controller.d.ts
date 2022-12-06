import { Count, Filter, Where } from '@loopback/repository';
import { Agent, Extension } from '../models';
import { AgentRepository } from '../repositories';
export declare class AgentExtensionController {
    protected agentRepository: AgentRepository;
    constructor(agentRepository: AgentRepository);
    get(id: number, filter?: Filter<Extension>): Promise<Extension>;
    create(id: typeof Agent.prototype.id, extension: Omit<Extension, 'id'>): Promise<Extension>;
    patch(id: number, extension: Partial<Extension>, where?: Where<Extension>): Promise<Count>;
    delete(id: number, where?: Where<Extension>): Promise<Count>;
}
