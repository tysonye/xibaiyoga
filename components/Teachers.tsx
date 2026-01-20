'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { teachers } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';

const TeacherSection = () => {
  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">专业导师团队</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            拥有丰富经验的瑜伽导师，为您提供专业指导
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <ScrollReveal key={teacher.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card glass={true} className="h-full overflow-hidden">
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-primary mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-brand-accent font-medium mb-4">{teacher.title}</p>
                    <p className="text-gray-600 mb-4">{teacher.description}</p>
                    <div className="space-y-2">
                      {teacher.certificates.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600">
                          <FaCertificate className="text-sm text-brand-primary" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
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

export default TeacherSection;