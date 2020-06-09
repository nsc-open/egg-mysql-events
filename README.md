# egg-mysql-events

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mysql-events.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mysql-events
[travis-image]: https://img.shields.io/travis/eggjs/egg-mysql-events.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mysql-events
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mysql-events.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mysql-events?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mysql-events.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mysql-events
[snyk-image]: https://snyk.io/test/npm/egg-mysql-events/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mysql-events
[download-image]: https://img.shields.io/npm/dm/egg-mysql-events.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mysql-events

This is an egg plugin based on https://www.npmjs.com/package/@rodrigogs/mysql-events

## Install

```bash
$ npm i egg-mysql-events --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mysqlEvents = {
  enable: true,
  package: 'egg-mysql-events',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mysqlEvents = config.mysqlEvents = [{
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'mysql-user',
    password: 'password'
  },
  triggers: [{
    name: 'TEST',
    expression: 'db.t_projects',
    onEvent: ({ event, app }) => console.log(event, app)
  }]
}]
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
