import React from 'react';
import { useForm } from "react-hook-form";
import './AddBike.css'

const AddBike = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);

        const url= `https://lit-brook-59122.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    };

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='add-bike'>Add Bike</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("SupplierName")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='submit' type="submit" value="Add Bike" />
            </form>
        </div>
    );
};

export default AddBike;