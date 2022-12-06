import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solution,
  Client,
} from '../models';
import {SolutionRepository} from '../repositories';

export class SolutionClientController {
  constructor(
    @repository(SolutionRepository)
    public solutionRepository: SolutionRepository,
  ) { }

  @get('/solutions/{id}/client', {
    responses: {
      '200': {
        description: 'Client belonging to Solution',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Client)},
          },
        },
      },
    },
  })
  async getClient(
    @param.path.number('id') id: typeof Solution.prototype.id,
  ): Promise<Client> {
    return this.solutionRepository.client(id);
  }
}
