# Automated Tests in React

## NPM Packages for Automated Testing

- **Jest**
- **Vitest**

We're going to use Vitest.

```bash
npm install --save-dev vitest@3.1.2
```

`--save-dev` → only for development.

## Unit Test

**Unit Test** = test 1 unit (or 1 piece) of the code.

```bash
npx vitest
```

Run this command in our folder.

## Integration Test

**Integration Test** = test multiple units of code working together.

## Testing a Function

```js
expect(formatMoney(1999)).toBe('$19.99');
```

## Testing a Component

```jsx
render(<Product />)
```

`render` = display the component on the page.

### Install Packages for Integration Tests

```bash
npm install --save-dev @testing-library/react@16.3.0 @testing-library/jest-dom@6.6.3 @testing-library/user-event@14.6.1 jsdom@26.1.0
```

## vitest.config.js

```js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  }
});
```

## setupTests.js

```js
import '@testing-library/jest-dom';
```

## Mocking

In our tests, we shouldn't contact a real backend.

**Mock** = create a fake version of a function.

```js
import { vi } from 'vitest';

const loadCart = vi.fn();
```

Creates a fake function that doesn't do anything (mock).

```js
import { screen } from '@testing-library/react';
```

`screen` = check the fake webpage.

## Test User Interactions

**`@testing-library/user-event`** — this package lets us simulate events (like clicking a button).

## Test Hooks

- `beforeEach()`
- `afterEach()`
- `beforeAll()`
- `afterAll()`

## Mock the Implementation

**Mock the implementation** = make the mock do whatever we want.

## Summary

In this lesson:

1. Automated tests with Vitest.
2. Unit test = test 1 piece of the code.
3. `it()`, `expect()`, `describe()`.
4. Integration tests = test multiple pieces of code.
5. Test a component (using `render` and `screen`).
6. Mock = fake version of a function / package.
7. Mock the implementation = make a mock do whatever we want.