import { Getter } from '@loopback/core';
import { HasOneRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { AuthUser } from '../models/authUser.model';
import { UserCredentials } from '../models/user-credentials.model';
import { User, UserRelations } from '../models/user.model';
import { DefaultUserModifyCrudRepository } from './default-user-modify-crud.repository.base';
import { UserCredentialsRepository } from './user-credentials.repository';
export declare class UserRepository extends DefaultUserModifyCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected readonly getCurrentUser: Getter<AuthUser | undefined>;
    readonly credentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    constructor(dataSource: PostgresDataSource, getCurrentUser: Getter<AuthUser | undefined>, getUserCredsRepository: Getter<UserCredentialsRepository>);
    private readonly saltRounds;
    verifyPassword(username: string, password: string): Promise<User>;
    updatePassword(username: string, password: string, newPassword: string): Promise<User>;
}
