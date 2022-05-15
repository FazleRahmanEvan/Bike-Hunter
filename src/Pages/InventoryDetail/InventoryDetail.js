import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    let { img, name, description, quantity, supplier } = inventory;

    useEffect(() => {
        const url = `https://lit-brook-59122.herokuapp.com/inventory/${inventoryId}`;


        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])
    const delivered = () => {
        let Remaining = parseFloat(+inventory.quantity) - 1
        let newInventory = { img, name, description, quantity: Remaining, supplier };
        setInventory(newInventory)
        fetch(`https://lit-brook-59122.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(data => {
                toast("Delivered Success")
            })
    }

    const restock = (event) => {
        event.preventDefault();
        let updateQuantity = parseFloat(+inventory.quantity) + parseFloat(event.target.updateQuantity.value);
        let newInventory = { img, name, description, quantity: updateQuantity, supplier }
        setInventory(newInventory)
        fetch(`https://lit-brook-59122.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(data => {
                event.target.reset()
                toast("Restock Success")
            })
    }
    return (
        <div>
            <h2 className='text-center detail-title mt-4 mb-3'>Bike Detail</h2>
            <div className='detail '>
                <div className="card  col-sm-12 mb-5">
                    <img src={inventory.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{inventory.name}</h5>
                        <p className="card-text">{inventory.description}</p>
                        <p className="card-text">Price:{inventory.price}</p>
                        <p className="card-text">Quantity:{inventory.quantity}</p>
                        <p className="card-text">Supplier Name:{inventory.supplier}</p>
                        
                            <button onClick={() => delivered(quantity)} className='update mt-3'>Delivered</button>
                        

                    </div>
                </div>


                <div>
                    <h4 className='restock'>Restock</h4>
                    <form onSubmit={restock} >
                        <p className="quantity"><input name="updateQuantity" type="number" placeholder="Add quantity" /></p>
                        <button className="add-quantity">Add Quantity</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default InventoryDetail;