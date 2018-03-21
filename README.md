# koa-starter

## Project Status

## Contributing to the project

Please feel free to submit a PR if you'd like to suggest changes and improvements.

## Overview

The project provides a simple node application with

* [Koa](http://koajs.com/) for middleware,
* [request-promise-native](https://github.com/request/request-promise-native) for making REST requests
* [Npm](http://npmjs.com/) scripts for tasks,
* [wercker](https://app.wercker.com/) for continues integration (CI),

## Getting started

1.  clone the project from https://github.com/devillexio/koa-starter
1.  run `npm install` to install dependencies
1.  run `npm run develop` to start the project with live code refresh. Any changes to \*.js files in app will result in a reload.

## Code Style and Linting

To ensure that code style and practices are kept consistent, this project
includes

* [EditorConfig](http://editorconfig.org/) to override editor specific
  formatting (see '.editorconfig' file). Plugins for popular IDE's are
  available.
* [ESLint](http://eslint.org/) for linting of JavaScript. We use the popular
  [eslint-config-standard](https://github.com/standard/eslint-config-standard),
  based on [JavaScript Standard Style](https://standardjs.com).

## NPM Tasks

Some NPM tasks are included to simplify the workflow:

* `npm start` - Will run the application with the `node app/app.js` command.
* `npm run develop` - Launch the application with 'nodemon'. App will restart when any js file in 'app' is modified.
* `npm run lint` - Lints the JavaScript files in 'app'.

## Environment Variables (.env)

Environment variables (accessed through `process.env`) are managed by
[dotenv](https://www.npmjs.com/package/dotenv).

**Please do not commit environment variables to source control. This could be a significant security risk.**

For local development, please add environment variables in a `.env` file in the project root.
