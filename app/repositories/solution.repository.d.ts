import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Solution, SolutionRelations } from '../models';
export declare class SolutionRepository extends DefaultCrudRepository<Solution, typeof Solution.prototype.id, SolutionRelations> {
    constructor(dataSource: PostgresDataSource);
}
