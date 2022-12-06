import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {AgentSolution} from '../models';
import {AgentSolutionRepository} from '../repositories';

export class AgentSolutionComboController {
  constructor(
    @repository(AgentSolutionRepository)
    public agentSolutionRepository : AgentSolutionRepository,
  ) {}

  @post('/agent-solution-combo')
  @response(200, {
    description: 'AgentSolution model instance',
    content: {'application/json': {schema: getModelSchemaRef(AgentSolution)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AgentSolution, {
            title: 'NewAgentSolution',
            exclude: ['id'],
          }),
        },
      },
    })
    agentSolution: Omit<AgentSolution, 'id'>,
  ): Promise<AgentSolution> {
    return this.agentSolutionRepository.create(agentSolution);
  }

  @get('/agent-solution-combo/count')
  @response(200, {
    description: 'AgentSolution model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AgentSolution) where?: Where<AgentSolution>,
  ): Promise<Count> {
    return this.agentSolutionRepository.count(where);
  }

  @get('/agent-solution-combo')
  @response(200, {
    description: 'Array of AgentSolution model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AgentSolution, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AgentSolution) filter?: Filter<AgentSolution>,
  ): Promise<AgentSolution[]> {
    return this.agentSolutionRepository.find(filter);
  }

  @patch('/agent-solution-combo')
  @response(200, {
    description: 'AgentSolution PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AgentSolution, {partial: true}),
        },
      },
    })
    agentSolution: AgentSolution,
    @param.where(AgentSolution) where?: Where<AgentSolution>,
  ): Promise<Count> {
    return this.agentSolutionRepository.updateAll(agentSolution, where);
  }

  @get('/agent-solution-combo/{id}')
  @response(200, {
    description: 'AgentSolution model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AgentSolution, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AgentSolution, {exclude: 'where'}) filter?: FilterExcludingWhere<AgentSolution>
  ): Promise<AgentSolution> {
    return this.agentSolutionRepository.findById(id, filter);
  }

  @patch('/agent-solution-combo/{id}')
  @response(204, {
    description: 'AgentSolution PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AgentSolution, {partial: true}),
        },
      },
    })
    agentSolution: AgentSolution,
  ): Promise<void> {
    await this.agentSolutionRepository.updateById(id, agentSolution);
  }

  @put('/agent-solution-combo/{id}')
  @response(204, {
    description: 'AgentSolution PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() agentSolution: AgentSolution,
  ): Promise<void> {
    await this.agentSolutionRepository.replaceById(id, agentSolution);
  }

  @del('/agent-solution-combo/{id}')
  @response(204, {
    description: 'AgentSolution DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.agentSolutionRepository.deleteById(id);
  }
}
