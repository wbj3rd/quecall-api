import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class Form extends UserModifiableEntity {
    id?: number;
    formData?: object;
    active?: number;
    solutionId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Form>);
}
export interface FormRelations {
}
export declare type FormWithRelations = Form & FormRelations;
