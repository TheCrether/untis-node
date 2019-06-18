# untis-node

[![npm version](https://badge.fury.io/js/untis-node.svg)](https://badge.fury.io/js/untis-node)

- [untis-node](#untis-node)
	- [Installation](#Installation)
	- [Features](#Features)
	- [Documentation](#Documentation)
	- [Example](#Example)
	- [Todos](#Todos)

## Installation

```bash
npm install --save untis-node
```

## Features

It is a wrapper for the untis API with many interfaces und a lot of methods to get information from the API

- Login to the Untis servers
- fetch Data with multiple methods
- fetch all Data when successfully logging in
- Uses Promises

## Documentation

[The Documentation is here](https://thecrether.github.io/untis-node)

## Example

First you have to get your school id and your server.
You can find your school id and your server by going to [webuntis.com](http://webuntis.com) and then searching for your school.
After being redirected to your school web page you can see your school id and your server by looking at the link:
Example link: https://mese.webuntis.com/WebUntis/?school=htbla_kaindorf#/basic/main
the server is the word before ".webuntis.com", so in this example: mese
the school is the word after "?school=", so in this example: htbla_kaindorf

[Example GIF][example.gif]

Javascript:

```js
const untis = require("untis-node");
untis.login({
	username: "a username here",
	password: "a password here",
	school: "your school",
	server: "your server"
}).then(data => {
	//do your stuff here
});
```

Typescript:

```ts
import {login, Config} from "untis-node";

const config: Config = {
	username: "a username here",
	password: "a password here",
	school: "your school",
	server: "your server"
};

login(config).then(data => {
	// do your stuff
})
```

## Todos

- [x] Program everything
- [x] Documentation
- [x] detailed docs
- [x] Add to NPM
