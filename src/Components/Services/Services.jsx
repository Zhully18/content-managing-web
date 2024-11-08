import React from 'react';
import './Services.css'; 
import { FaExpandAlt, FaLaptopCode } from 'react-icons/fa';
import { IoBuild } from 'react-icons/io5';

const services = [
    {
        title: 'Content Creation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates ',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'Social Media Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates ',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'SEO Content Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates .',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'Content Strategy Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates .',
        icon: <IoBuild />, 
    },
    {
        title: 'Email Marketing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates .',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'Copywriting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates .',
        icon: <IoBuild />, 
    }
];

const Services = () => {
    return (
        <>
            <div className="services">
                <h2 className='f-size font'>Our Services</h2>
            </div>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <button className="expand-btn"><FaExpandAlt /></button> {/* Placeholder icon for expand */}
                    </div>
                ))}
            </div>
        </>
        
    );
};

export default Services;
