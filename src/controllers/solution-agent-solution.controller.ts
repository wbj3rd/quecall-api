import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Solution,
  AgentSolution,
} from '../models';
import {SolutionRepository} from '../repositories';

export class SolutionAgentSolutionController {
  constructor(
    @repository(SolutionRepository) protected solutionRepository: SolutionRepository,
  ) { }

  @get('/solutions/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Array of Solution has many AgentSolution',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AgentSolution)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<AgentSolution>,
  ): Promise<AgentSolution[]> {
    return this.solutionRepository.agentSolutions(id).find(filter);
  }

  @post('/solutions/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Solution model instance',
        content: {'application/json': {schema: getModelSchemaRef(AgentSolution)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Solution.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AgentSolution, {
            title: 'NewAgentSolutionInSolution',
            exclude: ['id'],
            optional: ['solutionId']
          }),
        },
      },
    }) agentSolution: Omit<AgentSolution, 'id'>,
  ): Promise<AgentSolution> {
    return this.solutionRepository.agentSolutions(id).create(agentSolution);
  }

  @patch('/solutions/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Solution.AgentSolution PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AgentSolution, {partial: true}),
        },
      },
    })
    agentSolution: Partial<AgentSolution>,
    @param.query.object('where', getWhereSchemaFor(AgentSolution)) where?: Where<AgentSolution>,
  ): Promise<Count> {
    return this.solutionRepository.agentSolutions(id).patch(agentSolution, where);
  }

  @del('/solutions/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Solution.AgentSolution DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AgentSolution)) where?: Where<AgentSolution>,
  ): Promise<Count> {
    return this.solutionRepository.agentSolutions(id).delete(where);
  }
}
