import React from 'react';
import { memberships } from '../data/siteData';

const MembershipSection = () => {
  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">会员权益</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            成为希柏瑜伽会员，享受专属福利
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((membership) => (
            <div
              key={membership.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                membership.featured ? 'border-2 border-green-800 relative' : 'bg-white'
              }`}
            >
              {membership.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 text-white font-bold px-6 py-2 rounded-full text-sm">
                  推荐
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  {membership.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-green-800">¥{membership.price}</span>
                  <span className="text-gray-600">/{membership.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {membership.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <i className="fas fa-check text-green-600 text-lg"></i>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  membership.featured
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-green-800 text-white hover:bg-green-700'
                }`}>
                  立即加入
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;