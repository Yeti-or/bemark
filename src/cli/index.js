'use strict';

const coa = require('coa');
const pkg = require('../../package.json');

module.exports = coa.Cmd()
  .name('bb')
  .title('Static generator')
  .helpful()
  .opt()
    .name('version')
    .title('Show version')
    .long('version')
    .short('v')
    .flag()
    .only()
    .act(function() { return pkg.version; })
    .end()
  .cmd().name('build').apply(require('./commands/build.js')).end()
  .act(function() {
    console.log('Type \'--help\' for help');
  })
  .end();
