import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <Features />
      <Workflow />
      <Footer />
    </div>
  );
}