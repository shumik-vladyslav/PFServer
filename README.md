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

Server configuration file: src/config.ts

DB Changes:

ALTER TABLE user ADD BLOCK TINYINT(1) NOT NULL DEFAULT 0;
ALTER TABLE user ADD BLOCKREASON varchar(100) NOT NULL DEFAULT '';

INSERT INTO `usertype` (`ID`,`NAME`) VALUES(3,ADMIN);

// DROP UNIQU PATH column in IMAGES
ALTER TABLE IMAGES drop index ...;

and change column PATH to VARCHAR(100)

