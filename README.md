# Idempotency bug reproduction repository for @testing-library/react

## Steps

1. Use `yarn` to install dependencies
2. Run `yarn test` to run tests

## Expected result

Tests pass, because cleanup is called between tests, so each test only has one
rendered component which is returned when calling `screen.getByRole`.

## Actual result

Tests fails because there are multiple renders (there should be only one) of the
same component and I'm using `screen.getByRole`, because cleanup is not called
between tests.

## Note

- If I call cleanup manually between tests (e.g. using beforeEach), then tests
  pass.
- If I remove the import from `config/setup-tests.ts`, then tests pass.
- Running each test in isolation makes the tests pass.

I've narrowed it down to the `cleanup`-function not being called if
`@testing-library/react` is imported in `config/setup-tests.ts`.
