import { IAuthUser } from 'loopback4-authentication';
import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class User extends UserModifiableEntity implements IAuthUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    username: string;
    email?: string;
    phone?: string;
    image?: string;
    voice_sample?: string;
    description?: string;
    industry?: string;
    defaultTenant: number;
    lastLogin?: string;
    kc_id?: string;
    attributes?: {};
    userProfileMetadata?: {};
    emailVerified?: boolean;
    profileComplete?: boolean;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
