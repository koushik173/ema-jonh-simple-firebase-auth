import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const [signInWithEmailAndPassword, user, loading, error] =useSignInWithEmailAndPassword(auth);
    // console.log(user);
    if(user){
        navigate('/home');
    }

    const handleEmailBlur = event=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event=>{
        setPassword(event.target.value)
    }
    const handleUserSignIn = event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
        console.log(user);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-tittle'>login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='emailID' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='passwordID' required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account!</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;