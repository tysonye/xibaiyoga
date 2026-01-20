import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Gallery from '../../components/Gallery';
import Videos from '../../components/Videos';
import Courses from '../../components/Courses';
import OnlineCourses from '../../components/OnlineCourses';
import Teachers from '../../components/Teachers';
import Testimonials from '../../components/Testimonials';
import BookingForm from '../../components/BookingForm';
import Membership from '../../components/Membership';
import Contact from '../../components/Contact';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white font-sans">
      <h1 className="sr-only">希柏瑜伽 | 专业瑜伽课程与培训</h1>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Videos />
      <Courses />
      <OnlineCourses />
      <Teachers />
      <Testimonials />
      <BookingForm />
      <Membership />
      <Contact />
      <footer className="bg-gray-800 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">希柏瑜伽</h3>
              <p className="text-gray-400">专注于提供高品质的瑜伽教学，帮助您达到身心平衡。提供哈他瑜伽、阿斯汤加、阴瑜伽、孕妇瑜伽等多种课程。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">首页</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">关于瑜伽</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">照片展示</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">线下课程</a></li>
                <li><a href="#online-courses" className="hover:text-white transition-colors">在线课程</a></li>
                <li><a href="#teachers" className="hover:text-white transition-colors">导师团队</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2 text-gray-400">
                <li>北京市朝阳区建国路88号</li>
                <li>010-12345678</li>
                <li>info@xibaiyoga.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">营业时间</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>周一至周五：06:00 - 21:00</li>
                <li>周六至周日：08:00 - 20:00</li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white transition-colors">微信</a>
                  <a href="#" className="hover:text-white transition-colors">微博</a>
                  <a href="#" className="hover:text-white transition-colors">抖音</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© {currentYear} 希柏瑜伽. 保留所有权利. <a href="#" className="hover:text-white transition-colors">隐私政策</a> | <a href="#" className="hover:text-white transition-colors">服务条款</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
