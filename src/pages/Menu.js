import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import MenuDiscription from '../components/MenuDiscription';

function Menu() {
    return (
        <>

        <Hero hero= "menuHero">
            <Banner title= "Our Menu">
                <Link to= "/" className= "btn-primary">Return Home</Link>
            </Banner>
        </Hero>

        <MenuDiscription />

        </>
    )
}

export default Menu
