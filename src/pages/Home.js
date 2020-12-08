import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeacturedRooms';

const Home = () => {
    return (
        <div>
        <Hero>
            <Banner title= "Luxurious Rooms" subtitle= "Deluxe room starting from 32000 PKR per night">
                <Link to= "/rooms" className= "btn-primary">Our Rooms</Link>
            </Banner>

            <Banner title= "Delicious Meal" subtitle= "starting from 375 PKR">
                <Link to= "/menu" className= "btn-primary">Our Menu</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </div>
    )
}

export default Home;
