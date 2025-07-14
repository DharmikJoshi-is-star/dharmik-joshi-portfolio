"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'YouTube', href: '#youtube' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm">
            <img 
              src="/assets/profile/dharmik-profile.jpg" 
              alt="Dharmik Joshi" 
              className="w-full h-full object-cover"
            />
          </div>
          <span><span className="text-blue-500">D</span>harmik <span className="text-blue-500">J</span>oshi</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span 
              className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}
            />
            <span 
              className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span 
              className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden py-4"
            >
              <ul className="flex flex-col space-y-4 px-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}