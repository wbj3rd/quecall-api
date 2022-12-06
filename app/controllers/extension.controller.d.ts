import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Extension } from '../models';
import { ExtensionRepository } from '../repositories';
export declare class ExtensionController {
    extensionRepository: ExtensionRepository;
    constructor(extensionRepository: ExtensionRepository);
    create(extension: Omit<Extension, 'id'>): Promise<Extension>;
    count(where?: Where<Extension>): Promise<Count>;
    find(filter?: Filter<Extension>): Promise<Extension[]>;
    updateAll(extension: Extension, where?: Where<Extension>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Extension>): Promise<Extension>;
    updateById(id: number, extension: Extension): Promise<void>;
    replaceById(id: number, extension: Extension): Promise<void>;
    deleteById(id: number): Promise<void>;
}
