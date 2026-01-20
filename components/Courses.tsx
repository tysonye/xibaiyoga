'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaFire, FaMoon, FaBaby, FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { courses } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';

const CourseSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return <FaLeaf />;
      case 'fire':
        return <FaFire />;
      case 'moon':
        return <FaMoon />;
      case 'baby':
        return <FaBaby />;
      default:
        return <FaLeaf />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">课程介绍</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择适合你的瑜伽课程
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card glass={true} className="h-full">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                    {getIcon(course.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary text-center mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">{course.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <FaClock className="text-sm text-brand-accent" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <FaUsers className="text-sm text-brand-accent" />
                      <span className="text-sm">{course.capacity}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-sm text-brand-accent" />
                      <span className="text-sm">{course.schedule}</span>
                    </div>
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

export default CourseSection;