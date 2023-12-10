# Test-Driven Development demo: Build a DynamoDB item size calculator

This repo sets up a basic Node environment for doing test-driven development using TypeScript and Ava, together with ESLint and Prettier for extra flair.

Install with `npm install`, run all tests with `npm test`, and start the watch mode so you can run tests while developing by running `npm start`.

## Exercise

Of course you can do whatever you want, but if you want a real project, how about making a DynamoDB item size calculator?

I've already provided some starting code for the actual byte size stuff in the `start` folder if you want to do that particular demo.

Your exercise will be to replicate the basic parts of the behavior of this [online tool](https://zaccharles.github.io/dynamodb-calculator/), as far as it comes to calculating the actual item size in bytes.

Some resources for you:

- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html
- https://zaccharles.github.io/dynamodb-calculator/
- https://zaccharles.medium.com/calculating-a-dynamodb-items-size-and-consumed-capacity-d1728942eb7c

Extra credit features:

- DynamoDB item size in bytes, _after_ having removed the type keys (e.g. `S`, `N`, `SN`...)
- Warn about "longish" attribute names (over 10 characters)
- RCU consumption (eventual and strong consistencies + as part of transactional)
- WCU consumption (eventual and strong consistencies + as part of transactional)

## Some ideas to start you off

Here's a basic starting point if you're lost.

The source file, `src/DynamoDbItemSize.ts`:

```ts
export function DynamoDbItemSize(object: Record<string, any>) {
  const result = JSON.stringify(object);
  console.log('Result:', result);
  return result.length;
}
```

The initial tests, `tests/DynamoDbItemSize.test.ts`:

```ts
import test from 'ava';

import { DynamoDbItemSize } from '../src/DynamoDbItemSize';

test('It should handle empty objects', (t) => {
  const expected = 2;

  const result = DynamoDbItemSize({});

  t.is(result, expected);
});

test('It should handle objects with a single key', (t) => {
  const expected = 16;

  const result = DynamoDbItemSize({ name: 'Harry' });

  t.is(result, expected);
});

test('It should handle objects with multiple keys', (t) => {
  const expected = 66;

  const result = DynamoDbItemSize({
    name: 'Harry',
    address: 'Cafe5to2, Bachman Street, Silent Hill'
  });

  t.is(result, expected);
});
```

## Test cases

- It should handle a basic item shape with a single key
- It should handle a basic item shape with multiple keys
- It should handle a DynamoDB item shape using a string
- It should handle a DynamoDB item shape using a positive number
- It should handle a DynamoDB item shape using a negative number
- It should handle a DynamoDB item shape using binary
- It should handle a DynamoDB item shape using a boolean
- It should handle a DynamoDB item shape using a null
- It should handle a DynamoDB item shape using a map
- It should handle a DynamoDB item shape using a list
- It should handle a DynamoDB item shape using a string set
- It should handle a DynamoDB item shape using a number set
- It should handle a DynamoDB item shape using a binary set
