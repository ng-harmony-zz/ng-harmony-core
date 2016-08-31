System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "ng-harmony/ng-harmony-decorator": "github:ng-harmony/ng-harmony-decorator@0.3.6",
    "ng-harmony/ng-harmony-log": "github:ng-harmony/ng-harmony-log@0.1.5",
    "ng-harmony/ng-harmony-util": "github:ng-harmony/ng-harmony-util@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:ng-harmony/ng-harmony-decorator@0.3.6": {
      "ng-harmony/ng-harmony-model": "github:ng-harmony/ng-harmony-model@0.0.3"
    },
    "github:ng-harmony/ng-harmony-log@0.1.5": {
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.11.5",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "babel-preset-es2017": "npm:babel-preset-es2017@6.14.0",
      "jonnyreeves/js-logger": "github:jonnyreeves/js-logger@1.3.0"
    },
    "github:ng-harmony/ng-harmony-model@0.0.3": {
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.11.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@2.0.0"
    },
    "npm:babel-helper-function-name@6.8.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.14.0",
      "babel-traverse": "npm:babel-traverse@6.14.0",
      "babel-types": "npm:babel-types@6.14.0"
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.14.0"
    },
    "npm:babel-helper-remap-async-to-generator@6.11.2": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.14.0",
      "babel-traverse": "npm:babel-traverse@6.14.0",
      "babel-types": "npm:babel-types@6.14.0"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-async-to-generator@6.8.0": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.11.2",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-class-properties@6.11.5": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.14.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-preset-es2017@6.14.0": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.13.0",
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.11.6": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:babel-template@6.14.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.14.0",
      "babel-types": "npm:babel-types@6.14.0",
      "babylon": "npm:babylon@6.9.1",
      "lodash": "npm:lodash@4.15.0"
    },
    "npm:babel-traverse@6.14.0": {
      "babel-code-frame": "npm:babel-code-frame@6.11.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.14.0",
      "babylon": "npm:babylon@6.9.1",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.15.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.14.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.14.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.15.0",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.9.1": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.9.5": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
