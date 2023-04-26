import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = []
        console.log(storedCart)
        for (const id in storedCart) {
            console.log(id)
            const addedProduct = products.find(product => product.id === id);
            
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            console.log('Added Product',addedProduct)
        }
        setCart(savedCart)
    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = []

        const exists = cart.find(pd => pd.id === product.id)
        if(!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists]
        }

        setCart(newCart)
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} handleClearCart={handleClearCart}>
                    
                    <Link to='/order' className='review-btn'>
                    <button>Review Order</button>
                    </Link>

                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default Shop;