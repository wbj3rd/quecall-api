/// <reference types="express" />
import { Provider } from '@loopback/context';
import { Request } from '@loopback/rest';
import { VerifyFunction } from 'loopback4-authentication';
import { AuthClientRepository, UserRepository } from '../../repositories';
export declare class ResourceOwnerVerifyProvider implements Provider<VerifyFunction.ResourceOwnerPasswordFn> {
    private request;
    userRepository: UserRepository;
    authClientRepository: AuthClientRepository;
    constructor(request: Request, userRepository: UserRepository, authClientRepository: AuthClientRepository);
    value(): VerifyFunction.ResourceOwnerPasswordFn;
}
