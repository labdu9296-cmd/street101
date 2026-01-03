
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedItems from './components/FeaturedItems';
import MenuCTA from './components/MenuCTA';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16 md:py-24 bg-gray-900">
          <About />
        </section>
        <section id="featured" className="py-16 md:py-24 bg-gray-800">
          <FeaturedItems />
        </section>
        <section id="menu" className="py-16 md:py-24 bg-gray-900 border-y border-gray-800">
          <MenuCTA />
        </section>
        <section id="services" className="py-16 md:py-24 bg-gray-800">
          <Services />
        </section>
        <section id="location" className="py-16 md:py-24 bg-gray-900">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
