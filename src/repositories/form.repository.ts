import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Form, FormRelations, Solution} from '../models';
import {SolutionRepository} from './solution.repository';

export class FormRepository extends DefaultCrudRepository<
  Form,
  typeof Form.prototype.id,
  FormRelations
> {

  public readonly solution: HasOneRepositoryFactory<Solution, typeof Form.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('SolutionRepository') protected solutionRepositoryGetter: Getter<SolutionRepository>,
  ) {
    super(Form, dataSource);
    this.solution = this.createHasOneRepositoryFactoryFor('solution', solutionRepositoryGetter);
    this.registerInclusionResolver('solution', this.solution.inclusionResolver);
  }
}
