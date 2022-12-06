import { Provider } from '@loopback/context';
import { VerifyFunction } from 'loopback4-authentication';
import { UserCredentialsRepository, UserRepository } from '../../repositories';
export declare class KeycloakVerifyProvider implements Provider<VerifyFunction.KeycloakAuthFn> {
    userRepository: UserRepository;
    userCredsRepository: UserCredentialsRepository;
    constructor(userRepository: UserRepository, userCredsRepository: UserCredentialsRepository);
    value(): VerifyFunction.KeycloakAuthFn;
}
