'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-10"></div>
        <img
          src="https://picsum.photos/seed/yoga-hero/1920/1080"
          alt="瑜伽练习"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 内容 */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          发现内心的平静与力量
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          在希柏瑜伽，找到属于你的瑜伽之旅
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          href="#courses"
          className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          立即预约
        </motion.a>
      </div>

      {/* 向下滚动箭头 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <a
          href="#about"
          className="text-white hover:text-brand-accent transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;