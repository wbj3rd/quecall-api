import { Count, Filter, Where } from '@loopback/repository';
import { Form, Solution } from '../models';
import { FormRepository } from '../repositories';
export declare class FormSolutionController {
    protected formRepository: FormRepository;
    constructor(formRepository: FormRepository);
    get(id: number, filter?: Filter<Solution>): Promise<Solution>;
    create(id: typeof Form.prototype.id, solution: Omit<Solution, 'id'>): Promise<Solution>;
    patch(id: number, solution: Partial<Solution>, where?: Where<Solution>): Promise<Count>;
    delete(id: number, where?: Where<Solution>): Promise<Count>;
}
