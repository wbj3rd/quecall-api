import { IAuthUser } from 'loopback4-authentication';
import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class User extends UserModifiableEntity implements IAuthUser {
    id?: number;
    firstName: string;
    lastName: string;
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
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
