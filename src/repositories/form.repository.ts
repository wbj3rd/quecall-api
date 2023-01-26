import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Form, FormRelations} from '../models';

export class FormRepository extends DefaultCrudRepository<
  Form,
  typeof Form.prototype.id,
  FormRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Form, dataSource);
  }
}
