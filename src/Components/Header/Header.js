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
                <a href="/home">Shop</a>
                <a href="/order">Order </a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;