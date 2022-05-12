import React from 'react';
import { Button } from 'bootstrap';
import './Package.css'

const Package = ({bike}) => { 
    const {name,img,description,price,quantity,supplier} = bike;
    return (
        <div class="card col-sm-12" style={{width: "18rem;"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">Price:{price}</p>
          <p class="card-text">Quantity:{quantity}</p>
          <p class="card-text">Supplier Name:{supplier}</p>
          <button>Update</button>
      
        </div>
      </div>
    );
};

export default Package;