import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">zRad Services</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('faq')} className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            FAQ
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
          <button 
            onClick={toggleDarkMode} 
            className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode} 
            className="mr-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="font-medium text-gray-700 dark:text-gray-200 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="font-medium text-gray-700 dark:text-gray-200 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="font-medium text-gray-700 dark:text-gray-200 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="font-medium text-gray-700 dark:text-gray-200 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;