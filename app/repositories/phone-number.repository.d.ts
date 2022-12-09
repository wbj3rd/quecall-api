import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { PhoneNumber, PhoneNumberRelations } from '../models';
export declare class PhoneNumberRepository extends DefaultCrudRepository<PhoneNumber, typeof PhoneNumber.prototype.id, PhoneNumberRelations> {
    constructor(dataSource: PostgresDataSource);
}
