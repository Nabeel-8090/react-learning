# React Basics: JSX

## What is React?

**React** = an external library that helps us create websites more easily.

1. React is an external library.
2. React helps us create websites easier.

- It's a bunch of code that lives outside our computer.
- We can load this code on our website and use it.

## Loading React

We're using React from `supersimpledev`:

```html
<script src="https://unpkg.com/supersimpledev/react.js"></script>
<script src="https://unpkg.com/supersimpledev/react-dom.js"></script>
```

- **React** = shared features
- **ReactDOM** = features specific to websites

| Target platform | What you load |
|---|---|
| Websites | React & ReactDOM |
| Mobile apps | React & ReactNative |

## Rendering with React

```html
<script type="text/babel">
    const container = document.querySelector('.js-container');
    ReactDOM.createRoot(container).render('Welcome to SuperSimpleDev React Course');
</script>
```

- `ReactDOM.createRoot()` = sets up React
- `render()` = displays something

## What is Babel?

```html
<script src="https://unpkg.com/supersimpledev/babel.js"></script>
```

Babel is another external library.

**Babel** = a JavaScript compiler that translates other languages into JavaScript.

### Why do we need Babel?

When using React, we don't write normal JavaScript — we write an enhanced version called **JSX**.

**JSX** = JavaScript XML = same as JavaScript, but we can write HTML directly in our JavaScript code.

### Problem with JSX

- Our web browser doesn't understand JSX.
- JSX needs to be translated into JavaScript.

Babel translates JSX into JavaScript:

```html
<script src="https://unpkg.com/supersimpledev/babel.js"></script>
<script type="text/babel"></script>
```

## Displaying Multiple Elements

This does **not** work:

```jsx
// Wrong
ReactDOM.createRoot(container).render(button, paragraph);

// Wrong
const elements =
    <button>hello</button>
    <p>paragraph of text</p>;
```

Instead, we wrap elements in a single `<div>`.

**`<div>`** = a container that holds other elements.

```jsx
const div = (
    <div>
        <button>Hello</button>
        <p>paragraph of text</p>
    </div>
);
```

This creates an actual **element**, rather than just text or a string.

## Why JSX?

1. Creating a website with React feels natural.
2. JSX lets us find errors more easily.
3. We can insert JavaScript code directly into JSX elements using `{ }`.

```jsx
<p>paragraph of text {2 + 2}</p>
```