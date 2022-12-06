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
  Client,
} from '../models';
import {AgentSolutionRepository} from '../repositories';

export class AgentSolutionClientController {
  constructor(
    @repository(AgentSolutionRepository) protected agentSolutionRepository: AgentSolutionRepository,
  ) { }

  @get('/agent-solutions/{id}/client', {
    responses: {
      '200': {
        description: 'AgentSolution has one Client',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Client),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Client>,
  ): Promise<Client> {
    return this.agentSolutionRepository.client(id).get(filter);
  }

  @post('/agent-solutions/{id}/client', {
    responses: {
      '200': {
        description: 'AgentSolution model instance',
        content: {'application/json': {schema: getModelSchemaRef(Client)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AgentSolution.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Client, {
            title: 'NewClientInAgentSolution',
            exclude: ['id'],
            optional: ['id']
          }),
        },
      },
    }) client: Omit<Client, 'id'>,
  ): Promise<Client> {
    return this.agentSolutionRepository.client(id).create(client);
  }

  @patch('/agent-solutions/{id}/client', {
    responses: {
      '200': {
        description: 'AgentSolution.Client PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Client, {partial: true}),
        },
      },
    })
    client: Partial<Client>,
    @param.query.object('where', getWhereSchemaFor(Client)) where?: Where<Client>,
  ): Promise<Count> {
    return this.agentSolutionRepository.client(id).patch(client, where);
  }

  @del('/agent-solutions/{id}/client', {
    responses: {
      '200': {
        description: 'AgentSolution.Client DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Client)) where?: Where<Client>,
  ): Promise<Count> {
    return this.agentSolutionRepository.client(id).delete(where);
  }
}
