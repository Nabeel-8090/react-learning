# Routing, Start the Ecommerce Project

## How Do We Create Multiple Pages in React?

**Routing** = create multiple pages in React.

Routing lets us create multiple pages using 1 HTML file. This lets us reuse our HTML code.

## Setting Up Routing

To use routing:

```bash
npm install react-router
```

For now we are using:

```bash
npm install react-router@7.8.0
```

## Reference Links

- Links mentioned in each lesson of the React Course: [1-links.md](https://github.com/SuperSimpleDev/react-course/1-links.md)
- [React Router Documentation](https://reactrouter.com/home)

## Basic Routing Example

```jsx
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<div>Test checkout page</div>} />
      </Routes>
    </>
  );
}
```

`index` → `path="/"`

## main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

## Navigation with `<Link>`

When using react-router, use `<Link>` instead of `<a>`.

`<Link>` → go to another page without reloading.

## Navigation with `<NavLink>`

`<NavLink>` works just like `<Link>`, but with one special feature: it **knows which page it's on**.

- If the `<NavLink>` points to the current page, React Router automatically adds an `active` class to it.
- This makes it easy to highlight the currently active link (e.g. in a navigation menu).

### Styling the Active Link

We can target the active state directly in CSS:

```css
.className.active {
}
```

```jsx
<NavLink to="/" className="nav-link">Home</NavLink>
<NavLink to="/checkout" className="nav-link">Checkout</NavLink>
```

```css
.nav-link.active {
    color: green;
    font-weight: bold;
}
```

## Summary

In this lesson:

1. Started the Ecommerce project using React & Vite.
2. Routing → create multiple pages in React.
3. Updated all the links to work with routing.
4. Separated the Header into a component.