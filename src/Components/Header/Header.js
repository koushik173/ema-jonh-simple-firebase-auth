import React from 'react';
import './Header.css'
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div>
                <Link to="/home">Shop</Link>
                <Link to="/order">Order </Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>

                </div>

            </nav>
        </div>
    );
};

export default Header;