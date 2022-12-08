import { Provider } from '@loopback/core';
import { TestRemoteDataSource } from '../datasources';
export interface TestService {
}
export declare class TestServiceProvider implements Provider<TestService> {
    protected dataSource: TestRemoteDataSource;
    constructor(dataSource?: TestRemoteDataSource);
    value(): Promise<TestService>;
}
