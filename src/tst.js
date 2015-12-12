
/**
 * Default template string behavior.
 *
 * @param  {String}   strings
 * @param  {...Mixed} values
 * @return {String}
 */
const tst = (strings, ...values) => {
  let out = '';

  for (let i = 0; i <= values.length; i++) {
    out += strings[i] + (values[i] || '');
  }

  return out;
};

export default tst;
