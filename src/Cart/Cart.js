import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {cart}=props
//    console.log(cart[0].price);

    const total= cart.reduce((res,neww)=>res+neww.price,0)
    const shipCost= cart.reduce((res,neww)=>res+neww.shipping,0)
    const totalTax = (total*0.1).toFixed(2)
    const grandTotal = total+shipCost+totalTax;

    return (
        <div className='cart'>
            <h1>This is cart</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: {total}</p>
            <p>Total Shipping:{shipCost} </p>
            <p>Tax:{totalTax} </p>
            <p>Grand Total:{grandTotal} </p>
            
        </div>
    );
};

export default Cart;