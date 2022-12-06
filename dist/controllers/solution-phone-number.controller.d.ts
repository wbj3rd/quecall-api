import { Count, Filter, Where } from '@loopback/repository';
import { Solution, PhoneNumber } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionPhoneNumberController {
    protected solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    get(id: number, filter?: Filter<PhoneNumber>): Promise<PhoneNumber>;
    create(id: typeof Solution.prototype.id, phoneNumber: Omit<PhoneNumber, 'id'>): Promise<PhoneNumber>;
    patch(id: number, phoneNumber: Partial<PhoneNumber>, where?: Where<PhoneNumber>): Promise<Count>;
    delete(id: number, where?: Where<PhoneNumber>): Promise<Count>;
}
