import { AgentSolution } from './agent-solution.model';
import { Agent } from './agent.model';
import { Form } from './form.model';
import { Music } from './music.model';
import { PhoneNumber } from './phone-number.model';
import { Queue } from './queue.model';
import { UserModifiableEntity } from './user-modifiable-entity.model';
export declare class Solution extends UserModifiableEntity {
    id?: number;
    name: string;
    type: string;
    description: string;
    active: number;
    agentIds: number[];
    phoneNumber: PhoneNumber;
    music: Music;
    queue: Queue;
    agents: Agent[];
    clientId: number;
    agentSolutions: AgentSolution[];
    form: Form;
    formId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Solution>);
}
export interface SolutionRelations {
}
export declare type SolutionWithRelations = Solution & SolutionRelations;
