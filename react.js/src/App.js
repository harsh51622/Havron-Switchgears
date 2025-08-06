import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Photo from './pages/Photo';


function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
              <Route path="/photo" element={<Photo />} />

        
        </Routes>
      </div>
    </>
  );
}

export default App;
