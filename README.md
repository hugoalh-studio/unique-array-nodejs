# Unique Array (NodeJS)

[`UniqueArray.NodeJS`](https://github.com/hugoalh-studio/unique-array-nodejs)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/unique-array-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/unique-array-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/unique-array-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/unique-array-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/unique-array-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/unique-array-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/unique-array-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/unique-array-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/unique-array-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/unique-array-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/unique-array-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/unique-array-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/unique-array-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/unique-array-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/unique-array-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/unique-array-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/unique-array-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/unique-array-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/unique-array-nodejs?label=%20&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/unique-array-nodejs?label=%20&style=flat-square)) |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/unique-array-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/unique-array-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-nodejs?sort=semver&label=%20&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/unique-array) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/unique-array?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/unique-array/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/unique-array/pre?label=%20&style=flat-square) |

## 📝 Description

A NodeJS module to return unique array elements by ignore all of the duplicated elements.

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v14.15.0
- NPM >= v6.14.8

```sh
npm install @hugoalh/unique-array
```

#### Use In CommonJS

```js
const uniqueArray = require("@hugoalh/unique-array");
```

#### Use In ModuleJS

```js
import uniqueArray from "@hugoalh/unique-array";
```

### API

#### Function

```ts
uniqueArray(
  input: any[],
  ignoreReferences?: boolean = false// Whether to compare objects without compare their reference points.
): any[]
```

### Example

```js
uniqueArray([1, 1, 1, 2, 2, 3]);
//=> [1, 2, 3]

uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
//=> [{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]

uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }], true);
//=> [{ foo: "bar" }, { bar: "gaz" }]
```
