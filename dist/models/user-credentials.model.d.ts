import { BaseEntity } from './base-entity.model';
export declare class UserCredentials extends BaseEntity {
    id?: number;
    userId: string;
    authProvider: string;
    authId?: string;
    authToken?: string;
    password?: string;
    constructor(data?: Partial<UserCredentials>);
}
export interface UserCredentialsRelations {
}
export declare type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
