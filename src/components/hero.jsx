import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <h1>YADURAJ TOUR AND TRAVELS</h1>
            <h2 className="subtitle">YADURAJ TOUR AND TRAVELS Neem Ka Thana</h2>
            <div className="hero-content">
                <div className="hero-image">
                    <img decoding="async" width="2560" height="1792" src="/assets/image1.jpg"
                        sizes="(max-width: 2560px) 100vw, 2560px" />
                </div>
                <div className="hero-text">
                    <div className="elementor-widget-container" id="services">
                        <p>Travel together, travel in luxury. At YADURAJ TOUR AND TRAVELS, our <strong>Luxury Tempo
                            Traveller in Neem ka thana </strong> rentals combine everything you need –
                            <strong>comfort, generous space, and in addition to unforgettable group travel experiences.</strong> Whether you’re planning a family getaway, wedding convoy, corporate retreat, or spiritual pilgrimage, our meticulously maintained luxury fleet and skilled drivers ensure <strong>safety, cleanliness, and effortless journeys.We know that when you’re on the road, comfort matters most.</strong>
                        </p>
                        <ul id="about">
                            <li>
                                <p><strong>Spacious Recliner Seating</strong>: Choose from 13 to 17-seater luxury
                                    options in our Tempo Travellers.</p>
                            </li>
                            <li>
                                <p><strong>Full Air-Conditioning</strong>: Travel <strong>in any weather</strong> with
                                    total ease.</p>
                            </li>
                            <li>
                                <p><strong>Polite, Trained Multilingual Drivers</strong>: Our experienced chauffeurs
                                    bring courtesy and professionalism.</p>
                            </li>
                            <li>
                                <p><strong>Spotless &amp; Sanitized</strong>: Hygiene is the heart of our service.</p>
                            </li>
                        </ul>
                    </div>
                    <a href="https://wa.me/919351886506" className="btn-primary" style={{ marginRight: '8px' }}>WhatsApp</a>
                    <a href="tel:+919351886506" className="btn-primary">Call Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;