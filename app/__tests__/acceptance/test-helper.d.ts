import { Client } from '@loopback/testlab';
import { App } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: App<any, any>;
    client: Client;
}
