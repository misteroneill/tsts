import tst from './tst';

/**
 * Join multi-line strings into a single line, normalizing whitespace into
 *
 * @param  {String}   strings
 * @param  {...Mixed} values
 * @return {String}
 */
const join = (...args) => tst(...args).replace(/\s+/g, ' ').trim();

export default join;
