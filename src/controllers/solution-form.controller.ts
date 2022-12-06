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
  Form,
} from '../models';
import {SolutionRepository} from '../repositories';

export class SolutionFormController {
  constructor(
    @repository(SolutionRepository) protected solutionRepository: SolutionRepository,
  ) { }

  @get('/solutions/{id}/form', {
    responses: {
      '200': {
        description: 'Solution has one Form',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Form),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Form>,
  ): Promise<Form> {
    return this.solutionRepository.form(id).get(filter);
  }

  @post('/solutions/{id}/form', {
    responses: {
      '200': {
        description: 'Solution model instance',
        content: {'application/json': {schema: getModelSchemaRef(Form)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Solution.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Form, {
            title: 'NewFormInSolution',
            exclude: ['id'],
            optional: ['solutionId']
          }),
        },
      },
    }) form: Omit<Form, 'id'>,
  ): Promise<Form> {
    return this.solutionRepository.form(id).create(form);
  }

  @patch('/solutions/{id}/form', {
    responses: {
      '200': {
        description: 'Solution.Form PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Form, {partial: true}),
        },
      },
    })
    form: Partial<Form>,
    @param.query.object('where', getWhereSchemaFor(Form)) where?: Where<Form>,
  ): Promise<Count> {
    return this.solutionRepository.form(id).patch(form, where);
  }

  @del('/solutions/{id}/form', {
    responses: {
      '200': {
        description: 'Solution.Form DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Form)) where?: Where<Form>,
  ): Promise<Count> {
    return this.solutionRepository.form(id).delete(where);
  }
}
