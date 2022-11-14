import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product,setProduct]= useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    
    const handleAddtoCart= (product)=>{
        const newCart = [...cart ,product]
        setCart(newCart)
    }


    return (
        <div className='shopContainer'>
            <div className='productContainer'>
                {
                    product.map(pd=><Product
                        product={pd}
                        key={pd.id}
                        handleAddtoCart={handleAddtoCart}>
                        </Product>)
                }

            </div>
            <div className='cartContainer' >
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;