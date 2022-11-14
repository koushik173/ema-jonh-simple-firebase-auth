import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {id,img,name,price,ratings,seller}=props.product

    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='productInfo'>
            <p className='productName'>{name}</p>
            <p><b>Price: ${price}</b></p><br />
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
          </div>
          <button onClick={()=>props.handleAddtoCart(props.product)} className='btn-cart'>
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}/>
          </button>
        </div>
    );
};

export default Product;