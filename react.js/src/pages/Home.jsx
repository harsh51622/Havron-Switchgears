import React from 'react';
import '../styles/global.css';

const Home = () => {
  return (
    <div>
      
      {/* Hero Slider */}
      <div className="hero-slider">
        <div
          className="hero"
          id="hero1"
          style={{ backgroundImage: "url('/IMAGES/google/2-969101.webp')" }}
        ></div>
        <div
          className="hero"
          style={{ backgroundImage: "url('/IMAGES/google/images.jpg')" }}
        ></div>
        <div
          className="hero"
          style={{
            backgroundImage:
              "url('/IMAGES/mcb_coastal_paradise-thiruvidandhai-chennai-mcb_aassetz_builders.avif')",
          }}
        ></div>
        <div
          className="hero"
          style={{ backgroundImage: "url('/IMAGEs/powering-possibilities.jpg')" }}
        ></div>
      </div>

      {/* Products Section */}
      <div class="product p-89 bg-re">
        <h1>OUR PRODUCTS</h1>
        <div className="allclickproducts">
          <button className="mcbs">
            <a href="/items/mcb/mcb.html">
              <img id="cross" src="/SVg/items pencil pohoto/mcb.png" alt="" />
            </a>
          </button>
          <button className="mcbs">
            <a href="/items/doubledoor/double.html">
              <img id="cross" src="/SVG/items pencil pohoto/double door.png" alt="" />
            </a>
          </button>
          <button className="mcbs">
            <a href="/items/capacitor/capacitor.html">
              <img id="cross" src="/SVG/items pencil pohoto/capacitor.png" alt="" />
            </a>
          </button>
          <button className="mcbs">
            <a href="/items/off load changepover/changeover.html">
              <img id="cross" src="/SVG/items pencil pohoto/changeover.png" alt="" />
            </a>
          </button>
          <button className="mcbs">
            <a href="/items/switchgear/switchgear.html">
              <img id="cross" src="/SVG/items pencil pohoto/switchgear.png" alt="" />
            </a>
          </button>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="whychoose">
        <div className="whychooseimage">
          <img src="/IMAGES/why choose us.webp" alt="" />
        </div>

        <div className="whychoosehavron">
          <div className="pchoose">
            <p>
              Havron Electric Technology was a professional circuit breaker supplier and manufacturer
              founded in 2022 Located in D County, Huzhou City, Zhejiang Province.
              <br />
              <br />
              Since its establishment, MAXGE has been professionally oriented...
            </p>
            <h1>Why Choose Maxge</h1>
          </div>

          {/* Choose Points */}
          {[...Array(3)].map((_, i) => (
            <div className="p2choose" key={i}>
              <img src="/SVG/icons8-cross-50.png" alt="" />
              <div className="logochoose">
                <h2>{['Scale Advantage', 'International Certification', 'Environment Friendly'][i]}</h2>
                <p>
                  {
                    [
                      'Maxge owns an 80000+ square meter manufacturing facility...',
                      'Being the leading circuit breaker manufacturer and supplier...',
                      'As a responsible circuit breaker manufacturer we give upmost priority...',
                    ][i]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Factory Photos */}
      <div className="factoryphotos">
        <h1>OUR FACTORY PHOTOS</h1>
        <div className="photosouter">
          <div className="photosfactory">
            <img src="/IMAGES/factory photos/All-Professional-Works-1.jpg" alt="" />
            <img src="/IMAGES/factory photos/All-Professional-Works-4.jpg" alt="" />
            <img src="/IMAGES/factory photos/All-Professional-Works-3.jpg" alt="" />
            <img src="/IMAGES/factory photos/All-Professional-Works-2.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Full Image */}
      <div className="no1">
        <img
          src="/IMAGES/photoseeraj/WhatsApp Image 2025-07-08 at 5.23.19 PM (1).jpeg"
          alt=""
        />
      </div>

      {/* Testimonials */}
      <div className="testimonial">
        <h1>OUR Testimonial</h1>
        <h1>What our client say</h1>
        <div className="allcard">
          <div className="allovers">
            {[...Array(5)].map((_, i) => (
              <div className="card" key={i}>
                <div className="p2">
                  <img src="/IMAGES/images.jpg" alt="" />
                  <div className="logo">
                    <h4>{['Harsh Kumar', 'Anushka', 'Kirti Tiwari', 'Rahul Sachdeva', 'Aman Tyagi'][i]}</h4>
                    <p>One of our client</p>
                  </div>
                </div>
                <div className="writesome">
                  <p>
                    As a responsible circuit breaker manufacturer we give upmost <br /> priority to energy
                    conservation and emission. Our products are <br /> manufactured in compliance with ROHS & REACH Standards
                  </p>
                </div>
                <div className="stars" style={{ marginTop: '13px' }}>
                  {[...Array(5)].map((_, idx) => (
                    <img
                      key={idx}
                      src="/SVG/items pencil pohoto/star.png"
                      alt="star"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="countings">
        <h1 className="greeting-title">GREETING FROM TEAM HAVRON</h1>
        <p className="greeting-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestias...
        </p>
        <div className="counter-container">
          {[
            'Years in Industry',
            'Available in cities',
            'Numbers of products',
            'Customers Network',
            'Dealers Network',
          ].map((label, index) => (
            <div className="counter-item" key={index}>
              <h1 className="counter-box" id={`counter-box${index + 1}`}>
                0
              </h1>
              <h1 className="counter-label">{label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
