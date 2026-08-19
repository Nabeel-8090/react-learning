# Backend, Data Fetching, Async Await

## What is a Backend?

**Backend** = manages the data.

**Backend** = shares data between computers.

Why do we use a backend?

1. How to add a backend.
2. How to use the backend.

## Data Fetching

**Data Fetching** = get data from the backend (using our code).

## Asynchronous Code

**Asynchronous code** = code that does not finish right away.

- `fetch()` returns a **Promise**.
- **Promise** = lets us wait for asynchronous code to finish.
- `.json()` = gives us the data attached to the response.
- `response.json()` is also asynchronous.

```js
const products = response.json();   // wrong
```

```js
fetch('http://localhost:3000/api/products')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
```

This is also hard to read.

## Axios

To make this code cleaner, we use **axios**.

**axios** = a cleaner way to make requests to the backend.

```bash
npm install axios@1.8.4
```

We install axios in the frontend.

```js
axios.get('http://localhost:3000/api/products')
    .then((response) => {
        console.log(response.data);
    });
```

### Using Axios with useEffect

```jsx
useEffect(() => {
    axios.get('http://localhost:3000/api/products')
        .then((response) => {
            console.log(response.data);
        });
}, []);
```

**Dependency array** = lets us control when `useEffect` runs.

`[]` = only run once.

## Query Parameters

```
/api/cart-items?expand=product
```

**Query Parameter** = lets us add additional info to our request.

## Async Await

**Async Await** = lets us write asynchronous code like normal code.

```jsx
useEffect(() => {
    const getHomeData = async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
    }
    getHomeData();

}, []);
```

Async await in React using axios.

```jsx
useEffect(() => {
    const fetchCheckoutData = async () => {
        let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
        setDeliveryOptions(response.data);

        response = await axios.get('/api/payment-summary');
        setPaymentSummary(response.data);
    }
    fetchCheckoutData();

}, []);
```

## Summary

In this lesson:

1. Backend = manages the data.
2. Set up a backend for our project.
3. Data Fetching.
4. axios → easier way to make requests to the backend.
5. Generate the HTML using data from the backend.
6. Separated into smaller components.
7. Async Await → write asynchronous code like normal code.