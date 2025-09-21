import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
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
                    <img src="/whatsapp.png" alt="WhatsApp" title="WhatsApp" />
                </a>
                <a href="tel:+919351886506" className="call-btn">
                    <img src="/phone.png" alt="Call" title="Calling" />
                </a>
            </div>
            <Footer />
        </>
    );
};

export default App;