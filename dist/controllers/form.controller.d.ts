import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Form } from '../models';
import { FormRepository } from '../repositories';
export declare class FormController {
    formRepository: FormRepository;
    constructor(formRepository: FormRepository);
    create(form: Omit<Form, 'id'>): Promise<Form>;
    count(where?: Where<Form>): Promise<Count>;
    find(filter?: Filter<Form>): Promise<Form[]>;
    updateAll(form: Form, where?: Where<Form>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Form>): Promise<Form>;
    updateById(id: number, form: Form): Promise<void>;
    replaceById(id: number, form: Form): Promise<void>;
    deleteById(id: number): Promise<void>;
}
