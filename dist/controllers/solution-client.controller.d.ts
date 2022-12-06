import { Solution, Client } from '../models';
import { SolutionRepository } from '../repositories';
export declare class SolutionClientController {
    solutionRepository: SolutionRepository;
    constructor(solutionRepository: SolutionRepository);
    getClient(id: typeof Solution.prototype.id): Promise<Client>;
}
