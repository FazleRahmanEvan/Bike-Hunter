import React, { useRef } from 'react';
import './Subscribe.css'
const Subscribe = () => {
    const emailRef = useRef('');

    const handleSubscribe = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        console.log(email);
    }    
    return (
        <div className='text-center  subscribe' onSubmit={handleSubscribe}>
            <input className='input-email' ref={emailRef}  type="email"  placeholder="Enter email" name="" id="" />
            <button className='button'>Subscribe</button>
        </div>
    );
};

export default Subscribe;