import { Solution } from './solution.model';
import { User } from './user.model';
export declare class Client extends User {
    solutions: Solution[];
    id?: number;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<Client>);
}
export interface ClientRelations {
}
export declare type ClientWithRelations = Client & ClientRelations;
