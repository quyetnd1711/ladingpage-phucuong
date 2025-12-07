import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { galleryImages } from '../../data/content';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="section-padding bg-transparent">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-christmas mb-4">
                        Không Gian Nhà Hàng
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Khám phá không gian ấm cúng tại nhà hàng Bánh Tráng Phú Cường
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="gallery-swiper"
                >
                    {galleryImages.map((image) => (
                        <SwiperSlide key={image.id}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-semibold">{image.alt}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedImage}
                        alt="Gallery"
                        className="max-w-full max-h-full object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-christmas-red-500 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                </div>
            )}

            <style>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: #dc2626;
        }
      `}</style>
        </section>
    );
};

export default Gallery;
