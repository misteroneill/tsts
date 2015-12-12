import tap from 'tap';
import pre from '../pre';

// Create a multi-line string from many strings.
const ml = (...strs) => strs.join('\n');

tap.equal(
  pre`I am a one line string!`,
  'I am a one line string!',
  'One line strings remain unchanged.'
);

tap.equal(
  pre`
    I am a multi-
    line
    string!
  `,
  ml(
    'I am a multi-',
    'line',
    'string!'
  ),
  'Multi-line strings at a single indent level are fully outdented.'
);

tap.equal(
  pre` The next two lines
    should be indented
    to three spaces.`,
  ml(
    'The next two lines',
    '   should be indented',
    '   to three spaces.'
  ),
  'Multi-line strings are outdented only as far as the shortest indent.'
);

tap.equal(
  pre`
    Better make sure
    ${'  expressions'} work!
      ^ that one should have been
        indented by two spaces.
  `,
  ml(
    'Better make sure',
    '  expressions work!',
    '  ^ that one should have been',
    '    indented by two spaces.'
  ),
  'String interpolation is supported.'
);

tap.equal(
  pre`
    It also preserves

    empty

    lines.
  `,
  ml(
    'It also preserves',
    '',
    'empty',
    '',
    'lines.'
  ),
  'Empty lines are preserved.'
);
