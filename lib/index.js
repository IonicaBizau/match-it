/**
 * matchIt
 * Finds the regex matches in the string.
 *
 * @name matchIt
 * @function
 * @param {String} input The string input.
 * @param {RegExp} re The regular expression.
 * @returns {Array} The `match` result or an empty array.
 */
export default function matchIt(input, re) {
  return input.match(re) || [];
}
