import { Provider } from '@loopback/core';
import { NodeserverDataSource } from '../datasources';
export interface solution {
}
export interface NodeService {
    getGreeting: any;
    addUser<User>(user: User): User;
    addQueue<Queue>(queue: Queue): Queue;
    addMusic<Music>(music: Music): Music;
    agentChangeNumber<User>(user: User): User;
    clientChangeQueue<Queue>(queue: Queue): Queue;
    deactivateAgent<Agent>(): void;
    deactivateQueue<Agent>(): void;
}
export declare class NodeServiceProvider implements Provider<NodeService> {
    protected dataSource: NodeserverDataSource;
    constructor(dataSource?: NodeserverDataSource);
    value(): Promise<NodeService>;
}
