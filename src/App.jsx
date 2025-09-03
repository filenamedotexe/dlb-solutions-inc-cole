import React, { useState } from 'react';
import { Package, Tag, Truck, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import './App.css';
import logo from './assets/1.png';
import warehouseImage from './assets/Warehouse-worker-clothing.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu state changed to:', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <img src={logo} alt="DLB Solutions INC" className="logo" />
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="tel:888-280-9352" className="phone-btn">(888) 280-9352</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '0',
          right: '0',
          backgroundColor: 'white',
          zIndex: '99999',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          padding: '1rem 0'
        }}>
          <a href="#services" onClick={closeMenu} style={{display: 'block', padding: '1rem 2rem', color: '#333', textDecoration: 'none', borderBottom: '1px solid #eee'}}>Services</a>
          <a href="#about" onClick={closeMenu} style={{display: 'block', padding: '1rem 2rem', color: '#333', textDecoration: 'none', borderBottom: '1px solid #eee'}}>About</a>
          <a href="#contact" onClick={closeMenu} style={{display: 'block', padding: '1rem 2rem', color: '#333', textDecoration: 'none', borderBottom: '1px solid #eee'}}>Contact</a>
          <a href="tel:888-280-9352" onClick={closeMenu} style={{display: 'block', margin: '1rem 2rem', padding: '1rem', backgroundColor: '#000', color: 'white', textDecoration: 'none', borderRadius: '6px', textAlign: 'center'}}>
            📞 (888) 280-9352
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Professional Packaging & Fulfillment Solutions</h1>
          <p>Complete packaging, labeling, and fulfillment services for your business</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get Quote</a>
            <a href="tel:888-280-9352" className="btn-secondary">Call Now</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <Package size={48} />
              <h3>Packaging</h3>
              <p>Professional packaging solutions tailored to your products and brand requirements.</p>
            </div>
            <div className="service-card">
              <Tag size={48} />
              <h3>Labeling</h3>
              <p>Accurate and compliant labeling services that meet industry standards.</p>
            </div>
            <div className="service-card">
              <Truck size={48} />
              <h3>Fulfillment</h3>
              <p>Complete order fulfillment from storage to shipping and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-grid">
            <div className="about-content">
              <h3>Tailored Ecommerce Solutions</h3>
              <p>
                At DLB Solutions INC, we specialize in working with ecommerce businesses to provide 
                comprehensive packaging and fulfillment solutions. We understand that every business 
                has unique needs, which is why we work on a per-project, per-quote basis to deliver 
                customized solutions that fit your specific requirements.
              </p>
              <p>
                Whether you need small-scale packaging services or large-volume fulfillment operations, 
                our experienced team is ready to help your business grow. We handle everything from 
                initial packaging design to final delivery, ensuring your customers receive their 
                orders professionally packaged and on time.
              </p>
              <div className="about-cta">
                <p><strong>Ready to discuss your project?</strong></p>
                <p>Fill out our contact form below and we'll provide you with a detailed quote tailored to your business needs.</p>
                <a href="#contact" className="btn-primary">Get Your Quote</a>
              </div>
            </div>
            <div className="about-image">
              <img src={warehouseImage} alt="Professional warehouse packaging operations" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Want to Work with Us?</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <h4>Address</h4>
                  <p>24121 W Theodore Street<br />Unit 2A<br />Plainfield, IL 60586</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>(888) 280-9352</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:cole@dlbsolutions.com">cole@dlbsolutions.com</a></p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Company" />
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <img src={logo} alt="DLB Solutions INC" className="footer-logo" />
              <p>Professional packaging and fulfillment solutions.</p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>Packaging</li>
                <li>Labeling</li>
                <li>Fulfillment</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p>24121 W Theodore Street, Unit 2A<br />Plainfield, IL 60586</p>
              <p><a href="tel:888-280-9352">(888) 280-9352</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 DLB Solutions INC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
