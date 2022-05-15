import React from 'react';

import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {

            const url = `https://lit-brook-59122.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(inventory => inventory._id !== id);
                    setInventory(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='manage-title text-center mt-4 mb-3'>Manage Inventories</h2>
            <div className='manage'>
                {
                    inventory.map(inventory => <div className='item-container'
                        key={inventory._id}
                    >
                        <div className="card  col-sm-12 mb-5" style={{ width: "18rem" }}>
                            <img src={inventory.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{inventory.name}</h5>
                                <p className="card-text">{inventory.description}</p>
                                <p className="card-text">Price:{inventory.price}</p>
                                <p className="card-text">Quantity:{inventory.quantity}</p>
                                <p className="card-text">Supplier Name:{inventory.supplier}</p>
                                <button onClick={() => handleDelete(inventory._id)} className='update'>Delete</button>

                            </div>
                        </div>

                    </div>)
                }
            </div>
          <div className='text-center mt-5 mb-5'>
          <button className='addnew-button  '><Link className='text-decoration-none text-white ' to="/add">Add Bike</Link></button>
          </div>
        </div>
    );
};

export default ManageInventory;