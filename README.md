# sample-builds
This repository showcases multiple different JS library builds. The goal is to demonstrate webpack output using UMD, CJS and ESM dependencies. 

## Getting strated
- have node 12+ installed
- have [yarn](https://yarnpkg.com/) installed
- run `$ yarn` in the project root
- (optional) re-build the library package
```bash
$ cd library 
$ yarn build
```
- run build for the consumer package; webpack bundle analyzer will show up
```bash
$ cd consumer 
$ yarn build
```


