import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Package.css'

const Package = ({bike}) => { 
    const {id,name,img,description,price,quantity,supplier} = bike;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {

      navigate(`/inventory/${id}`);
    }
    return (
        <div className="card  col-sm-12 mb-5" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price:{price}</p>
          <p className="card-text">Quantity:{quantity}</p>
          <p className="card-text">Supplier Name:{supplier}</p>
          <button onClick={() => navigateToInventoryDetail(id)} className='update'>Update</button>
      
        </div>
      </div>
    );
};

export default Package;