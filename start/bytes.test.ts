import test from 'ava';

import { bytes } from '../src/bytes';

test('It should return the byte size', (t) => {
  const expected = 3;

  const result = bytes('Hi!');

  t.is(result, expected);
});

test('It should return the byte size when including emoji', (t) => {
  const expected = 8;

  const result = bytes('Hi! 👋');

  t.is(result, expected);
});
