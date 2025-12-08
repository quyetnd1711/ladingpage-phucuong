import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '../UI/Card';
import { reviews } from '../../data/content';

const Reviews: React.FC = () => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`text-xs sm:text-sm ${index < rating ? 'text-christmas-gold-500' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <section id="reviews" className="section-padding bg-transparent">
            <div className="container-custom px-3 sm:px-4 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-christmas mb-3 sm:mb-4">
                        Khách Hàng Nói Gì
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        Hàng nghìn khách hàng hài lòng đã trải nghiệm dịch vụ tại Phú Cường
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        480: { spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="reviews-swiper pb-12"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <Card className="h-full">
                                <div className="p-4 sm:p-5 md:p-6">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                                            loading="lazy"
                                        />
                                        <div>
                                            <h4 className="font-bold text-sm sm:text-base text-gray-900">{review.name}</h4>
                                            <div className="flex gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 italic text-sm sm:text-base mb-3 sm:mb-4 line-clamp-4">
                                        "{review.comment}"
                                    </p>

                                    <p className="text-xs sm:text-sm text-gray-400">
                                        {new Date(review.date).toLocaleDateString('vi-VN')}
                                    </p>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
        .reviews-swiper .swiper-pagination-bullet {
          background: #dc2626;
          width: 8px;
          height: 8px;
        }
        @media (min-width: 640px) {
          .reviews-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
        </section>
    );
};

export default Reviews;
