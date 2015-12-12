import tap from 'tap';
import tst from '../tst';

tap.equal(
  tst`asdf
qwerty
${'foo'}-${(() => 123)()}`,
  'asdf\nqwerty\nfoo-123',
  'The internal tst function behaves like default template strings.'
);
