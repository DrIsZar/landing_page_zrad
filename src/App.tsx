import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import VariantPage from './pages/VariantPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'zRad Services | Premium Tools at Student Prices';
    
    // Add CSS for background grid pattern
    const style = document.createElement('style');
    style.textContent = `
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServicePage />} />
            <Route path="/service/:serviceId/variant/:variantId" element={<VariantPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;