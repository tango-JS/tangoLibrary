var ngTemplate = require('@ionic/app-scripts/dist/plugins/ng-template').ngTemplate;
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

console.log('using custom roll-up build');

// https://github.com/rollup/rollup/wiki/JavaScript-API

module.exports = {
  /**
   * entry: The bundle's starting point. This file will
   * be included, along with the minimum necessary code
   * from its dependencies
   */
  entry: './.tmp/app/main.dev.js',

  /**
   * sourceMap: If true, a separate sourcemap file will
   * be created.
   */
  sourceMap: true,

  /**
   * format: The format of the generated bundle
   */
  format: 'iife',

  /**
   * dest: the output filename for the bundle in the buildDir
   */
  dest: 'main.js',

  /**
   * useStrict: to not have useStrict
   */
  useStrict: false,

  /**
   * plugins: Array of plugin objects, or a single plugin object.
   * See https://github.com/rollup/rollup/wiki/Plugins for more info.
   */
  plugins: [
    ngTemplate(),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/firebase/**',
        'node_modules/angularfire2/**'
      ],
      namedExports: {
        'node_modules/firebase/firebase.js': ['initializeApp', 'auth', 'database'],
        'node_modules/angularfire2/node_modules/firebase/firebase-browser.js': ['initializeApp', 'auth', 'database']
      }
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js']
    })
  ]

};