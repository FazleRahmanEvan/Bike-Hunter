import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation();
   
    let from = location.state?.from?.pathname || "/";
    
    const [
        signInWithEmailAndPassword,user,loading] = useSignInWithEmailAndPassword(auth);
        
        if(user){
            navigate(from, {replace:true});
        }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email,password)
        
    }

    const navigateRegister =event =>{
        navigate('/register')
    }
    return (
        
           <div className='container w-25 mx-auto mb-5'>
            <h3 className='login mb-4'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
             
               <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            
            </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
               
                   <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
              </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Check me out" />
             </Form.Group> */}
            <Button variant="primary" type="submit">
              Login
            </Button>
           </Form>
           <p>New To Bike Hunter? <Link to="/register" className='text-primary pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
           <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;