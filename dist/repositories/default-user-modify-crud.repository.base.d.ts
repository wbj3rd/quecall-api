import { SoftCrudRepository } from 'loopback4-soft-delete';
import { Count, DataObject, Entity, Getter, Where } from '@loopback/repository';
import { Options } from 'loopback-datasource-juggler';
import { PostgresDataSource } from '../datasources';
import { AuthUser } from '../models/authUser.model';
import { UserModifiableEntity } from '../models/user-modifiable-entity.model';
export declare abstract class DefaultUserModifyCrudRepository<T extends UserModifiableEntity, ID, Relations extends object = {}> extends SoftCrudRepository<T, ID, Relations> {
    protected readonly getCurrentUser: Getter<AuthUser | undefined>;
    constructor(entityClass: typeof Entity & {
        prototype: T;
    }, dataSource: PostgresDataSource, getCurrentUser: Getter<AuthUser | undefined>);
    create(entity: DataObject<T>, options?: Options): Promise<T>;
    createAll(entities: DataObject<T>[], options?: Options): Promise<T[]>;
    save(entity: T, options?: Options): Promise<T>;
    update(entity: T, options?: Options): Promise<void>;
    updateAll(data: DataObject<T>, where?: Where<T>, options?: Options): Promise<Count>;
    updateById(id: ID, data: DataObject<T>, options?: Options): Promise<void>;
    replaceById(id: ID, data: DataObject<T>, options?: Options): Promise<void>;
}
