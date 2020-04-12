# Welcome to Team-Gen 👋
![Version](https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/kschang77/team-gen/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/kschang77/Team-Gen)](https://github.com/kschang77/team-gen/blob/master/LICENSE)

> Team-Gen is a team webpage generator that realies heavily upon use of OOP and text template engine. Simply run it and follow prompts to add team members (3 classes, Manager, Engineer, Intern) and at the end, a _team.html_ will be generated in _output_ subdirectory, based on the contents of the _templates_ directory.

### 🏠 [Homepage](https://github.com/kschang77/team-gen)

### ✨ Demo

![Demo](./assets/test3.gif)

## Requires
  * node.js
  * inquirer
  * path
  * fs
  * figlet
  * chalk
  * and eveyrthing else in ./lib
  * and everything else in ./templates

NOTE: While this program does not require anything else to run, the generated _team.html_ requires Bootstrap4. It has integral CDN references so it should work without further intervention, unless you don't have an Internet connection. 

## Usage

```sh
node team-gen
```

## Run tests

```sh
npm run test
```

## Details

App uses a base class of employee (see _employee.js_) to create 3 derived classes, _manager.js_, _engineer.js_ and _intern.js_ with slightly different input fields. 

Each class has matching templates in the _templates_ subdirectory to control how its own block of HTML/Bootstrap4 code will look. This allows easy customization, should one wants to use different icons, formating, and so on. 

The app itself uses async/await techniques to call upon _inquirer_ to get the input from the user. 

Upon user choosing "Stop Entry", the _team.html_ is generated based on the various templates and written to the outputpath displayed (usually _./output_ ). 

**Please note** that if _output_ subdirectory doesn't exist, it will be created. And if _team.html_ already exists in the outputpath, it will be **overwritten**. 

## Author

👤 **Kasey Chang**

* LinkedIn: [@kschang77](https://www.linkedin.com/in/kasey-chang-0932b332/)
* Github: [@kschang77](https://github.com/kschang77)


## 📝 License

Copyright © 2020 [Kasey Chang](https://github.com/kschang77).

This project is [MIT](https://github.com/kschang77/team-gen/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_