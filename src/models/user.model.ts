import {hasOne, model, property} from '@loopback/repository';
import {IAuthUser} from 'loopback4-authentication';
import { UserModifiableEntity } from './user-modifiable-entity.model';



@model({
  name: 'users',
  settings:{
    strict: "filter"
  }
})
export class User extends UserModifiableEntity implements IAuthUser {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    name: 'first_name',
       postgresql: {
      columnName: 'first_name',
      dataType: 'VARCHAR',
      dataLength: 20,
      nullable: 'YES',
    },
  })
  firstName?: string;

  @property({
    type: 'string',
    name: 'last_name',  
      postgresql: {
      columnName: 'last_name',
      dataType: 'VARCHAR',
      dataLength: 20,
      nullable: 'YES',
    },
  })
  lastName?: string;

  @property({
    type: 'string',
    name: 'middle_name',
  })
  middleName?: string;

  @property({
    type: 'string',
   
  })
  username: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  voice_sample?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  industry?: string;

  @property({
    type: 'number',
    name: 'default_tenant',
  })
  defaultTenant: number;

  @property({
    type: 'date',
    name: 'last_login',
    postgresql: {
      column: 'last_login',
    },
  })
  lastLogin?: string;

  @property({
    type: "string",
    name: "kc_id"
  })
  kc_id?:string

  @property({
    type: "object",
    name: "attributes"
  })
  attributes?:{}

  @property({
    type: "object",
    name: "user_profile_metadata"
  })
  userProfileMetadata?:{}

  @property({
    type: "boolean",
    name: "email_verified"
  })
  emailVerified?:boolean

  @property({
    type: "boolean",
    name: "profile_complete"
  })
  profileComplete?:boolean

  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
 
}

export type UserWithRelations = User & UserRelations;
