import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Agent, AgentRelations} from '../models';

export class AgentRepository extends DefaultCrudRepository<
  Agent,
  typeof Agent.prototype.id,
  AgentRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Agent, dataSource);
  }
}
