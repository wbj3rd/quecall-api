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
  Agent,
} from '../models';
import {AgentSolutionRepository} from '../repositories';

export class AgentSolutionAgentController {
  constructor(
    @repository(AgentSolutionRepository) protected agentSolutionRepository: AgentSolutionRepository,
  ) { }

  @get('/agent-solutions/{id}/agent', {
    responses: {
      '200': {
        description: 'AgentSolution has one Agent',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Agent),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Agent>,
  ): Promise<Agent> {
    return this.agentSolutionRepository.agent(id).get(filter);
  }

  @post('/agent-solutions/{id}/agent', {
    responses: {
      '200': {
        description: 'AgentSolution model instance',
        content: {'application/json': {schema: getModelSchemaRef(Agent)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AgentSolution.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agent, {
            title: 'NewAgentInAgentSolution',
            exclude: ['id'],
            optional: ['id']
          }),
        },
      },
    }) agent: Omit<Agent, 'id'>,
  ): Promise<Agent> {
    return this.agentSolutionRepository.agent(id).create(agent);
  }

  @patch('/agent-solutions/{id}/agent', {
    responses: {
      '200': {
        description: 'AgentSolution.Agent PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agent, {partial: true}),
        },
      },
    })
    agent: Partial<Agent>,
    @param.query.object('where', getWhereSchemaFor(Agent)) where?: Where<Agent>,
  ): Promise<Count> {
    return this.agentSolutionRepository.agent(id).patch(agent, where);
  }

  @del('/agent-solutions/{id}/agent', {
    responses: {
      '200': {
        description: 'AgentSolution.Agent DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Agent)) where?: Where<Agent>,
  ): Promise<Count> {
    return this.agentSolutionRepository.agent(id).delete(where);
  }
}
