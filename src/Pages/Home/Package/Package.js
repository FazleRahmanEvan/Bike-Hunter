import React from 'react';

import './Package.css'

const Package = ({bike}) => { 
    const {name,img,description,price,quantity,supplier} = bike;
    return (
        <div className="card  col-sm-12 mb-5" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price:{price}</p>
          <p className="card-text">Quantity:{quantity}</p>
          <p className="card-text">Supplier Name:{supplier}</p>
          <button className='update'>Update</button>
      
        </div>
      </div>
    );
};

export default Package;