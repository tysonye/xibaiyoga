'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { videos } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import { Card } from './ui/Card';

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">视频展示</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            观看专业瑜伽导师的示范
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card glass={true} className="overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl bg-brand-primary/20 h-60 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto text-brand-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-brand-primary font-medium">视频即将上线</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-primary">{video.title}</h3>
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

export default VideoSection;