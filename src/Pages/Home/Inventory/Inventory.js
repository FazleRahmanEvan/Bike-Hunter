import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Inventory.css'




const Inventory = () => {
    const [bikes, setBikes] = useState ([]);
   
  
    useEffect( ()=>{
        fetch('http://localhost:5000/inventory')
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
        </div>
    );
};

export default Inventory;
