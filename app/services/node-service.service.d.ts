import { Provider } from '@loopback/core';
import { NodeserverDataSource } from '../datasources';
export interface solution {
}
export interface NodeService {
    getGreeting: any;
}
export declare class NodeServiceProvider implements Provider<NodeService> {
    protected dataSource: NodeserverDataSource;
    constructor(dataSource?: NodeserverDataSource);
    value(): Promise<NodeService>;
}
