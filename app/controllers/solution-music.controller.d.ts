import { Count, Filter, Where } from '@loopback/repository';
import { Solution, Music } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionMusicController {
    protected solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    get(id: number, filter?: Filter<Music>): Promise<Music>;
    create(id: typeof Solution.prototype.id, music: Omit<Music, 'id'>): Promise<Music>;
    patch(id: number, music: Partial<Music>, where?: Where<Music>): Promise<Count>;
    delete(id: number, where?: Where<Music>): Promise<Count>;
}
