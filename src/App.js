// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Custom Bracelet Store</h1>
        <nav className="nav">
          <a href="#shop" className="nav-item">Shop</a>
          <a href="#custom-bracelets" className="nav-item">Custom Bracelets</a>
          <a href="#about-us" className="nav-item">About Us</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
      </header>
      <section className="hero-section">
        <h2 className="hero-text">Create Your Bracelet</h2>
        <button className="hero-button">Create Yours</button>
      </section>
      <div className="content">
        <div>
          <h3 className="section-title">Shop</h3>
          {/* <img src="your-image-path-1.jpg" alt="Bracelet 1" className="bracelet-image" /> */}
        </div>
        <div>
          <h3 className="section-title">About Us</h3>
          {/* <img src="your-image-path-2.jpg" alt="Bracelet 2" className="bracelet-image" /> */}
        </div>
        <div>
          <h3 className="section-title">Custom Bracelet</h3>
          {/* <img src="your-image-path-3.jpg" alt="Bracelet 3" className="bracelet-image" /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
