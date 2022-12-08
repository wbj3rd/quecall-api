import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Queue, QueueRelations } from '../models ';
export declare class QueueRepository extends DefaultCrudRepository<Queue, typeof Queue.prototype.id, QueueRelations> {
    constructor(dataSource: PostgresDataSource);
}
