# Unique Array (NodeJS)

[⚖️ MIT](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/unique-array-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/unique-array-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/unique-array-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/unique-array-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/unique-array-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/unique-array-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/unique-array) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/unique-array?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/unique-array/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/unique-array/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to return unique array elements without any duplicated elements by ignore their reference points.

> **🔗 Other Edition:**
>
> - [Deno](https://github.com/hugoalh-studio/unique-array-deno)

## 📓 Documentation

### Getting Started

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/unique-array
```

```js
import uniqueArray from "@hugoalh/unique-array";// Default Import
```

### API

```ts
function uniqueArray<T>(item: T[]): T[];
```

### Example

- ```js
  uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
  //=> [{ foo: "bar" }, { bar: "gaz" }]
  ```
