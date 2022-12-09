import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class Solution extends UserModifiableEntity {
    id?: number;
    name: string;
    type: string;
    description: string;
    active: number;
    constructor(data?: Partial<Solution>);
}
export interface SolutionRelations {
}
export declare type SolutionWithRelations = Solution & SolutionRelations;
