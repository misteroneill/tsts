import tap from 'tap';
import join from '../join';

tap.equal(join`I am a one line string!`, 'I am a one line string!');

tap.equal(
  join`All \t whitespace \r\n is normalized to spaces.`,
  'All whitespace is normalized to spaces.',
  'All whitespace is noramlized to spaces.'
);

tap.equal(
  join`
    I am a multi-line
    string!
  `,
  'I am a multi-line string!',
  'Multi-line strings are joined into a single line.'
);

tap.equal(
  join`
    Better make sure
    ${'  expressions'} work!
  `,
  'Better make sure expressions work!',
  'String interpolation is supported.'
);

tap.equal(
  join`
    It does not

    preserve empty

    lines.
  `,
  'It does not preserve empty lines.',
  'Empty lines are not preserved.'
);
