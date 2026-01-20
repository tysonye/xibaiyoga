'use client';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { memberships } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';

const MembershipSection = () => {
  // 获取所有会员权益，去除重复项
  const allBenefits = Array.from(
    new Set(memberships.flatMap(membership => membership.benefits))
  );

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">会员权益</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            成为希柏瑜伽会员，享受专属福利
          </p>
        </ScrollReveal>

        {/* 会员卡片展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {memberships.map((membership, index) => (
            <ScrollReveal key={membership.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  glass={true} 
                  className={`relative ${membership.featured ? 'border-2 border-brand-primary ring-4 ring-brand-primary/20' : ''}`}
                >
                  {membership.featured && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white font-bold px-6 py-2 rounded-full text-sm shadow-lg"
                    >
                      推荐
                    </motion.div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-brand-primary mb-2">
                      {membership.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-brand-primary">¥{membership.price}</span>
                      <span className="text-gray-600">/{membership.period}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {membership.benefits.map((benefit, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <FaCheck className="text-brand-accent text-lg flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(45, 90, 61, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-300 ${membership.featured ? 'bg-brand-accent text-white hover:bg-brand-accent/90' : 'bg-brand-primary text-white hover:bg-brand-secondary'}`}
                    >
                      立即加入
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* 会员权益对比表 */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-brand-primary text-white text-center">
              <h3 className="text-2xl font-bold mb-2">会员权益对比表</h3>
              <p className="text-white/90">清晰对比不同会员等级的权益</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-brand-light">
                  <tr>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">权益项目</th>
                    {memberships.map((membership) => (
                      <th key={membership.id} className="py-4 px-6 text-center text-brand-primary font-semibold">
                        {membership.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allBenefits.map((benefit, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-4 px-6 text-gray-700">{benefit}</td>
                      {memberships.map((membership) => (
                        <td key={membership.id} className="py-4 px-6 text-center">
                          {membership.benefits.includes(benefit) ? (
                            <FaCheck className="inline text-green-500 text-xl" />
                          ) : (
                            <FaTimes className="inline text-gray-300 text-xl" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MembershipSection;