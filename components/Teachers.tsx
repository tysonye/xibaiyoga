import React from 'react';
import { teachers } from '../data/siteData';

const TeacherSection = () => {
  return (
    <section id="teachers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">专业导师团队</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            拥有丰富经验的瑜伽导师，为您提供专业指导
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-red-600 font-medium mb-4">{teacher.title}</p>
                <p className="text-gray-600 mb-4">{teacher.description}</p>
                <div className="space-y-2">
                  {teacher.certificates.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <i className="fas fa-certificate text-sm text-green-800"></i>
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;