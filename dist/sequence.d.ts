import { FindRoute, InvokeMethod, InvokeMiddleware, ParseParams, Reject, RequestContext, Send, SequenceHandler } from '@loopback/rest';
import { AuthUser } from './models/auth-user.model';
import { AuthenticateFn } from './types/keycloak.types';
export declare class MySequence implements SequenceHandler {
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    protected authenticateRequest: AuthenticateFn<AuthUser>;
    protected invokeMiddleware: InvokeMiddleware;
    constructor(findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject, authenticateRequest: AuthenticateFn<AuthUser>);
    handle(context: RequestContext): Promise<void>;
}
