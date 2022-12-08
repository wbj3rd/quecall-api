import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class NodeserverDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        baseURL: string;
        crud: boolean;
        options: {
            headers: {
                accept: string;
                'content-type': string;
            };
        };
        operations: ({
            template: {
                method: string;
                url: string;
                headers?: undefined;
                query?: undefined;
                body?: undefined;
            };
            functions: {
                getGreeting: never[];
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                headers: {
                    accept: string;
                };
                query: {};
                body: {
                    user: string;
                    queue?: undefined;
                    music?: undefined;
                    incoming?: undefined;
                    agent?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
            };
            functions: {
                addUser: string[];
                getGreeting?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    queue: string;
                    user?: undefined;
                    music?: undefined;
                    incoming?: undefined;
                    agent?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                addQueue: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    music: string;
                    user?: undefined;
                    queue?: undefined;
                    incoming?: undefined;
                    agent?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                addMusic: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    incoming: string;
                    user?: undefined;
                    queue?: undefined;
                    music?: undefined;
                    agent?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                addIncoming: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    agent: string;
                    queue: string;
                    user?: undefined;
                    music?: undefined;
                    incoming?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                addAgentToQueue: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    agent: string;
                    user?: undefined;
                    queue?: undefined;
                    music?: undefined;
                    incoming?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                agentChangeNumber: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    queue: string;
                    clientId: string;
                    user?: undefined;
                    music?: undefined;
                    incoming?: undefined;
                    agent?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                clientChangeQueue: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeMusic?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    music: string;
                    queue: string;
                    user?: undefined;
                    incoming?: undefined;
                    agent?: undefined;
                    clientId?: undefined;
                    client?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                clientChangeMusic: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeAgentQueue?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                body: {
                    client: string;
                    queue: string;
                    agent: string;
                    user?: undefined;
                    music?: undefined;
                    incoming?: undefined;
                    clientId?: undefined;
                };
                headers?: undefined;
                query?: undefined;
            };
            functions: {
                clientChangeAgentQueue: string[];
                getGreeting?: undefined;
                addUser?: undefined;
                addQueue?: undefined;
                addMusic?: undefined;
                addIncoming?: undefined;
                addAgentToQueue?: undefined;
                agentChangeNumber?: undefined;
                clientChangeQueue?: undefined;
                clientChangeMusic?: undefined;
            };
        })[];
    };
    constructor(dsConfig?: object);
}
