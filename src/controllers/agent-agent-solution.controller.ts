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
  Agent,
  AgentSolution,
} from '../models';
import {AgentRepository} from '../repositories';

export class AgentAgentSolutionController {
  constructor(
    @repository(AgentRepository) protected agentRepository: AgentRepository,
  ) { }

  @get('/agents/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Array of Agent has many AgentSolution',
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
    return this.agentRepository.agentSolutions(id).find(filter);
  }

  @post('/agents/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Agent model instance',
        content: {'application/json': {schema: getModelSchemaRef(AgentSolution)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Agent.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AgentSolution, {
            title: 'NewAgentSolutionInAgent',
            exclude: ['id'],
            optional: ['agentId']
          }),
        },
      },
    }) agentSolution: Omit<AgentSolution, 'id'>,
  ): Promise<AgentSolution> {
    return this.agentRepository.agentSolutions(id).create(agentSolution);
  }

  @patch('/agents/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Agent.AgentSolution PATCH success count',
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
    return this.agentRepository.agentSolutions(id).patch(agentSolution, where);
  }

  @del('/agents/{id}/agent-solutions', {
    responses: {
      '200': {
        description: 'Agent.AgentSolution DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AgentSolution)) where?: Where<AgentSolution>,
  ): Promise<Count> {
    return this.agentRepository.agentSolutions(id).delete(where);
  }
}
