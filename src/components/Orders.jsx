import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from './Review';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)

    }
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div>
            <h4>Thus is orders page:{cart.length}!</h4>
            <div className="shop-container">
                <div className="review-container">
                    {
                        cart.map(product => <Review key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}
                        ></Review>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                        handleClearCart={handleClearCart}>
                            
                            <Link  className='proceed-btn' to='/checkout'>
                                <button >Proceed Checkout</button>
                            </Link>
                        </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;