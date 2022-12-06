import { Entity } from '@loopback/repository';
import { IAuthUser } from 'loopback4-authentication';
export declare class AuthUser extends Entity implements IAuthUser {
    id?: number;
    firstName: string;
    lastName: string;
    middleName?: string;
    username: string;
    email?: string;
    password?: string;
    roles?: string[];
    constructor(data?: Partial<AuthUser>);
}
