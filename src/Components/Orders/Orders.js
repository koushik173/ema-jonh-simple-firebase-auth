import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    const [product,setProduct] = useProduct();
    const [cart, setCart] = useCart(product);

    const handleRemoveProduct=product=>{
        const rest = cart.filter(pd=> pd.id!==product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
        return (
        <div className='shopContainer'>
            <div>
                {
                    cart.map(ct=> <ReviewItem product={ct} key={ct.id} 
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='cartContainer'>
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button>Inventory</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;