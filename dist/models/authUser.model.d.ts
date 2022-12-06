import { Entity } from '@loopback/repository';
import { IAuthUser } from 'loopback4-authentication';
export declare class AuthUser extends Entity implements IAuthUser {
    id?: number | string | undefined;
    firstName: string;
    lastName: string;
    middleName?: string;
    username: string;
    email?: string;
    authProvider: string;
    authId?: string;
    authToken?: string;
    password?: string;
    permissions: never[];
    externalAuthToken: any;
    externalRefreshToken: any;
    constructor(data?: Partial<AuthUser>);
}
