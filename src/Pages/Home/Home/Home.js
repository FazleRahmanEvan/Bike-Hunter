import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Inventory from '../Inventory/Inventory';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Inventory></Inventory>
            <Gallery></Gallery>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;