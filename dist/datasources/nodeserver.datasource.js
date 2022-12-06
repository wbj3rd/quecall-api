"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeserverDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'nodeserver',
    connector: 'rest',
    baseURL: 'http://localhost:3500',
    crud: false,
    options: {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
        },
    },
    operations: [
        {
            template: {
                method: 'GET',
                url: 'http://localhost:3500',
            },
            functions: {
                getGreeting: [],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/add/user',
                headers: {
                    accept: "application/json"
                },
                query: {},
                body: {
                    user: "{user}"
                },
            },
            functions: {
                addUser: ["user"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/add/queue',
                body: {
                    queue: "{queue}"
                },
            },
            functions: {
                addQueue: ["queue"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/add/music',
                body: {
                    music: "{music}"
                },
            },
            functions: {
                addMusic: ["music"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/add/incoming',
                body: {
                    incoming: "{incoming}"
                },
            },
            functions: {
                addIncoming: ["incoming"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/add/agent/to/queue',
                body: {
                    agent: "{agent}",
                    queue: "{queue}"
                },
            },
            functions: {
                addAgentToQueue: ["agent", "queue"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/agent/change/number',
                body: {
                    agent: "{agent}",
                },
            },
            functions: {
                agentChangeNumber: ["agent"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/client/change/queue',
                body: {
                    queue: "{queue}",
                    clientId: "{clientId}"
                },
            },
            functions: {
                clientChangeQueue: ["queue", "clientId"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/client/change/music',
                body: {
                    music: "{music}",
                    queue: "{queue}",
                },
            },
            functions: {
                clientChangeMusic: ["music", "queue"],
            },
        },
        {
            template: {
                method: 'POST',
                url: 'http://localhost:3500/client/change/agents/queue',
                body: {
                    client: "{client}",
                    queue: "{queue}",
                    agent: "{agent}"
                },
            },
            functions: {
                clientChangeAgentQueue: ["agent", "queue", "client"],
            },
        },
    ]
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let NodeserverDataSource = class NodeserverDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
NodeserverDataSource.dataSourceName = 'nodeserver';
NodeserverDataSource.defaultConfig = config;
NodeserverDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.nodeserver', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], NodeserverDataSource);
exports.NodeserverDataSource = NodeserverDataSource;
//# sourceMappingURL=nodeserver.datasource.js.map