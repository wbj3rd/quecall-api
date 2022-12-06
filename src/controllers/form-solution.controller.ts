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
  Form,
  Solution,
} from '../models';
import {FormRepository} from '../repositories';

export class FormSolutionController {
  constructor(
    @repository(FormRepository) protected formRepository: FormRepository,
  ) { }

  @get('/forms/{id}/solution', {
    responses: {
      '200': {
        description: 'Form has one Solution',
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
    return this.formRepository.solution(id).get(filter);
  }

  @post('/forms/{id}/solution', {
    responses: {
      '200': {
        description: 'Form model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solution)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Form.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solution, {
            title: 'NewSolutionInForm',
            exclude: ['id'],
            optional: ['formId']
          }),
        },
      },
    }) solution: Omit<Solution, 'id'>,
  ): Promise<Solution> {
    return this.formRepository.solution(id).create(solution);
  }

  @patch('/forms/{id}/solution', {
    responses: {
      '200': {
        description: 'Form.Solution PATCH success count',
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
    return this.formRepository.solution(id).patch(solution, where);
  }

  @del('/forms/{id}/solution', {
    responses: {
      '200': {
        description: 'Form.Solution DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solution)) where?: Where<Solution>,
  ): Promise<Count> {
    return this.formRepository.solution(id).delete(where);
  }
}
