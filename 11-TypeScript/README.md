# React Updates, TypeScript, AI

## Table of Contents

1. [React Updates](#react-updates)
2. [React Compiler](#react-compiler)
3. [Setting Up TypeScript with React](#setting-up-typescript-with-react)
4. [Intro to TypeScript](#intro-to-typescript)
5. [Converting an Existing Project to TypeScript](#converting-an-existing-project-to-typescript)
6. [Intro to TypeScript with React](#intro-to-typescript-with-react)
7. [Summary](#summary)

## React Updates

Reference: [react.dev](https://react.dev)

Many of these changes are related to React in a framework.

1. Support for Document Metadata
2. `ref` as a prop

## React Compiler

**React Compiler** = optimizes our React code automatically.

Before React Compiler, we used `useMemo()`, `useCallback()`, and `memo()` to handle optimizations manually. The compiler now adds these optimizations automatically.

### Set Up React Compiler

In the frontend project, run:

```bash
npm install --save-dev babel-plugin-react-compiler@rc
```

Update the React config in `vite.config.js`:

```js
export default defineConfig({
  /* Replace the default react config:
  plugins: [react()]
  */

  // With the react config you copied above, like this:
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', { target: '19' }]],
    },
  })],

  // ...
})
```

### React Developer Tools Extension

[Install from the Chrome Web Store](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1)

Usage: `Inspect > Console > Components (New)`

### PropTypes → TypeScript

Another new feature in React 19: `propTypes` let us check the type of a prop.

Now, React removes `propTypes` in favor of **TypeScript**.

## Setting Up TypeScript with React

```bash
npx create-vite@6.5.0
```

- Choose **React**
- Choose **TypeScript**

File extensions:

- `.tsx` = TypeScript
- `.jsx` = JavaScript

## Intro to TypeScript

**TypeScript** = JavaScript with extra features.

### Main Feature: Types

We can add types to our variables.

**What are types?**
JavaScript has different types of values, like `number`, `string`, and `object`. In TypeScript, we can define what type of value goes inside a variable.

```ts
const message: string = 'hello';
console.log(message);

message.toLowerCase(); // helps with autocomplete
message.toFixed();     // shows an error — toFixed() only works with numbers
```

This feature is called **Type Checking**. TypeScript gives us type checking; JavaScript does not have type checking.

### Type Inference

**Type Inference** = TypeScript can figure out the type automatically.

If we remove the explicit type:

```ts
const message: string = 'hello';
```

and write:

```ts
const message = 'hello';
```

TypeScript still knows this is a `string`.

## Converting an Existing Project to TypeScript

Example: an E-commerce project.

```tsx
createRoot(document.getElementById('root')!).render()
```

In `main.tsx`, we put `!` after `('root')`.

`!` = this value definitely exists (it will not be `null`).

## Intro to TypeScript with React

Without a type, TypeScript doesn't have enough information to figure out the type on its own:

```ts
export function formatMoney(priceCents) {
    return `$${(priceCents / 100).toFixed(2)}`;
}
```

So we set the type manually:

```ts
export function formatMoney(priceCents: number) {
    return `$${(priceCents / 100).toFixed(2)}`;
}
```

### Typing Props

```tsx
type HeaderProps = {
    cart: {
        productId: string,
        quantity: number,
        deliveryOptionId: string
    }[];
}

function Header({ cart }: HeaderProps) {}
```

## Summary

1. Updates in the new version of React
2. React Compiler — automatically optimizes our React code
3. Set up a TypeScript React project using `create-vite`
4. Intro to TypeScript (type checking, type inference)
5. Converted the e-commerce project to TypeScript
6. Intro to TypeScript with React
7. Intro to AI with React