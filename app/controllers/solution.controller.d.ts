import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Solution } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionController {
    solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    create(solution: Omit<Solution, 'id'>): Promise<Solution>;
    count(where?: Where<Solution>): Promise<Count>;
    find(filter?: Filter<Solution>): Promise<Solution[]>;
    updateAll(solution: Solution, where?: Where<Solution>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Solution>): Promise<Solution>;
    updateById(id: number, solution: Solution): Promise<void>;
    replaceById(id: number, solution: Omit<Solution, 'phoneNumber'>): Promise<any>;
    deleteById(id: number): Promise<void>;
}
