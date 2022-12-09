import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Form, FormRelations, Solution } from '../models';
import { SolutionRepository } from './solution.repository';
export declare class FormRepository extends DefaultCrudRepository<Form, typeof Form.prototype.id, FormRelations> {
    protected solutionRepositoryGetter: Getter<SolutionRepository>;
    readonly solution: HasOneRepositoryFactory<Solution, typeof Form.prototype.id>;
    constructor(dataSource: PostgresDataSource, solutionRepositoryGetter: Getter<SolutionRepository>);
}
