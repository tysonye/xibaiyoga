'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaClock, FaCertificate, FaFilter } from 'react-icons/fa';
import { onlineCourses } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';
import { LazyImage } from './ui/LazyImage';

type FilterType = 'all' | 'price-low' | 'price-high' | 'short' | 'long';

const OnlineCourses = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredCourses = useMemo(() => {
    switch (filter) {
      case 'price-low':
        return [...onlineCourses].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...onlineCourses].sort((a, b) => b.price - a.price);
      case 'short':
        return [...onlineCourses].filter((c) => c.lessons <= 10);
      case 'long':
        return [...onlineCourses].filter((c) => c.lessons > 10);
      default:
        return onlineCourses;
    }
  }, [filter]);

  const filterButtons = [
    { key: 'all' as FilterType, label: '全部' },
    { key: 'price-low' as FilterType, label: '价格从低到高' },
    { key: 'price-high' as FilterType, label: '价格从高到低' },
    { key: 'short' as FilterType, label: '10节以内' },
    { key: 'long' as FilterType, label: '10节以上' },
  ];

  return (
    <section id="online-courses" className="py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">在线课程</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            随时随地，享受专业瑜伽指导
          </p>
        </ScrollReveal>

        {/* 筛选器 */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  filter === btn.key
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter === btn.key && <FaFilter className="text-xs" />}
                {btn.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 课程卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.05}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card glass={true} elevated={true} className="h-full overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <LazyImage
                      src={course.image}
                      alt={course.title}
                      width={800}
                      height={600}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-brand-accent text-white font-bold px-4 py-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                      ¥{course.price}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaPlayCircle className="text-sm text-brand-accent" />
                        <span className="text-sm">{course.lessons} 节视频课程</span>
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
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
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