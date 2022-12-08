import { AgentSolution } from './agent-solution.model';
import { Client } from './client.model';
import { Extension } from './extension.model';
import { Solution } from './solution.model';
import { User } from './user.model';
export declare class Agent extends User {
    extension: Extension;
    clients: Client[];
    agentSolutions: AgentSolution[];
    solutions: Solution[];
    id?: number;
    type: string;
    [prop: string]: any;
    constructor(data?: Partial<Agent>);
}
export interface AgentRelations {
}
export declare type AgentWithRelations = Agent & AgentRelations;
