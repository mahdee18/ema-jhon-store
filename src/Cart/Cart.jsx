import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart,handleClearCart,children }) => {
    let totalPrice = 0;
    let totalShipping = 0
    let quantity = 0
    for (const product of cart) {
        product.quantity = product.quantity || 0
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    let tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {totalPrice} </p>
            <p>Total Shipping Charge:$ {totalShipping} </p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h4>Grand Total:$ {grandTotal.toFixed()}</h4>
            <button className='cart-btn' onClick={handleClearCart}>
                <span>Clear Cart</span>
                <FontAwesomeIcon className='clear' icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;