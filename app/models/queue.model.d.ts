import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class Queue extends UserModifiableEntity {
    id?: number;
    name: string;
    solutionId: number;
    [prop: string]: any;
    constructor(data?: Partial<Queue>);
}
export interface QueueRelations {
}
export declare type QueueWithRelations = Queue & QueueRelations;
