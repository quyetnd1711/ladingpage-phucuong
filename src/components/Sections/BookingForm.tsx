import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import BookingModal from '../UI/BookingModal';

const BookingForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="booking" className="section-padding bg-transparent">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-christmas mb-4">
                        Đặt Bàn Ngay
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Đặt bàn trước để đảm bảo chỗ ngồi tốt nhất cho gia đình bạn trong mùa Giáng Sinh này.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                    >
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-6 bg-christmas-beige-100 rounded-xl">
                                <div className="text-4xl mb-3">📞</div>
                                <h3 className="font-bold text-lg mb-2">Hotline</h3>
                                <p className="text-gray-600">1900 63 65 69</p>
                            </div>
                            <div className="text-center p-6 bg-christmas-beige-100 rounded-xl">
                                <div className="text-4xl mb-3">⏰</div>
                                <h3 className="font-bold text-lg mb-2">Giờ mở cửa</h3>
                                <p className="text-gray-600">10:00 - 22:00</p>
                            </div>
                            <div className="text-center p-6 bg-christmas-beige-100 rounded-xl">
                                <div className="text-4xl mb-3">🎄</div>
                                <h3 className="font-bold text-lg mb-2">Ưu đãi</h3>
                                <p className="text-gray-600">Giảm 30% Combo</p>
                            </div>
                        </div>

                        <Button
                            size="large"
                            onClick={() => setIsModalOpen(true)}
                            className="text-xl px-12 py-6 shadow-christmas"
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

