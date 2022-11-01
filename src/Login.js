
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

import './Login.css';
function Login() {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); //this stop the refrech
        //do the login logic 
    auth.signInWithEmailAndPassWord(email, password)
       .then((auth) => {
       //logged in, redirect to homepage
       navigate("/");
       })
       .catch((e) => alert(e.message));
    };


    const register = (event) => {
        event.preventDefault(); //this stop the refrech
        //do the register logic 
    auth.createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            //create user and logged in redirect to homepage
            navigate("/");
         })
         .catch((e) => alert(e.message));
    };
  return (
    <div  className='login'>
        
        <div >
            <Link to="/">
            <img src='http://g-ecx.images-amazon.com/images/G/01/logo/a_com_logo_220x96v2._CB485924063_.jpg' width="200px"/>
            </Link>
        </div>

        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                
                <h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="emial"/>
                <h5>password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type='submit' className='login__signInButton'>Sign in</button>
            </form>
            <p>By Signing-in you agree to Amazon's
                <br/> 
                Conditions of use & sale.Please See
                <br/>  
                 Our Privacy Notice-Based Ads Notice</p>

            <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login