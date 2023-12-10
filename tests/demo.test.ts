import test from 'ava';

import { demo } from '../src/demo';

test('It should say "Hello!"', (t) => {
  const expected = 'Hello!';

  const result = demo();

  t.is(result, expected);
});
