import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class TwilioDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        accountSid: string;
        authToken: string;
    };
    constructor(dsConfig?: object);
    availableNumbers(): Promise<any>;
    purchaseNumber(number: any): any;
    sendText(from: string, to: string, body: string): any;
}
