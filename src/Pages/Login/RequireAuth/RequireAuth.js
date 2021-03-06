import { async } from '@firebase/util';
import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const[user,loading] = useAuthState(auth);
    const location = useLocation()
    if (loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to ="/login" state={{from:location}} replace/>

    }
    if(user.providerData[0]?.providerId ==='password'  && !user.emailVerified){
        return <div className='text-center mt-4' >
            <h3 className=''>Your Email is not verified!!</h3>
            <h3 className=''>Please verify your email address</h3>
            <button className='btn btn-primary'
             onClick={async() =>{
                 await sendEmailVerification();
                 toast('sent email');
             }}>
               Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;