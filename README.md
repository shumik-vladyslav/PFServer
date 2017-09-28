# TypeScript 2 + Express + Node.js

This is a repository to go with my article on creating an Express web application using TypeScript 2.

## Install

Install the node packages via:

`$ npm install`

And then run the grunt task to compile the TypeScript:

`$ npm run grunt`

## Starting

To start the server run:

`$ npm start`

ALTER TABLE user ADD block TINYINT(1) NOT NULL DEFAULT 0;
ALTER TABLE user ADD blockreason varchar(100) NOT NULL DEFAULT '';