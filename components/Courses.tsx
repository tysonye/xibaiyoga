import React from 'react';
import { courses } from '../data/siteData';

const CourseSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return <i className="fas fa-leaf"></i>;
      case 'fire':
        return <i className="fas fa-fire"></i>;
      case 'moon':
        return <i className="fas fa-moon"></i>;
      case 'baby':
        return <i className="fas fa-baby"></i>;
      default:
        return <i className="fas fa-leaf"></i>;
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">课程介绍</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择适合你的瑜伽课程
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                {getIcon(course.icon)}
              </div>
              <h3 className="text-xl font-semibold text-green-800 text-center mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">{course.description}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <i className="fas fa-clock text-sm"></i>
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <i className="fas fa-users text-sm"></i>
                  <span className="text-sm">{course.capacity}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <i className="fas fa-calendar text-sm"></i>
                  <span className="text-sm">{course.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;