import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {Agent} from './agent.model';
import {Client} from './client.model';
import {Form} from './form.model';
import {Music} from './music.model';
import {PhoneNumber} from './phone-number.model';
import {Queue} from './queue.model';
import {UserModifiableEntity} from './user-modifiable-entity.model';

@model({settings: {strict: false}})
export class Solution extends UserModifiableEntity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',

  })
  name: string;

  @property({
    type: 'string',

  })
  type: string;

  @property({
    type: 'string',

  })
  description: string;


  @property({
    type: 'number',
    default: 0

  })
  active: number;






  constructor(data?: Partial<Solution>) {
    super();
  }
}

export interface SolutionRelations {
  // describe navigational properties here
}

export type SolutionWithRelations = Solution & SolutionRelations;
