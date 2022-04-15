import React from 'react';
import './Hero.css';

import { Link } from 'react-router-dom';
import heroImage from '../../images/hero-image.png';

function Hero() {
  return (
    <section className="hero">
        <div className="hero-content">
            <div className="hero-headline">
                <h1>
                    Good Food.. <br />
                    &nbsp; Fast <span>Delivery..</span>
                </h1>
            </div>

            <div className="hero-subline">
                <p>
                    We Take Care Of Order FullFillment, Collection, Transport, <br />
                    Tracking and Delivery Of Process..
                </p>
            </div>

            <div className="hero-button">
                <Link to="/" className="btn-hero">Sign In</Link>
            </div>
        </div>

        <div className="hero-image">
            <img src={heroImage} alt="" />
        </div>
    </section>
  )
}

export default Hero;