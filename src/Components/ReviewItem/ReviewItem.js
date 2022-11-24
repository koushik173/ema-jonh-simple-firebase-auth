import { faCircle, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {product,handleRemoveProduct} = props;
    const {name,img,price, shipping, quantity} = product;
    return (
        <div className='reviewContainer'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='reviewDetails' >
                <div className='productItemName'>
                    <p className='productName'title={name}>
                        {name.length >20? name.slice(0,20)+'..':name}
                    </p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>shipping: ${shipping}</small></p>
                    <p><small>quantity: {quantity}</small></p>
                </div>
                <div className='delBtn'>
                    <button onClick={()=>handleRemoveProduct(product)}><FontAwesomeIcon className='deleteIcon' icon={faTrashAlt} /></button>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;