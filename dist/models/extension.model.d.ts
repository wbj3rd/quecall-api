import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class Extension extends UserModifiableEntity {
    id?: number;
    name: string;
    asteriskId: string;
    agentId: number;
    [prop: string]: any;
    constructor(data?: Partial<Extension>);
}
export interface ExtensionRelations {
}
export declare type ExtensionWithRelations = Extension & ExtensionRelations;
