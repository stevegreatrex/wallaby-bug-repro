var path = require('path');
var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {
  var webpackPostprocessor = wallabyWebpack({
    resolve: {
      modulesDirectories: [path.join(wallaby.projectCacheDir, 'src')],
    },
  });
  return {
    debug: true,
    files: [
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'src/**/*.ts', load: false }
    ],

    tests: [
      { pattern: 'spec/**/*spec.ts', load: false }
    ],
    testFramework: 'mocha',
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({
        module: 'es6',
        target: 'es6'
      })
    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
                                     file.content,
                                     {sourceMap: true, presets: ['es2015']})
    },
    postprocessor: webpackPostprocessor,

    setup: function () {
      window.expect = chai.expect;
      window.__moduleBundler.loadTests();
    }
  };
};
