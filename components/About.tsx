import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">关于瑜伽</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索瑜伽的深层含义与益处
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧图片 */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="瑜伽练习"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 右侧内容 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">瑜伽的起源与发展</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                瑜伽起源于古印度，已有五千年的历史。它是一种身心锻炼的艺术，通过体式（Asana）、呼吸控制（Pranayama）和冥想（Dhyana），帮助人们达到身心平衡与和谐。
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                瑜伽一词源于梵语"Yoga"，意为"连接"或"统一"，代表着身心灵的完美结合。在古代，瑜伽是印度哲学的重要组成部分，通过修行帮助人们实现自我觉醒和精神解脱。
              </p>
              <p className="text-gray-600 leading-relaxed">
                在现代社会，瑜伽已成为一种流行的健身方式，不仅能够增强体质，还能缓解压力，提升专注力，改善睡眠质量。它超越了简单的身体锻炼，成为一种全面的生活方式。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">瑜伽的益处</h3>
              <div className="space-y-4">
                {/* 身体健康 */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-800">
                  <h4 className="text-lg font-medium text-green-800 flex items-center gap-2">
                    <i className="fas fa-heartbeat"></i> 身体健康
                  </h4>
                  <p className="text-gray-600 mt-2">
                    增强柔韧性、力量和平衡能力；改善心血管健康；缓解慢性疼痛；增强免疫系统功能；促进消化和代谢。
                  </p>
                </div>

                {/* 心理健康 */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-800">
                  <h4 className="text-lg font-medium text-green-800 flex items-center gap-2">
                    <i className="fas fa-brain"></i> 心理健康
                  </h4>
                  <p className="text-gray-600 mt-2">
                    缓解压力和焦虑；改善情绪和抑郁症状；提升专注力和记忆力；增强自我意识和自信心；促进良好的睡眠质量。
                  </p>
                </div>

                {/* 心灵成长 */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-800">
                  <h4 className="text-lg font-medium text-green-800 flex items-center gap-2">
                    <i className="fas fa-spa"></i> 心灵成长
                  </h4>
                  <p className="text-gray-600 mt-2">
                    培养冥想和正念习惯；增强内在平静和幸福感；提升自我认知和直觉；促进精神觉醒和自我实现；建立与自然和宇宙的连接。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">希柏瑜伽的理念</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                希柏瑜伽致力于为每一位学员提供专业、舒适的瑜伽练习环境。我们的导师团队拥有丰富的教学经验，能够根据不同学员的需求，制定个性化的练习计划。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们相信，瑜伽是一种适合所有人的练习，无论年龄、性别、身体条件如何，都能从瑜伽中受益。我们的目标是帮助每一位学员发现内心的平静与力量，实现身心灵的和谐统一。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;