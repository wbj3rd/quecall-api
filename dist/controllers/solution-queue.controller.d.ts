import { Count, Filter, Where } from '@loopback/repository';
import { Solution, Queue } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionQueueController {
    protected solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    get(id: number, filter?: Filter<Queue>): Promise<Queue>;
    create(id: typeof Solution.prototype.id, queue: Omit<Queue, 'id'>): Promise<Queue>;
    patch(id: number, queue: Partial<Queue>, where?: Where<Queue>): Promise<Count>;
    delete(id: number, where?: Where<Queue>): Promise<Count>;
}
