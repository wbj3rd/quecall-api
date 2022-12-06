import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Client } from '../models';
import { ClientRepository } from '../repositories';
import { PingController } from './ping.controller';
export declare class ClientsController {
    clientRepository: ClientRepository;
    pingController: PingController;
    constructor(clientRepository: ClientRepository, pingController: PingController);
    create(client: Omit<Client, 'id'>): Promise<Client>;
    count(where?: Where<Client>): Promise<Count>;
    find(filter?: Filter<Client>): Promise<Client[]>;
    updateAll(client: Client, where?: Where<Client>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Client>): Promise<Client>;
    updateById(id: number, client: Client): Promise<void>;
    replaceById(id: number, client: Client): Promise<void>;
    deleteById(id: number): Promise<void>;
}
