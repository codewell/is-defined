'use strict';

var undefinedValues = [undefined, null];
/**
 *
 * @param {*} value - Value to be checked
 */

var isDefined = function isDefined(value) {
  return !undefinedValues.includes(value);
};

module.exports = isDefined;
