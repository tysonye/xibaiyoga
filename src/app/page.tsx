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
  return (
    <div className="min-h-screen bg-white font-sans">
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">希柏瑜伽</h3>
              <p className="text-gray-400">专注于提供高品质的瑜伽教学，帮助您达到身心平衡。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">关于瑜伽</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">照片展示</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">课程介绍</a></li>
                <li><a href="#online-courses" className="hover:text-white transition-colors">在线课程</a></li>
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
              <p className="text-gray-400">周一至周日：6:00 - 21:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 希柏瑜伽. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
