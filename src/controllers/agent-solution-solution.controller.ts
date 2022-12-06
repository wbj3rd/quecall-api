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
  AgentSolution,
  Solution,
} from '../models';
import {AgentSolutionRepository} from '../repositories';

export class AgentSolutionSolutionController {
  constructor(
    @repository(AgentSolutionRepository) protected agentSolutionRepository: AgentSolutionRepository,
  ) { }

  @get('/agent-solutions/{id}/solution', {
    responses: {
      '200': {
        description: 'AgentSolution has one Solution',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Solution),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Solution>,
  ): Promise<Solution> {
    return this.agentSolutionRepository.solution(id).get(filter);
  }

  @post('/agent-solutions/{id}/solution', {
    responses: {
      '200': {
        description: 'AgentSolution model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solution)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AgentSolution.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solution, {
            title: 'NewSolutionInAgentSolution',
            exclude: ['id'],
            optional: ['id']
          }),
        },
      },
    }) solution: Omit<Solution, 'id'>,
  ): Promise<Solution> {
    return this.agentSolutionRepository.solution(id).create(solution);
  }

  @patch('/agent-solutions/{id}/solution', {
    responses: {
      '200': {
        description: 'AgentSolution.Solution PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solution, {partial: true}),
        },
      },
    })
    solution: Partial<Solution>,
    @param.query.object('where', getWhereSchemaFor(Solution)) where?: Where<Solution>,
  ): Promise<Count> {
    return this.agentSolutionRepository.solution(id).patch(solution, where);
  }

  @del('/agent-solutions/{id}/solution', {
    responses: {
      '200': {
        description: 'AgentSolution.Solution DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solution)) where?: Where<Solution>,
  ): Promise<Count> {
    return this.agentSolutionRepository.solution(id).delete(where);
  }
}
