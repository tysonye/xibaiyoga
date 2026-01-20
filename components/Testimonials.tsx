'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { testimonials } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';

const TestimonialSection = () => {
  // 生成星级评分
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-500" />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">学员评价</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            听听我们学员的真实感受
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card glass={true} className="h-full">
                  <div className="flex items-center gap-2 mb-4 text-yellow-500">
                    {renderStars(testimonial.rating)}
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-600 italic mb-6"
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-accent"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-brand-primary">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">学员</p>
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

export default TestimonialSection;