const undefinedValues = [undefined, null];

/**
 *
 * @param {*} value - Value to be checked
 */
const isDefined = (value) => !undefinedValues.includes(value);

export default isDefined;
