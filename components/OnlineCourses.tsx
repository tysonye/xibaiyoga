'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaClock, FaCertificate } from 'react-icons/fa';
import { onlineCourses } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';

const OnlineCourses = () => {
  return (
    <section id="online-courses" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">在线课程</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            随时随地，享受专业瑜伽指导
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onlineCourses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card glass={true} className="h-full overflow-hidden">
                  <div className="relative">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 right-4 bg-brand-accent text-white font-bold px-4 py-2 rounded-full shadow-lg">
                      ¥{course.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaPlayCircle className="text-sm text-brand-accent" />
                        <span className="text-sm">{course.lessons}节视频课程</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock className="text-sm text-brand-accent" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCertificate className="text-sm text-brand-accent" />
                        <span className="text-sm">完成证书</span>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(45, 90, 61, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-4 rounded-full transition-all duration-300"
                    >
                      立即购买
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;