import {hasOne, model, property} from '@loopback/repository';
import {Agent} from './agent.model';
import {Client} from './client.model';
import {Solution} from './solution.model';
import {UserModifiableEntity} from './user-modifiable-entity.model';

@model({settings: {strict: false}})
export class AgentSolution extends UserModifiableEntity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  agentId: number;

  @property({
    type: 'number',
    required: true,
  })
  solutionId: number;

  @property({
    type: 'number',
    required: true,
  })
  clientId: number;

  @property({
    type: 'number',
    required: true,
  })
  agentAccepted: number;

  @property({
    type: 'number',
    default: 0,
  })
  agentActivated?: number;

  @property({
    type: 'number',
    default: 0,
  })
  agentRemoved?: number;

  @property({
    type: 'number',
    default: 1,
  })
  solutionActive?: number;





  @hasOne(() => Solution, {keyFrom: 'solutionId', keyTo: "id"})
  solution: Solution;

  @hasOne(() => Client, {keyFrom: 'clientId', keyTo: 'id'})
  client: Client;

  @hasOne(() => Agent, {keyFrom: 'agentId', keyTo: 'id'})
  agent: Agent;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AgentSolution>) {
    super(data);
  }
}

export interface AgentSolutionRelations {
  // describe navigational properties here
}

export type AgentSolutionWithRelations = AgentSolution & AgentSolutionRelations;
