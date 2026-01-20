'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/siteData';
import ScrollReveal from './ScrollReveal';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">照片展示</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            记录瑜伽练习的美好瞬间
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)" }}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-sm font-medium"
                  >
                    {image.alt}
                  </motion.p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;