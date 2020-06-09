'use strict';

const mock = require('egg-mock');

describe('test/mysql-events.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mysql-events-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mysqlEvents')
      .expect(200);
  });
});
