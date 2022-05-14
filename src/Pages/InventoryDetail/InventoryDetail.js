import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} =useParams();
    const [inventory, setInventory]= useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));

    }, [])
    return (
        <div>
            <h2>Bike Detail:{inventory.name}</h2>
           <div className='text-center'>
           <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
           </div>
        </div>
    );
};

export default InventoryDetail;