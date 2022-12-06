import { Count, Filter, Where } from '@loopback/repository';
import { Client, Solution } from '../models';
import { ClientRepository } from '../repositories';
export declare class ClientSolutionController {
    protected clientRepository: ClientRepository;
    constructor(clientRepository: ClientRepository);
    find(id: number, filter?: Filter<Solution>): Promise<Solution[]>;
    create(id: typeof Client.prototype.id, solution: Omit<Solution, 'id'>): Promise<Solution>;
    patch(id: number, solution: Partial<Solution>, where?: Where<Solution>): Promise<Count>;
    delete(id: number, where?: Where<Solution>): Promise<Count>;
}
