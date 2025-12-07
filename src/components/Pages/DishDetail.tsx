import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaStar, FaUtensils, FaClock, FaCheckCircle } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { featuredDishes } from '../../data/content';

const DishDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find dish by ID
    const dish = featuredDishes.find(d => d.id === Number(id));

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!dish) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy món ăn</h2>
                    <Button onClick={() => navigate('/')}>Về Trang Chủ</Button>
                </div>
            </div>
        );
    }

    const handleBack = () => {
        navigate('/');
    };

    const handleOrder = () => {
        navigate('/');
        setTimeout(() => {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#fdfbf7]"
        >
            {/* Navigation Bar */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="container-custom py-4 flex items-center justify-between">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#601f1c] transition-colors font-medium "
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#efebd4] transition-colors">
                            <FaArrowLeft />
                        </div>
                        <span className="hidden md:inline">Quay lại thực đơn</span>
                    </button>
                    <div className="text-xl font-bold text-gradient-christmas truncate max-w-[200px] md:max-w-md">
                        {dish.name}
                    </div>
                    <div className="w-10"></div> {/* Spacer for alignment */}
                </div>
            </div>

            <div className="container-custom py-8 md:py-12">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl sticky top-24"
                    >
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-auto object-cover aspect-[4/3]"
                        />
                        {dish.isBestseller && (
                            <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 z-10">
                                ⭐ Món Bán Chạy Nhất
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Right Column: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100"
                    >
                        {/* Header Info */}
                        <div className="mb-6 border-b border-gray-100 pb-6">
                            <span className="inline-block bg-[#efebd4] text-[#601f1c] px-3 py-1 rounded-full text-sm font-bold mb-3">
                                {dish.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {dish.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-600">
                                <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-lg">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < Math.floor(dish.rating) ? '' : 'text-gray-300'}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-bold text-gray-900">
                                        {dish.rating}/5.0
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <FaClock className="text-[#366e42]" />
                                    <span>Sẵn sàng trong 15p</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <FaUtensils className="text-[#366e42]" />
                                    <span>Tươi ngon mỗi ngày</span>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mb-8 flex items-center justify-between bg-[#fdfbf7] p-4 rounded-2xl border border-[#efebd4]">
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Giá bán</p>
                                <p className="text-4xl font-bold text-[#601f1c]">
                                    {dish.price}
                                </p>
                            </div>
                            <Button
                                size="large"
                                onClick={handleOrder}
                                className="shadow-xl hover:scale-105"
                            >
                                Đặt Món Ngay
                            </Button>
                        </div>

                        {/* Description Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaCheckCircle className="text-[#366e42]" />
                                Giới thiệu món ăn
                            </h3>
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                {dish.detailedDescription || dish.description}
                            </div>
                        </div>

                        {/* Additional Info / Commitments */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#efebd4]/30 p-4 rounded-xl">
                                <h4 className="font-bold text-[#601f1c] mb-2 text-sm uppercase tracking-wide">Nguyên liệu</h4>
                                <p className="text-sm text-gray-700">100% tươi sạch, nhập mới mỗi ngày</p>
                            </div>
                            <div className="bg-[#efebd4]/30 p-4 rounded-xl">
                                <h4 className="font-bold text-[#601f1c] mb-2 text-sm uppercase tracking-wide">Chế biến</h4>
                                <p className="text-sm text-gray-700">Công thức độc quyền, bếp trưởng 5 sao</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default DishDetail;
