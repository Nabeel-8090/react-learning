# Components, Props, Start the Chatbot Project

## Components

**Component** = a piece of the website.

When building websites:

- It's better to split up the website into pieces.
- So we can work on a small piece of the website at a time.

### Naming Rules

In React, the component name must start with a **capital letter**.

**PascalCase** = each word starts with a capital letter.

## Self-Closing Elements

```html
<input></input>
```

We don't need `</input>` in normal HTML. JSX is more strict than normal HTML — **all elements need a closing tag**.

```jsx
<input></input>
<input />   // shortcut of above
```

This shortcut is called a **self-closing element**.

## Component Syntax

```jsx
<ChatInput></ChatInput>
<ChatInput />   // shortcut
```

**Main idea of React:** we can create our own HTML elements.

## Fragment (`<></>`)

```jsx
return (
    <>
        <input />
        <button>Send</button>
    </>
);
```

A Fragment groups elements together, without creating an extra `<div>`.

## Props

**Props** = properties.

- The `props` parameter is an object.
- Props make our component reusable.

## If-Statements Directly Inside JSX

### Guard Operator (`&&`)

```jsx
const result = value1 && value2;
```

- If `value1` is true, the result will be `value2`.
- This works just like an if-statement.
- We can use `&&` as an if-statement in our JSX.

## Best Practice

Use a component (`App`) to create the website.

## Summary

In this lesson:

1. Component = a piece of the website.
2. Component = create our own HTML elements.
3. Started the Chatbot Project.
4. Split the Chatbot into `<ChatInput>` and `<ChatMessage>`.
5. Props = make components reusable.
6. Destructuring, Guard Operator (`&&`).
7. Code cleanup.
8. Created `<App>` component.