import {hasOne, model, property} from '@loopback/repository';

import {Solution} from './solution.model';
import {UserModifiableEntity} from './user-modifiable-entity.model';

@model({settings: {strict: false}})
export class Form extends UserModifiableEntity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
    default: {},
  })
  formData?: object;

  @property({
    type: 'number',
    default: 0,
  })
  active?: number;

  @property({
    type: 'number',
  })
  solutionId?: number;

  @hasOne(() => Solution)
  solution: Solution;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Form>) {
    super(data);
  }
}

export interface FormRelations {
  // describe navigational properties here
}

export type FormWithRelations = Form & FormRelations;
