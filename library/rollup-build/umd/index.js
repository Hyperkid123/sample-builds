(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['umd-biuld'] = {}));
}(this, (function (exports) { 'use strict';

  function fileOneFunction() {
    console.log('File one function with lodash import');
  }

  function fileTwoFunction() {
    console.log('File two function');
  }

  exports.fileOneFunction = fileOneFunction;
  exports.fileTwoFunction = fileTwoFunction;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
