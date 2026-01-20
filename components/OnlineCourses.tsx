import React from 'react';
import { onlineCourses } from '../data/siteData';

const OnlineCourses = () => {
  return (
    <section id="online-courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">在线课程</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            随时随地，享受专业瑜伽指导
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onlineCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-full">
                  ¥{course.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <i className="fas fa-play-circle text-sm"></i>
                    <span className="text-sm">{course.lessons}节视频课程</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <i className="fas fa-clock text-sm"></i>
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <i className="fas fa-certificate text-sm"></i>
                    <span className="text-sm">完成证书</span>
                  </div>
                </div>
                <button className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  立即购买
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;