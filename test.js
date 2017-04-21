import test from 'ava';
import m from '.';

test('invalid input', t => {
	const err = t.throws(() => m(123), TypeError);
	t.is(err.message, 'Expected `phone` to be of type `string`, got `number`');
});

test('invalid phone numbers', t => {
	t.false(m('04155552671'));
	t.false(m('14155552671234567'));
	t.false(m('14155ab52671'));
	t.false(m('+1415'));
});

test('valid phone numbers', t => {
	t.true(m('+14155552671'));
	t.true(m('14155552671'));
});
