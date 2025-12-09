import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { featuredDishes } from '../../data/content';

const DishDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Find dish by ID
    const dish = featuredDishes.find(d => d.id === Number(id));

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!dish) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] px-4">
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Không tìm thấy món ăn</h2>
                    <Button onClick={() => navigate('/')}>Về Trang Chủ</Button>
                </div>
            </div>
        );
    }

    const handleBack = () => {
        navigate('/');
    };

    const handleOrder = () => {
        window.location.href = '/#booking';
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#fdfbf7]"
        >
            {/* Sticky Navigation */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
                <div className="container-custom py-2 sm:py-3 flex items-center justify-between gap-2">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-[#601f1c] transition-colors flex-shrink-0"
                    >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#efebd4]">
                            <FaArrowLeft className="text-xs sm:text-sm" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Quay lại</span>
                    </button>
                    <div className="flex-1 mx-2 sm:mx-4 overflow-hidden text-center">
                        <div className="max-w-[150px] sm:max-w-[250px] md:max-w-md mx-auto overflow-hidden">
                            <div className="font-bold text-sm sm:text-base text-[#4d1916] whitespace-nowrap animate-marquee hover:animation-pause">
                                {dish.name}
                            </div>
                        </div>
                    </div>
                    <Button size="small" onClick={handleOrder} className="flex-shrink-0 text-xs sm:text-sm px-2 sm:px-4">
                        Đặt Ngay
                    </Button>
                </div>
            </div>

            {/* Hero Section - Cover Image */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
                <img
                    src={dish.images?.cover || dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 text-white container-custom">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="bg-[#601f1c] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3 inline-block border border-white/20">
                            {dish.category}
                        </span>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight text-white drop-shadow-2xl line-clamp-3 sm:line-clamp-none">
                            {dish.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/90 text-xs sm:text-sm md:text-base">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <FaStar className="text-xs sm:text-sm" /> <span className="font-bold text-white">{dish.rating}</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-xs sm:text-sm" /> <span>15 phút</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="font-bold text-base sm:text-lg md:text-xl text-yellow-400">{dish.price}</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom py-4 sm:py-6 md:py-8 lg:py-12 relative -mt-4 sm:-mt-6 md:-mt-8 z-10 px-3 sm:px-4">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
                    {/* On mobile: stack vertically, on tablet+: side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        {/* Left Content - Info */}
                        <div className="lg:col-span-2 p-4 sm:p-6 md:p-8 lg:p-10 lg:border-r border-gray-100 order-2 lg:order-1">
                            {/* Content */}
                            <div className="min-h-[200px] sm:min-h-[300px]">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 sm:space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg italic border-l-4 border-[#601f1c] pl-3 sm:pl-4 bg-gray-50 py-3 sm:py-4 pr-3 sm:pr-4 rounded-r-lg">
                                        "{dish.description}"
                                    </p>
                                    <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                                        <FaStar className="text-[#366e42]" /> Câu chuyện món ăn
                                    </h3>
                                    <div className="prose prose-sm sm:prose text-gray-600 whitespace-pre-line leading-relaxed sm:leading-loose text-sm sm:text-base text-justify">
                                        {dish.detailedDescription}
                                    </div>

                                    {/* Cam kết - Image */}
                                    {dish.commitmentImage && (
                                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                                            <div
                                                onClick={() => setSelectedImage(dish.commitmentImage!)}
                                                className="cursor-pointer group rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                                            >
                                                <img
                                                    src={dish.commitmentImage}
                                                    alt="Cam kết chất lượng"
                                                    className="w-full rounded-xl sm:rounded-2xl transition-all duration-700 group-hover:scale-[1.02]"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Sidebar - Media Gallery */}
                        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 order-1 lg:order-2">
                            {/* Mobile Order Box - Shows first on mobile */}
                            <div className="lg:hidden bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <div className="text-gray-500 text-xs">Giá đặc biệt</div>
                                        <div className="text-2xl font-bold text-[#601f1c]">{dish.price}</div>
                                    </div>
                                    <Button className="px-6 py-3 text-sm shadow-lg shadow-red-200" onClick={handleOrder}>
                                        ĐẶT BÀN NGAY
                                    </Button>
                                </div>
                            </div>

                            {/* Videos */}
                            {dish.videos && (
                                <div className="space-y-2 sm:space-y-4">
                                    <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg group relative">
                                        {dish.videos.promotional.startsWith('http') ? (
                                            <iframe
                                                src={dish.videos.promotional}
                                                className="w-full h-full"
                                                title="Promotional Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <video
                                                src={dish.videos.promotional}
                                                className="w-full h-full object-cover"
                                                controls
                                                autoPlay
                                                muted
                                                loop
                                            >
                                                Trình duyệt không hỗ trợ video.
                                            </video>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Image Grid */}
                            {dish.images?.gallery && (
                                <div className="space-y-2 sm:space-y-3">
                                    <h4 className="font-bold text-[#366e42] text-xs sm:text-sm uppercase tracking-wide">Ảnh</h4>
                                    <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-3">
                                        {dish.images.gallery.map((img, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedImage(img)}
                                                className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Ảnh ${idx}`}
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2 sm:p-3">
                                                    <span className="text-white text-[10px] sm:text-xs font-semibold">Ảnh {idx + 1}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Hướng dẫn ăn - Infographic */}
                            {dish.infographic && (
                                <div className="space-y-2 sm:space-y-3">
                                    <h4 className="font-bold text-[#366e42] text-xs sm:text-sm uppercase tracking-wide">Hướng dẫn ăn</h4>
                                    <div
                                        onClick={() => setSelectedImage(dish.infographic!)}
                                        className="cursor-pointer group rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                                    >
                                        <img
                                            src={dish.infographic}
                                            alt="Hướng dẫn ăn"
                                            className="w-full rounded-lg sm:rounded-xl transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Desktop Order Box Sticky - Hidden on mobile */}
                            <div className="hidden lg:block bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 mt-6 sm:mt-8 sticky top-24">
                                <div className="text-center mb-3 sm:mb-4">
                                    <div className="text-gray-500 text-xs sm:text-sm">Giá đặc biệt</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-[#601f1c]">{dish.price}</div>
                                </div>
                                <Button className="w-full justify-center py-3 sm:py-4 text-base sm:text-lg shadow-xl shadow-red-200 hover:shadow-red-300" onClick={handleOrder}>
                                    ĐẶT BÀN NGAY
                                </Button>
                                <p className="text-[10px] sm:text-xs text-center text-gray-400 mt-2 sm:mt-3">
                                    *Đặt bàn trước để được giữ chỗ tốt nhất
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Order Bar - Mobile Only */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-3 sm:p-4">
                <div className="container-custom flex items-center justify-between gap-4">
                    <div>
                        <div className="text-gray-500 text-xs">Giá</div>
                        <div className="text-xl sm:text-2xl font-bold text-[#601f1c]">{dish.price}</div>
                    </div>
                    <Button className="flex-1 max-w-[200px] justify-center py-3 text-sm sm:text-base shadow-lg shadow-red-200" onClick={handleOrder}>
                        ĐẶT BÀN NGAY
                    </Button>
                </div>
            </div>

            {/* Bottom Padding for Fixed Bar */}
            <div className="lg:hidden h-20 sm:h-24"></div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Chi tiết"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </motion.div>
    );
};

export default DishDetail;
