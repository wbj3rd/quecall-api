import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Form, FormRelations } from '../models';
export declare class FormRepository extends DefaultCrudRepository<Form, typeof Form.prototype.id, FormRelations> {
    constructor(dataSource: PostgresDataSource);
}
