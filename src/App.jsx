import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './index.css'; // Import your main stylesheet

const App = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Hero />
            </main>
            <div className="contact-buttons">
                <a href="https://wa.me/919351886506" className="whatsapp-btn">
                    <img src="public/whatsapp.png" alt="WhatsApp" title="WhatsApp" />
                </a>
                <a href="tel:+919351886506" className="call-btn">
                    <img src="public/phone.png" alt="Call" title="Calling" />
                </a>
            </div>
            <Footer />
        </>
    );
};

export default App;