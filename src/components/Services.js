import React, { Component } from 'react';
import Title from './Title';
import { FaAmbulance, FaHiking, FaShuttleVan, FaStickerMule } from 'react-icons/fa';

export default class Services extends Component {
    state= {
        services: [
            {
                icon: <FaAmbulance />,
                title: 'Free Ambulance Service',
                info: 'We are providing free ambulance service for emergency purposes.'
            },

            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'There are many hilltops in the srrounding of our hotel. We will provide you equipment for hicking as much as you want.'
            },

            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle Service',
                info: 'You want to go for picnic? We provide shuttle service for you to enjoy your trip free of cost.'
            },

            {
                icon: <FaStickerMule />,
                title: 'Free Horse Riding',
                info: 'Do you love horse riding? We provide you Horses from our own stables for free horse riding.'
            }
        ]
    }
    render() {
        return (
            <section className= "services">
                <Title title= 'Services' />
                <div className= "services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className= "service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
