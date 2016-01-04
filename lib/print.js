'use strict'; //eslint-disable-line
const readline = require('readline');

/**
 * Clear a line and print a message
 * @param  {String|Array} message   Content to print
 * @param  {Boolean}      condition Whether or not to print the message
 * @return {Function}               Basic logging function
 */
module.exports = function print(message, condition) {
  if (condition) {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    if (typeof message === 'string') {
      return process.stdout.write(`${[message].join('')}\n`);
    }
    return process.stdout.write(`${message.join('')}\n`);
  }
};
