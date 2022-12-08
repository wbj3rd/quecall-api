import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {AgentSolution} from './agent-solution.model';
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


  @property({
    type: 'array',
    itemType: 'number'

  })
  agentIds: number[];

  // @hasOne(() => PhoneNumber)
  // phoneNumber: PhoneNumber;

  // @hasOne(() => Music)
  // music: Music;

  // @hasOne(() => Queue)
  // queue: Queue;



  // @hasMany(() => Agent, {through: {model: () => AgentSolution}})
  // agents: Agent[];
  // @belongsTo(() => Client)
  // clientId: number;

  // @hasMany(() => AgentSolution)
  // agentSolutions: AgentSolution[];

  // @hasOne(() => Form, {keyFrom: 'formId', keyTo: "id"})
  form: Form;

  @property({
    type: 'number',
  })
  formId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Solution>) {
    super();
  }
}

export interface SolutionRelations {
  // describe navigational properties here
}

export type SolutionWithRelations = Solution & SolutionRelations;
