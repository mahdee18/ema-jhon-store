import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Review.css'
const Review = ({ product,handleRemoveFromCart }) => {
    const { name, id, img, quantity, price } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="details">
                <h5>{name}</h5>
                <p>Price: <span className='text-orange'> ${price}</span></p>
                <p>Quantity: <span className='text-orange'> {quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn btn-delete'> <FontAwesomeIcon className='delete' icon={faTrashAlt} /></button>
            
        </div>
    );
};

export default Review;