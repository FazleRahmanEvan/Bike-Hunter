import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <section className='container mt-5 mb-5'>
                <h1 className='text-center bike-title mt-3 mb-5'>Bike Gallery</h1>
             <div className='gallery'>
             <div className="card  ">
                    <img src="https://i.ibb.co/7ygxqWv/bike1.png" alt="" />
                  
                </div>
             <div className="card  ">
                    <img src="https://i.ibb.co/ZXDSjbZ/bike2.png" alt="" />
                  
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/p0qpp5p/bike3.png" alt="" />
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/cvQWsXM/bike4.png" alt="" />
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/r3nfwD8/bike5.png" alt="" />
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/b6MTzm3/bike6.png" alt="" />
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/8MQnbWN/bike7.png" alt="" />
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/QYwpKF7/bike8.png" alt="" />
                </div>
             <div className="card ">
                    <img src="https://i.ibb.co/5KCDGMC/bike9.png" alt="" />
                </div>
             </div>
            
                
            </section>
        </div>
    );
};

export default Gallery;