import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name,setName] = useState('');
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const email = user.email;
    const handleNameBlur = event=>{
        setName(event.target.value)
    }
    const handleAddressBlur = event=>{
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event=>{
        setPhone(event.target.value)
    }
    const handleUserSignIn = event=>{
        event.preventDefault();
        const shipping ={name, email, address, phone};
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-tittle'>Shipment Information</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor='text'>Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' id='nameID' required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input value={email} readOnly type="email" name='email' id='emailID' required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='text'>Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' id='addressID' required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='text'>Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name='phone' id='phoneID' required/>
                    </div>                    
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
               
            </div>
        </div>
    );
};

export default Shipment;