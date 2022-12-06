import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Queue } from '../models';
import { QueueRepository } from '../repositories';
export declare class QueueController {
    queueRepository: QueueRepository;
    constructor(queueRepository: QueueRepository);
    create(queue: Omit<Queue, 'id'>): Promise<Queue>;
    count(where?: Where<Queue>): Promise<Count>;
    find(filter?: Filter<Queue>): Promise<Queue[]>;
    updateAll(queue: Queue, where?: Where<Queue>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Queue>): Promise<Queue>;
    updateById(id: number, queue: Queue): Promise<void>;
    replaceById(id: number, queue: Queue): Promise<void>;
    deleteById(id: number): Promise<void>;
}
