# CSS with React, Hooks, Finish Chatbot Project

## CSS with React

**CSS** = change the appearance of the website.

CSS with React = just use CSS normally.

We use `className` in React for CSS:

```jsx
className="class-name"
```

## Using Flexbox

There are 3 steps to follow:

1. Create a container around the elements.
2. Add `display: flex;` to the container.
3. Use flexbox features.

## Hooks

One of the most important features of React.

**Hooks** = insert React features into our component.

`React.useState()` is a hook.

**State** = automatically update the HTML when the data changes.

### Common React Hooks

- `useState()`
- `useEffect()`
- `useRef()`
- and more...

Every hook starts with the word **"use"**.

### Rules of Hooks

- Put hooks at the top of the component.
- Hooks should not be inside anything (no conditionals, no functions).

```jsx
// Wrong
if (condition) {
    React.useEffect();
}

// Wrong
function fun() {
    React.useEffect();
}
```

## useEffect()

Runs some code after the component is created or updated.

```jsx
React.useEffect(() => {
});
```

React will run this function:
- after the component is created
- every time the component is updated

```jsx
React.useEffect(() => {
    console.log('updated');
}, [chatMessages]);
```

`[chatMessages]` → **Dependency Array** = controls when `useEffect` runs.

### Best Practice

Give `useEffect` a dependency array to avoid running too often.

## useRef()

Automatically saves an HTML element from the component.

**ref** → a container with special React features.

## Summary

In this lesson:

1. CSS with React.
2. Styled the Chatbot Project.
3. Flexbox = create a flexible layout.
4. Ternary Operator (`? :`) = if-else statement directly in the JSX.
5. Hooks = insert React features into a component.
6. `useEffect` = run code after component is created or updated.
7. `useRef` = save an HTML element from the component.
8. Created the auto-scroll feature.