import React from 'react';
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='  footer mt-4 text-white w-100 '>
            <p ><small>copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;