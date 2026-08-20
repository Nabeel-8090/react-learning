# Data Mutation, Types of Requests

## Data Mutation

**Data Mutation** = update data in the backend.

In the real world, we use the backend to update the data.

```jsx
onClick={async () => {
    await axios.post('/api/cart-items', {
        productId: product.id,
        quantity: 1
    });
    await loadCart();
}}
```

## Controlled Input in React

```jsx
import { useState } from 'react';

function App() {
    const [name, setName] = useState('');

    return (
        <input
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
    );
}
```

## Types of Requests

Every request also has a **Type**.

```js
axios.get('/api/cart-items')
```

Sends `GET` and `/api/cart-items` → type and URL path.

```js
axios.post('/api/cart-items')
```

Sends `POST` and `/api/cart-items` → type and URL path.

Both the **Type** and the **URL Path** determine what the backend does.

Type is also called an **HTTP Method**.

### 4 Common Types of Requests

| Method | Purpose |
|---|---|
| `GET` | get some data |
| `POST` | create some data |
| `PUT` | update some data |
| `DELETE` | delete some data |

### Axios Has a Method for Each Type

```js
axios.get('');
axios.post('', {});
axios.put('');
axios.delete('');
```

## Navigating with useNavigate

```jsx
import { useNavigate } from 'react-router';

const navigate = useNavigate();
navigate('/orders');
```

Used to go to another page.

## Summary

In this lesson:

1. Data Mutation = update data in the backend.
2. Types of requests: `GET`, `POST`, `PUT`, `DELETE`.
3. POST request → add products to the cart, create an order.
4. PUT request → update the cart.
5. DELETE request → delete a product from the cart.
6. Dependency Array to update the payment summary.
7. `useNavigate` = navigate to another page using our code.