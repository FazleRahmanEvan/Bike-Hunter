import React from 'react';
import './NotFound.css'
import notFound from '../../../images/notFound.jpg'
const NotFound = () => {
    return (
        <div className='text-center mt-4'>
             <h2 className='sorry'>Sorry</h2>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;