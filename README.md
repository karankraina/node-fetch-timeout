<h1 align="center">Welcome to node-fetch-timeout 👋</h1>
<p>
  <a href="https://circleci.com/gh/karankraina/node-fetch-timeout/tree/master" target="_blank">
    <img alt="Version" src="https://circleci.com/gh/karankraina/node-fetch-timeout/tree/master.svg?style=svg">
  </a>
  <a href="https://www.npmjs.com/package/node-fetch-timeout" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/node-fetch-timeout.svg">
  </a>
  <a href="https://github.com/karankraina/node-fetch-timeout/blob/master/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/karankraina" target="_blank">
    <img alt="Twitter: karankraina" src="https://img.shields.io/twitter/follow/karankraina.svg?style=social" />
  </a>
</p>

> A light-weight wrapper package built on awesome [node-fetch](https://github.com/node-fetch/node-fetch) package that adds timeout and retry option.

### 🏠 [Homepage](https://github.com/karankraina/node-fetch-timeout)

## Install

```sh
npm install node-fetch-timeout
```

## Usage

### Using require

```sh

const { request } = require('node-fetch-timeout);

```

### Using ES6 Modules

```sh

import { request } from 'node-fetch-timeout';

```


### Using Promise Chain

```sh

request(url, {
    ...standardRequestHeaders,
    timeout: 1, // timeout in milliseconds
    retryCount: 3 // number of retires - defaults to 1
  }).then(res => {
      // res is raw response
      // use res.json() or res.text()
      console.log(res);
  }).catch(err => { 
      console.log(err); 
  });

```
### Using Latest Async/Await Syntax

```sh

try {
    const res = await request(url, {
        ...standardRequestHeaders,
        timeout: 1, // timeout in milliseconds
        retryCount: 3 // number of retires - defaults to 1
    });
    // res is raw response
    // use res.json() or res.text()
    console.log(res)
} catch (error) {
    console.log(error)
}

```


## Author

👤 **Karan Raina <karanraina1996@gmail.com>**

* Website: https://karanraina.tech
* Twitter: [@karankraina](https://twitter.com/karankraina)
* Github: [@karankraina](https://github.com/karankraina)
* LinkedIn: [@karankraina](https://linkedin.com/in/karankraina)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/karankraina/node-fetch-timeout/issues). You can also take a look at the [contributing guide](https://github.com/karankraina/node-fetch-timeout/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_