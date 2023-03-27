import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,category,seller,ratings}=props.product
    const handleAddToCart= props.handleAddToCart
    return (
        <div> 
            <div className="card">
             <div className="card-text">
                <img src={img}/>
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <p>Manufacturer: {category}</p>
                <p>Ratings: {ratings}</p>
             </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            </div>
        </div>
    );
};

export default Product;