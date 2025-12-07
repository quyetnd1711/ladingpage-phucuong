import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import HeroBanner from './HeroBanner';
import { heroSlides } from '../../data/content';

const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation
        loop
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroBanner {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #d4a574;
          width: 32px;
          border-radius: 6px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(161, 44, 44, 0.9);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(161, 44, 44, 1);
          transform: scale(1.1);
          box-shadow: 0 10px 30px rgba(161, 44, 44, 0.4);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 36px;
            height: 36px;
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 14px;
          }
          
          .swiper-pagination-bullet-active {
            width: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
