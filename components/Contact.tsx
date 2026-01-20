'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">联系我们</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brand-primary">联系方式</h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }} 
                  className="flex items-start"
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">地址</h4>
                    <p className="text-gray-600">北京市朝阳区建国路88号希柏瑜伽馆</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }} 
                  className="flex items-start"
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">电话</h4>
                    <p className="text-gray-600">010-12345678</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }} 
                  className="flex items-start"
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">邮箱</h4>
                    <p className="text-gray-600">info@xibaiyoga.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }} 
                  className="flex items-start"
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <FaClock className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">营业时间</h4>
                    <p className="text-gray-600">周一至周日：6:00 - 21:00</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brand-primary">留言咨询</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <input 
                      type="text" 
                      id="name" 
                      autoComplete="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
                      placeholder="请输入您的姓名" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      autoComplete="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
                      placeholder="请输入您的电话" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    autoComplete="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
                    placeholder="请输入您的邮箱" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
                    placeholder="请输入您的留言内容"
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  提交留言
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;