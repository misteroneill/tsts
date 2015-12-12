import tst from './tst';
import os from 'os';

const newlines = /\r\n|\r|\n/;

// This _will_ match mixed tabs and spaces, but if you're doing that...
const indent = /^[ \t]*\S/;

/**
 * Calculates the smallest indent on any non-blank line.
 *
 * @param  {Array} lines
 * @return {Number}
 *         From zero to Infinity!
 */
const findSmallest = lines => {
  let out = Infinity;

  for (let i = 0; i < lines.length; i++) {
    let match = lines[i].match(indent);

    // There will only be a match if there are non-space character(s). Blank
    // lines are ignored because their "indent" doesn't count toward the
    // smallest.
    if (!match) {
      continue;
    }

    // Subtract 1 here because the indent matches spaces, tabs, and _the
    // first non-space character_!
    out = Math.min(match[0].length - 1, out);

    // No need to continue if zero is found.
    if (!out) {
      break;
    }
  }

  return out;
};

/**
 * Join multi-line strings into a single line, normalizing whitespace into
 *
 * @param  {String}   strings
 * @param  {...Mixed} values
 * @return {String}
 */
const pre = (...args) => {
  let lines = tst(...args).split(newlines);

  // Skip over the algorithm if this is a single-line string.
  if (lines.length > 1) {
    let smallest = findSmallest(lines);

    // If the smallest indent is zero or there are no appropriate lines, we
    // can skip the outdenting step. Otherwise, we remove the `smallest`
    // number of whitespace characters from each line.
    if (smallest && smallest < Infinity) {
      lines = lines.map(l => l.substr(smallest));
    }
  }

  return lines.join(os.EOL).trim();
};

export default pre;
