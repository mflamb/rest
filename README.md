# Rest

Rest api demo to be turned into a Yeoman generator later.

## TOC

### Part 1
* [Initial minimal app](https://github.com/pajtai/rest/blob/ff90b38546ca1cf0423a22f8c79f724a7195cf02/index.js)
* [Adding a 404 page](https://github.com/pajtai/rest/blob/8a045f7b4f3ddbc6af1ff297b204017fd5dd10cc/index.js)
* [Adding nodemon to the workflow](https://github.com/pajtai/rest/blob/c6bdd7d12c4867970f33089aa3a483478bafee4b/package.json#L14)
* [Adding logging](https://github.com/pajtai/rest/blob/f64951083fa9658e7483341b5b28ba39ae2ce366/index.js)
* [Prettifying the log output](https://github.com/pajtai/rest/blob/f64951083fa9658e7483341b5b28ba39ae2ce366/package.json#L15)
* [Using .env](https://github.com/pajtai/rest/blob/7975e4060697989f23a50653031b904cfddca35f/index.js)
* [Using helment for some added security](https://github.com/pajtai/rest/blob/3abb1095e119a71995dd9382ad68aa75d187d90d/index.js#L16)
* [Adding eslint](https://github.com/pajtai/rest/blob/1fe57a77be91ef6b47e37bf9f0dc057ce7e31310/package.json#L18)

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

You should have [node](https://nodejs.org/en/) installed (you can use [NVM](https://github.com/creationix/nvm)) and 
[Mongo](https://www.mongodb.com/) installed (you can use [Brew](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew) 
and [Brew Services](https://github.com/Homebrew/homebrew-services))

```bash
git clone git@github.com:pajtai/rest.git
cd rest
npm i
npm run dev
```
