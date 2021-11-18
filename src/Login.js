import React, { useState } from 'react'
import origin from './origin1.png';
import './Login.css'
import { Link , useHistory} from 'react-router-dom';
import '/'
import { auth } from './firebase';




function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signin = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email , password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }
    const register = e =>{
        e.preventDefault();
        auth
         .createUserWithEmailAndPassword(email , password)
         .then((auth) => {
            
             if(auth){
                 history.push('/')

             }
         })
         .catch(error => alert(error.message))

    }


    return (
        <div className='login'>
            <Link to='/'> 
            <img className='login_logo' src={origin} alt="" />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                   
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />

                    <button type='submit' className='login_signinbutton' onClick={signin} >Sign In</button>
                </form>
                    <div className='order_container'>
                        <p>Create your account now and have shop now</p>                
                        <button onClick={register} className='login_registerbutton'>CREATE YOUR ACCOUNT NOW</button>
                    </div>
            </div>
        </div>
    )
}

export default Login
