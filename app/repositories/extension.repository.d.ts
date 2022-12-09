import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Extension, ExtensionRelations } from '../models';
export declare class ExtensionRepository extends DefaultCrudRepository<Extension, typeof Extension.prototype.id, ExtensionRelations> {
    constructor(dataSource: PostgresDataSource);
}
