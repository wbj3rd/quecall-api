/// <reference types="express" />
import { BindingKey } from '@loopback/core';
import { Request, Response } from '@loopback/rest';
import { VerifyFunction } from 'loopback4-authentication';
export declare namespace Keycloak {
    interface StrategyOptions {
        host: string;
        realm: string;
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        authorizationURL: string;
        tokenURL: string;
        userInfoURL: string;
    }
    interface Profile {
        keycloakId: string;
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        avatar: string;
        realm: string;
        [key: string]: any;
    }
    type VerifyCallback = (err?: string | Error, user?: any, info?: any) => void;
}
export interface IAuthClient {
    clientId: string;
    clientSecret: string;
    redirectUrl?: string;
}
export interface IAuthUser {
    id?: number | string;
    username: string;
    password?: string;
}
export interface AuthenticationMetadata<T = void> {
    strategy: string;
    options?: Object;
    verifier?: BindingKey<VerifyFunction.GenericAuthFn<T>>;
    authOptions?: (req: Request) => Object;
}
/**
 * interface definition of a function which accepts a request
 * and returns an authenticated user
 */
export interface AuthenticateFn<T> {
    (request: Request, response?: Response): Promise<T>;
}
export interface ClientAuthCode<T extends IAuthUser, ID = number> {
    clientId: string;
    userId?: ID;
    user?: T;
}
