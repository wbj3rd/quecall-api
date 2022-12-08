import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { Music, MusicRelations } from '../models ';
export declare class MusicRepository extends DefaultCrudRepository<Music, typeof Music.prototype.id, MusicRelations> {
    constructor(dataSource: PostgresDataSource);
}
