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
                className={index < rating ? 'text-christmas-gold-500' : 'text-gray-300'}
            />
        ));
    };

    return (
        <section id="reviews" className="section-padding bg-transparent">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-christmas mb-4">
                        Khách Hàng Nói Gì
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hàng nghìn khách hàng hài lòng đã trải nghiệm dịch vụ tại Phú Cường
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="reviews-swiper pb-12"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <Card className="h-full">
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                            loading="lazy"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                                            <div className="flex gap-1 mt-1">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 italic mb-4">
                                        "{review.comment}"
                                    </p>

                                    <p className="text-sm text-gray-400">
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
        }
      `}</style>
        </section>
    );
};

export default Reviews;
