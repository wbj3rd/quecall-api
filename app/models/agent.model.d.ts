import { User } from './user.model';
export declare class Agent extends User {
    id?: string;
    type: string;
    [prop: string]: any;
    constructor(data?: Partial<Agent>);
}
export interface AgentRelations {
}
export declare type AgentWithRelations = Agent & AgentRelations;
