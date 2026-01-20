'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import SocialShare from './SocialShare';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入您的电话';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入正确的手机号码';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入正确的邮箱地址';
    }

    if (!formData.message.trim()) {
      newErrors.message = '请输入留言内容';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '留言内容至少需要10个字符';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 模拟 API 调用
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({});

      // 3秒后重置提交状态
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('提交失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 清除对应字段的错误信息
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-primary">联系我们</h2>
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
              
              {/* 社交媒体分享 */}
              <SocialShare />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brand-primary">留言咨询</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">提交成功！</h3>
                  <p className="text-green-600">感谢您的留言，我们会尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                            : 'border-gray-300 focus:ring-brand-primary'
                        }`}
                        placeholder="请输入您的姓名" 
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.phone 
                            ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                            : 'border-gray-300 focus:ring-brand-primary'
                        }`}
                        placeholder="请输入您的电话" 
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                          : 'border-gray-300 focus:ring-brand-primary'
                      }`}
                      placeholder="请输入您的邮箱" 
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.message 
                          ? 'border-red-300 focus:ring-red-500 bg-red-50' 
                          : 'border-gray-300 focus:ring-brand-primary'
                      }`}
                      placeholder="请输入您的留言内容"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                  >
                    {isSubmitting ? '提交中...' : '提交留言'}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;