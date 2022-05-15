import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} =useParams();
    const [inventory, setInventory]= useState({});

    useEffect( () =>{
        const url = `https://lit-brook-59122.herokuapp.com/inventory/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));

    }, [])
    return (
        <div>
            <h2>Bike Detail</h2>
         
        </div>
    );
};

export default InventoryDetail;