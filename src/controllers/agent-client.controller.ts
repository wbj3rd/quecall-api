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
Client,
} from '../models';
import {AgentRepository} from '../repositories';

export class AgentClientController {
  constructor(
    @repository(AgentRepository) protected agentRepository: AgentRepository,
  ) { }

  @get('/agents/{id}/clients', {
    responses: {
      '200': {
        description: 'Array of Agent has many Client through AgentSolution',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Client)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Client>,
  ): Promise<Client[]> {
    return this.agentRepository.clients(id).find(filter);
  }

  @post('/agents/{id}/clients', {
    responses: {
      '200': {
        description: 'create a Client model instance',
        content: {'application/json': {schema: getModelSchemaRef(Client)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Agent.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Client, {
            title: 'NewClientInAgent',
            exclude: ['id'],
          }),
        },
      },
    }) client: Omit<Client, 'id'>,
  ): Promise<Client> {
    return this.agentRepository.clients(id).create(client);
  }

  @patch('/agents/{id}/clients', {
    responses: {
      '200': {
        description: 'Agent.Client PATCH success count',
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
    return this.agentRepository.clients(id).patch(client, where);
  }

  @del('/agents/{id}/clients', {
    responses: {
      '200': {
        description: 'Agent.Client DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Client)) where?: Where<Client>,
  ): Promise<Count> {
    return this.agentRepository.clients(id).delete(where);
  }
}
