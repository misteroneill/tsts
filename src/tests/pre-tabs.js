import tap from 'tap';
import pre from '../pre';

tap.equal(
	pre`
		Look, tabs
			work too!
	`,
	'Look, tabs\n\twork too!',
	'Multi-line strings indented with tabs are supported.'
);
