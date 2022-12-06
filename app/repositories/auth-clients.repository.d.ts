import { PostgresDataSource } from '../datasources';
import { AuthClient } from '../models/auth-clients.model';
import { DefaultSoftCrudRepository } from './default-soft-crud.repository.base';
export declare class AuthClientRepository extends DefaultSoftCrudRepository<AuthClient, typeof AuthClient.prototype.id> {
    constructor(dataSource: PostgresDataSource);
}
