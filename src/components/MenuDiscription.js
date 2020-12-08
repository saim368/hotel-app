import React, { Component } from 'react';
import File from './download/menu.pdf';

export default class MenuDiscription extends Component {
    render() {
        return (
            <div className= "menu">
                <h1>Dining In</h1>
                <h3>Let's eat finest food in Islamabad</h3>
                <p>Uniting the finest of traditional Pakistani cuisine with culinary concepts from the Middle East and cultures around 
                    the world, Hill Resort Hotel offers a distinctive range of lunch and dinner options from which to choose. 
                    We invite you to explore a diverse variety of gastronomy crafted by a skilled culinary team. <br /> <br />
                    From casual buffet and relaxing bars to signature fine dining, each option showcases 
                    the sophisticated settings and impeccable service that make a stay at Hill Resort Hotel so unique.</p> <br /> <br />
                
                <h2>Click here to download our finest Menu</h2>
                
                <a href={File}>Download Our Menu</a>
            </div>
        )
    }
}
