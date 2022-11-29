import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css'
import useProduct from '../../hooks/useProduct';
import { Link } from 'react-router-dom';
import { createContext } from 'react';

export const RingContext = createContext('diamond')


const Shop = () => {
    const [product,setProduct] = useProduct();
    const [cart,setCart]=useState([])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart=[];
        for (const id in storedCart) {
            const addedProduct = product.find(pd=>pd.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)

    },[product])
    
    const handleAddtoCart= (selecTedProduct)=>{
        let newCart =[]
        const exists = cart.find(product => product.id===selecTedProduct.id)
        if(!exists){
             selecTedProduct.quantity =1;
             newCart = [...cart ,selecTedProduct]

        }else{
            const rest = cart.filter(product=>product.id !== selecTedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart = [...rest,exists];
        }
        setCart(newCart)
        addToDb(selecTedProduct.id)
    }


    return (
        <RingContext.Provider value='alur ring'>
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
                    <Cart cart={cart}> 
                    <Link to="/order">
                    <button>Review Order</button>
                    </Link>
                    </Cart>
                    
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Shop;