import React, { useEffect, useState } from 'react';
import './MyItem.css'

const MyItem = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('https://lit-brook-59122.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    return (
        <div className='items'>
        {
            inventory.map(inventory => <div className='item-container'
                key={inventory._id}
            >
                <div className="card  col-sm-12 mb-5" style={{width: "18rem"}}>
        <img src={inventory.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{inventory.name}</h5>
          <p className="card-text">{inventory.description}</p>
          <p className="card-text">Price:{inventory.price}</p>
          <p className="card-text">Quantity:{inventory.quantity}</p>
          <p className="card-text">Supplier:{inventory.supplier}</p>
          {/* <button onClick={() => navigateToInventoryDetail(_id)} className='update'>Update</button> */}
      
        </div>
      </div>

            </div>)
        }
    </div>
    );
};

export default MyItem;