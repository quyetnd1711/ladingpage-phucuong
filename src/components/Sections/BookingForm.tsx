import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import BookingModal from '../UI/BookingModal';

const BookingForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="booking" className="section-padding bg-transparent">
            <div className="container-custom px-3 sm:px-4 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-christmas mb-3 sm:mb-4">
                        Đặt Bàn Ngay
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                        Đặt bàn trước để đảm bảo chỗ ngồi tốt nhất cho gia đình bạn trong mùa Giáng Sinh này.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                            <div className="text-center p-4 sm:p-5 md:p-6 bg-christmas-beige-100 rounded-lg sm:rounded-xl">
                                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">📞</div>
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Hotline</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base">1900 63 65 69</p>
                            </div>
                            <div className="text-center p-4 sm:p-5 md:p-6 bg-christmas-beige-100 rounded-lg sm:rounded-xl">
                                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">⏰</div>
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Giờ mở cửa</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base">10:00 - 22:00</p>
                            </div>
                            <div className="text-center p-4 sm:p-5 md:p-6 bg-christmas-beige-100 rounded-lg sm:rounded-xl">
                                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">🎄</div>
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Ưu đãi</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base">Giảm 30% Combo</p>
                            </div>
                        </div>

                        <Button
                            size="large"
                            onClick={() => setIsModalOpen(true)}
                            className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 shadow-christmas w-full sm:w-auto"
                        >
                            Đặt Bàn Ngay
                            <span className="ml-2">→</span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Booking Modal */}
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default BookingForm;

