import React from 'react';
import './Header.css'
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div>
                <Link to="/home">Shop</Link>
                <Link to="/order">Order </Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?<Link to="/home"><button onClick={handleSignOut}>SignOut</button></Link>:
                    <Link to="/login">Login</Link>
                }

                </div>

            </nav>
        </div>
    );
};

export default Header;