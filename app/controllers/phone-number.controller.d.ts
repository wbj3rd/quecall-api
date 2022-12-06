import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PhoneNumber } from '../models';
import { PhoneNumberRepository } from '../repositories';
export declare class PhoneNumberController {
    phoneNumberRepository: PhoneNumberRepository;
    constructor(phoneNumberRepository: PhoneNumberRepository);
    create(phoneNumber: Omit<PhoneNumber, 'id'>): Promise<PhoneNumber>;
    count(where?: Where<PhoneNumber>): Promise<Count>;
    find(filter?: Filter<PhoneNumber>): Promise<PhoneNumber[]>;
    updateAll(phoneNumber: PhoneNumber, where?: Where<PhoneNumber>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PhoneNumber>): Promise<PhoneNumber>;
    updateById(id: number, phoneNumber: PhoneNumber): Promise<void>;
    replaceById(id: number, phoneNumber: PhoneNumber): Promise<void>;
    deleteById(id: number): Promise<void>;
}
