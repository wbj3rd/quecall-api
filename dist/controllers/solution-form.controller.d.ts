import { Count, Filter, Where } from '@loopback/repository';
import { Solution, Form } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionFormController {
    protected solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    get(id: number, filter?: Filter<Form>): Promise<Form>;
    create(id: typeof Solution.prototype.id, form: Omit<Form, 'id'>): Promise<Form>;
    patch(id: number, form: Partial<Form>, where?: Where<Form>): Promise<Count>;
    delete(id: number, where?: Where<Form>): Promise<Count>;
}
