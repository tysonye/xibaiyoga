'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { testimonials } from '../data/siteData';
import { Card } from './ui/Card';
import ScrollReveal from './ScrollReveal';
import { LazyImage } from './ui/LazyImage';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">学员评价</h2>
          <p className="text-lg text-gray-600">听听我们学员的真实感受</p>
        </ScrollReveal>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card glass={true} elevated={true} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-brand-accent">
                    <LazyImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-4 text-brand-accent">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {testimonial.rating % 1 !== 0 && <span>½</span>}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-brand-primary">{testimonial.name}</h4>
                    <span className="text-sm text-gray-500">学员</span>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;