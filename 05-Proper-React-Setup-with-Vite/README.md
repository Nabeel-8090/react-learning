# Proper React Setup with Vite

## Terminal Basics

If we have a file `script.js` containing:

```js
console.log('hello');
```

```bash
node script.js
```

==> prints `hello`

## NPM

**npm** = Node Package Manager.

**Package** = an external library.

npm lets us install external libraries (or packages) into our project.

```bash
npm install supersimpledev
```

## create-vite

Some packages also add a command to our command line.

**create-vite** = a package that helps us set up a new React project.

To use the `create-vite` command:

1. Install the `create-vite` package.
2. Run `create-vite` in the command line.

### NPM Shortcut

```bash
npx create-vite
```

`npx` does the above 2 steps (install the `create-vite` package & run it).

- `x` → means execute
- `@` → use a specific version of `create-vite`

```bash
npx create-vite@6.5.0
```

```bash
npm create vite   # same as npx create-vite
```

## Running the Project

```bash
npm run dev
```

Starts up our new React website.

## Project Structure

| Folder/File | Purpose |
|---|---|
| `node_modules/` | Where npm installs all of the packages |
| `src/` | Contains our website's code — all JavaScript and CSS code goes here |
| `src/assets/` | Images displayed on the website |
| `public/` | Files that should be publicly available (accessible via URL) |

When using React, we write **JSX** code rather than normal JavaScript code.

### Public Folder Example

If we have `/public/vite.svg`, we can access it using:

```
https://website.com/vite.svg
```

## Main Folder Files

- **`.gitignore`** → ignores files so we can't push them to GitHub.
- **`eslint.config.js`** → ESLint = highlights problems in our JavaScript code.
- **`index.html`** → HTML structure.
- **`package-lock.json`** → npm automatically updates this file. It saves the version number of all the packages we installed.
- **`package.json`** → list of packages we need for our project, as well as other information about our project.
- **`vite.config.js`** → configures Vite.

## What is Vite?

**Vite** = the tool we used to set up this project.

- Vite also helps us **build** the website.
- Vite also creates a **server**. (A server puts our website at a URL, e.g. `http://localhost:5173/`)
- The Vite server also refreshes the website when we change some code.
- The Vite server is a replacement for Live Server.

### Best Practice

Load external libraries from `node_modules` instead of using a `<script>` tag.

## main.jsx

`main.jsx` = sets up React.

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

`<StrictMode>` is a special component provided by React. It gives us additional checks and warnings when developing our app.

## Importing CSS

```jsx
import './App.css'
```

This is a feature of Vite — Vite lets us import any type of file.

## Big Advantage of This Setup

We can separate our code into different files.

### Best Practice

Separate each component into its own file.

## Summary

In this lesson:

1. Proper React Setup (using command line, npm, and Vite).
2. Command Line = give commands to our computer.
3. NPM = download and use external libraries (or packages).
4. `create-vite` Package = helps us create a Proper React Setup.
5. Moved our Chatbot Project into the new React Setup.
6. ESLint = highlights problems in our JavaScript code.
7. JavaScript Modules = separate our code into different files.
8. Separated each component into its own `.jsx` and `.css` files.