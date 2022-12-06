import { Provider } from '@loopback/core';
import { PhoneNumber } from 'twilio/lib/interfaces';
import { NodeserverDataSource } from '../datasources';
import { Queue } from '../models';
import { User } from '../models/user.model';
export interface solution {
    agent: User;
    queue: Queue;
}
export interface NodeService {
    getGreeting: any;
    addUser<User>(user: User): User;
    addQueue<Queue>(queue: Queue): Queue;
    addMusic<Music>(music: Music): Music;
    addIncoming<Incoming>(phone_number: PhoneNumber): Incoming;
    addAgentToQueue<Agent, Queue>(agent: User, queue: Queue): solution;
    agentChangeNumber<User>(user: User): User;
    clientChangeQueue<Queue>(queue: Queue): Queue;
    clientChangeMusic<Music>(music: Music, queue: Queue): Music;
    clientChangeAgents<Agent>(queue: Queue, agent: User): Agent;
    deactivateAgent<Agent>(): void;
    deactivateQueue<Agent>(): void;
}
export declare class NodeServiceProvider implements Provider<NodeService> {
    protected dataSource: NodeserverDataSource;
    constructor(dataSource?: NodeserverDataSource);
    value(): Promise<NodeService>;
}
