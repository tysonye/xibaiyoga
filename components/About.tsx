'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBrain, FaSpa } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">关于瑜伽</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索瑜伽的深层含义与益处
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧图片 */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/yoga-about/800/600"
                alt="瑜伽练习"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* 右侧内容 */}
          <div className="space-y-8">
            <ScrollReveal delay={0.4}>
              <div>
                <h3 className="text-2xl font-semibold text-brand-primary mb-4">瑜伽的起源与发展</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  瑜伽起源于古印度，已有五千年的历史。它是一种身心锻炼的艺术，通过体式（Asana）、呼吸控制（Pranayama）和冥想（Dhyana），帮助人们达到身心平衡与和谐。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  瑜伽一词源于梵语"Yoga"，意为"连接"或"统一"，代表着身心灵的完美结合。在古代，瑜伽是印度哲学的重要组成部分，通过修行帮助人们实现自我觉醒和精神解脱。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  在现代社会，瑜伽已成为一种流行的健身方式，不仅能够增强体质，还能缓解压力，提升专注力，改善睡眠质量。它超越了简单的身体锻炼，成为一种全面的生活方式。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div>
                <h3 className="text-2xl font-semibold text-brand-primary mb-4">瑜伽的益处</h3>
                <div className="space-y-4">
                  {/* 身体健康 */}
                  <motion.div 
                    whileHover={{ x: 10 }} 
                    className="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-md"
                  >
                    <h4 className="text-lg font-medium text-brand-primary flex items-center gap-2">
                      <FaHeartbeat className="text-brand-accent" /> 身体健康
                    </h4>
                    <p className="text-gray-600 mt-2">
                      增强柔韧性、力量和平衡能力；改善心血管健康；缓解慢性疼痛；增强免疫系统功能；促进消化和代谢。
                    </p>
                  </motion.div>

                  {/* 心理健康 */}
                  <motion.div 
                    whileHover={{ x: 10 }} 
                    className="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-md"
                  >
                    <h4 className="text-lg font-medium text-brand-primary flex items-center gap-2">
                      <FaBrain className="text-brand-accent" /> 心理健康
                    </h4>
                    <p className="text-gray-600 mt-2">
                      缓解压力和焦虑；改善情绪和抑郁症状；提升专注力和记忆力；增强自我意识和自信心；促进良好的睡眠质量。
                    </p>
                  </motion.div>

                  {/* 心灵成长 */}
                  <motion.div 
                    whileHover={{ x: 10 }} 
                    className="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-md"
                  >
                    <h4 className="text-lg font-medium text-brand-primary flex items-center gap-2">
                      <FaSpa className="text-brand-accent" /> 心灵成长
                    </h4>
                    <p className="text-gray-600 mt-2">
                      培养冥想和正念习惯；增强内在平静和幸福感；提升自我认知和直觉；促进精神觉醒和自我实现；建立与自然和宇宙的连接。
                    </p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <div>
                <h3 className="text-2xl font-semibold text-brand-primary mb-4">希柏瑜伽的理念</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  希柏瑜伽致力于为每一位学员提供专业、舒适的瑜伽练习环境。我们的导师团队拥有丰富的教学经验，能够根据不同学员的需求，制定个性化的练习计划。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  我们相信，瑜伽是一种适合所有人的练习，无论年龄、性别、身体条件如何，都能从瑜伽中受益。我们的目标是帮助每一位学员发现内心的平静与力量，实现身心灵的和谐统一。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;