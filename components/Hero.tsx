'use client';
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="瑜伽练习"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 内容 */}
      <div className="relative z-20 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          发现内心的平静与力量
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          在希柏瑜伽，找到属于你的瑜伽之旅
        </p>
        <a
          href="#courses"
          className="inline-block bg-green-800 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          立即预约
        </a>
      </div>

      {/* 向下滚动箭头 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a
          href="#about"
          className="text-white hover:text-green-300 transition-colors duration-200"
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
      </div>
    </section>
  );
};

export default Hero;