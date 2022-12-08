import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'testRemote',
  connector: 'rest',
  baseURL: 'http://localhost:3000',
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TestRemoteDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'testRemote';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.testRemote', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
