import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Client} from '../models';
import {ClientRepository} from '../repositories';
import {PingController} from './ping.controller';

export class ClientsController {
  constructor(
    @repository(ClientRepository)
    public clientRepository: ClientRepository,
    @inject('controllers.PingController')
    public pingController: PingController
  ) { }

  @post('/clients')
  @response(200, {
    description: 'Client model instance',
    content: {'application/json': {schema: getModelSchemaRef(Client)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Client, {
            title: 'NewClient',
            exclude: ['id'],
          }),
        },
      },
    })
    client: Omit<Client, 'id'>,
  ): Promise<Client> {
    return this.clientRepository.create(client);
  }

  @get('/clients/count')
  @response(200, {
    description: 'Client model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Client) where?: Where<Client>,
  ): Promise<Count> {
    return this.clientRepository.count(where);
  }

  @get('/clients')
  @response(200, {
    description: 'Array of Client model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Client, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Client) filter?: Filter<Client>,
  ): Promise<Client[]> {
    return this.clientRepository.find(filter);
  }

  @patch('/clients')
  @response(200, {
    description: 'Client PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Client, {partial: true}),
        },
      },
    })
    client: Client,
    @param.where(Client) where?: Where<Client>,
  ): Promise<Count> {
    return this.clientRepository.updateAll(client, where);
  }

  @get('/clients/{id}')
  @response(200, {
    description: 'Client model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Client, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Client, {exclude: 'where'}) filter?: FilterExcludingWhere<Client>
  ): Promise<Client> {
    return this.clientRepository.findById(id, filter);
  }

  @patch('/clients/{id}')
  @response(204, {
    description: 'Client PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Client, {partial: true}),
        },
      },
    })
    client: Client,
  ): Promise<void> {
    await this.clientRepository.updateById(id, client);
  }

  @put('/clients/{id}')
  @response(204, {
    description: 'Client PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() client: Client,
  ): Promise<void> {
    await this.clientRepository.replaceById(id, client);
  }

  @del('/clients/{id}')
  @response(204, {
    description: 'Client DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.clientRepository.deleteById(id);
  }
}
