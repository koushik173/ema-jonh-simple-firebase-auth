import React from 'react';
import './Header.css'
import './Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review </a>
                <a href="/manage-invetory">Manage Inventory</a>
                <a href="/login">Login</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;