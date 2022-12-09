import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Agent, AgentRelations } from '../models';
export declare class AgentRepository extends DefaultCrudRepository<Agent, typeof Agent.prototype.id, AgentRelations> {
    constructor(dataSource: PostgresDataSource);
}
