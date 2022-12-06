import { Agent } from './agent.model';
import { Client } from './client.model';
import { Solution } from './solution.model';
import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class AgentSolution extends UserModifiableEntity {
    id?: number;
    agentId: number;
    solutionId: number;
    clientId: number;
    agentAccepted: number;
    agentActivated?: number;
    agentRemoved?: number;
    solutionActive?: number;
    solution: Solution;
    client: Client;
    agent: Agent;
    [prop: string]: any;
    constructor(data?: Partial<AgentSolution>);
}
export interface AgentSolutionRelations {
}
export declare type AgentSolutionWithRelations = AgentSolution & AgentSolutionRelations;
