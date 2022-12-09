import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class PhoneNumber extends UserModifiableEntity {
    id?: number;
    phone_number: string;
    twilioId?: string;
    [prop: string]: any;
    constructor(data?: Partial<PhoneNumber>);
}
export interface PhoneNumberRelations {
}
export declare type PhoneNumberWithRelations = PhoneNumber & PhoneNumberRelations;
