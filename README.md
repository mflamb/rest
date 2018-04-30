# Rest

Rest api demo to be turned into a Yeoman generator later.

## Features

* [nodemon](https://github.com/remy/nodemon) workflow
* [.env](https://github.com/motdotla/dotenv) configs
* [helmet](https://github.com/helmetjs/helmet) security on an [express](https://github.com/expressjs/express) api
* json [body-parser](https://github.com/expressjs/body-parser)
* [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) at http://localhost:3333/api/api-docs.json
* [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) at http://localhost:3333/api/api-docs/#/
* autoload services, models, and controllers with [consign](https://github.com/jarradseers/consign)
* logging with log levels using [pino](https://github.com/pinojs/pino)
* [Mongo](https://github.com/mongodb/mongo) ORM with [Mongoose](https://github.com/Automattic/mongoose)
* [mocha](https://github.com/mochajs/mocha) tests using [chai](https://github.com/chaijs/chai) should
* [chai-http](https://github.com/chaijs/chai-http) E2E tests

## Getting started

```bash
git clone git@github.com:pajtai/rest.git
cd rest
npm i
npm run dev
```
