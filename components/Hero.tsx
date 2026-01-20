'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 动态背景层 - 视差效果 */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
        {/* 视频背景（降级为图片） */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-dark/70 to-transparent z-10" />
        <img
          src="https://picsum.photos/seed/yoga-hero/1920/1080"
          alt="瑜伽练习"
          className="w-full h-full object-cover scale-110"
          style={{
            transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`
          }}
        />
      </motion.div>

      {/* 粒子背景层 */}
      <div className="absolute inset-0 z-5">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-brand-accent/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute w-80 h-80 bottom-20 right-20 bg-brand-secondary/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      {/* 内容层 */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-20 text-center text-white px-4 max-w-4xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight"
        >
          发现内心的平静与力量
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-gray-200 font-light"
        >
          在希柏瑜伽，找到属于你的瑜伽之旅
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#courses"
            className="px-8 py-4 bg-brand-accent hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/30"
          >
            立即预约
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-white/50 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
          >
            了解更多
          </a>
        </motion.div>
      </motion.div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70 hover:text-white transition-colors"
        >
          <FaArrowDown className="text-2xl" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;