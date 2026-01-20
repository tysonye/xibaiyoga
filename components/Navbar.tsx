'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '关于瑜伽', href: '#about' },
    { name: '照片展示', href: '#gallery' },
    { name: '视频展示', href: '#videos' },
    { name: '课程介绍', href: '#courses' },
    { name: '在线课程', href: '#online-courses' },
    { name: '导师团队', href: '#teachers' },
    { name: '学员评价', href: '#testimonials' },
    { name: '会员权益', href: '#membership' },
    { name: '联系我们', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-brand-primary">希柏瑜伽</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white hover:text-brand-accent'}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 focus:outline-none ${scrolled ? 'text-gray-700 hover:text-brand-primary hover:bg-gray-100' : 'text-white hover:text-brand-accent hover:bg-white/20'}`}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-brand-primary hover:bg-gray-100 font-medium transition-colors duration-200 text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.indexOf(link) * 0.05 }}
                role="menuitem"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;