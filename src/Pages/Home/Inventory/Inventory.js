import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Package from '../Package/Package';
import './Inventory.css'




const Inventory = () => {
    const [bikes, setBikes] = useState ([]);
   
  
    useEffect( ()=>{
        fetch('https://lit-brook-59122.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setBikes(data));
    }, [])
    return (
        <div id="bikes" className='mt-5'>
            <h1 className=' title  text-center mt-3'>INVENTORY</h1>
           <div className="inventory-container">
           
            {
               bikes.map(bike => <Package
                key={bike._id}
                bike={bike}
                >

                </Package>)
            }
           </div>
           <div className='mange-inventories text-center mt-3 mb-5 '>
               <button className='button-manage '><Link to='/manage' className='text-decoration-none fs-2'>Manage Inventories</Link></button>
           </div>
        </div> 
       
    );
};

export default Inventory;
