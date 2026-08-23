import axios from 'axios';
import { formatMoney } from '../../utils/money';
import { useState } from 'react';

function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    }

    const updateCartItem = async () => {
        if (!isUpdating) {
            setIsUpdating(true);
        } else {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity)
            });
            await loadCart();
            setIsUpdating(false);
        } 
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: 
                        {isUpdating
                            ? <input
                                type="number"
                                min="1"
                                className='input-update-quantity'
                                value={quantity}
                                onChange={(event) => {
                                    setQuantity(event.target.value);
                                }}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        updateCartItem();
                                    }
                                }}
                            />
                            : <span className="quantity-label"> {quantity}</span>
                        }
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={updateCartItem}
                    >
                        {!isUpdating ? 'Update' : 'Save'}
                    </span>
                    <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}

export default CartItemDetails;