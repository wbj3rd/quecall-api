import { BaseEntity } from './base-entity.model';
export declare class Music extends BaseEntity {
    id?: number;
    name: string;
    link: string;
    codec?: string;
    [prop: string]: any;
    constructor(data?: Partial<Music>);
}
export interface MusicRelations {
}
export declare type MusicWithRelations = Music & MusicRelations;
