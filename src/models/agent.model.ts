import {model, property} from '@loopback/repository';



import {User} from './user.model';

@model({settings: {strict: false}})
export class Agent extends User {




  @property({
    type: 'number',
  })
  id?: number;
  //@hasOne(() => Extension)
  //extension: Extension;

  @property({
    type: 'string',

  })
  type: string;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agent>) {
    super(data);
  }
}

export interface AgentRelations {
  // describe navigational properties here
}

export type AgentWithRelations = Agent & AgentRelations;
