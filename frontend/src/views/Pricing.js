import React from 'react';
import NavBar from '../components/NavBar';
import PricesAlter from '../components/PricesAlter';
import { services } from '../services/pricing.js';

const Pricing = () => {
    
    return (
        <div className="main-container">
            <NavBar />
            <section className="common-header">
                <div className="inner-header">
                    <h1>Our Pricing</h1>
                </div>
            </section>
            <section className="pricing">
                <div className="main">
                    <PricesAlter data={services}/>
                </div>
            </section>
        </div>
    )
}

export default Pricing;