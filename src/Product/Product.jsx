import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,category,seller,ratings}=props.product
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
            <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;