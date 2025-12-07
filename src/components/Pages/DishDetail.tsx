import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { featuredDishes } from '../../data/content';

const DishDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'info'>('info');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                <div className="container-custom py-3 flex items-center justify-between">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#601f1c] transition-colors flex-shrink-0"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#efebd4]">
                            <FaArrowLeft className="text-sm" />
                        </div>
                        <span className="text-sm font-semibold hidden md:inline">Quay lại</span>
                    </button>
                    <div className="flex-1 mx-4 overflow-hidden text-center">
                        <div className="max-w-[250px] md:max-w-md mx-auto overflow-hidden">
                            <div className="font-bold text-[#4d1916] whitespace-nowrap animate-marquee hover:animation-pause">
                                {dish.name}
                            </div>
                        </div>
                    </div>
                    <Button size="small" onClick={handleOrder} className="flex-shrink-0">Đặt Ngay</Button>
                </div>
            </div>

            {/* Hero Section - Cover Image */}
            <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
                <img
                    src={dish.images?.cover || dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white container-custom">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="bg-[#601f1c] text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block border border-white/20">
                            {dish.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-2xl">
                            {dish.name}
                        </h1>
                        <div className="flex items-center gap-4 text-white/90 text-sm md:text-base">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <FaStar /> <span className="font-bold text-white">{dish.rating}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                                <FaStar /> <span>15 phút</span>
                            </div>
                            <span>•</span>
                            <div className="font-bold text-xl text-yellow-400">{dish.price}</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom py-8 md:py-12 relative -mt-8 z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px]">
                    <div className="grid lg:grid-cols-3 gap-0">
                        {/* Left Content - Tabs & Info */}
                        <div className="lg:col-span-2 p-6 md:p-10 border-r border-gray-100">
                            {/* Content */}
                            <div className="min-h-[300px]">
                                {activeTab === 'info' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                        <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-[#601f1c] pl-4 bg-gray-50 py-4 pr-4 rounded-r-lg">
                                            "{dish.description}"
                                        </p>
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <FaStar className="text-[#366e42]" /> Câu chuyện món ăn
                                        </h3>
                                        <div className="prose text-gray-600 whitespace-pre-line leading-loose">
                                            {dish.detailedDescription}
                                        </div>

                                        {/* Commitments */}
                                        {dish.commitments && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                                                {dish.commitments.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#efebd4]/30">
                                                        <div className="text-[#366e42] mt-1 text-lg">
                                                            <FaCheckCircle />
                                                        </div>
                                                        <span className="text-sm font-semibold text-gray-800">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Right Sidebar - Media Gallery */}
                        <div className="bg-gray-50 p-6 md:p-8 space-y-6">



                            {/* Videos */}
                            {dish.videos && (
                                <div className="space-y-4">
                                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg group relative">
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
                                    <div className="text-xs text-gray-500 text-center"></div>
                                </div>
                            )}

                            {/* Image Grid */}
                            {dish.images?.gallery && (
                                <div className="space-y-3">
                                    <h4 className="font-bold text-[#366e42] text-sm uppercase tracking-wide">Ảnh</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {dish.images.gallery.map((img, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedImage(img)}
                                                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Ảnh ${idx}`}
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                                                    <span className="text-white text-xs font-semibold">Ảnh {idx + 1}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Hướng dẫn ăn - Infographic */}
                            {dish.infographic && (
                                <div className="space-y-3">
                                    <h4 className="font-bold text-[#366e42] text-sm uppercase tracking-wide"></h4>
                                    <div
                                        onClick={() => setSelectedImage(dish.infographic!)}
                                        className="cursor-pointer group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                                    >
                                        <img
                                            src={dish.infographic}
                                            alt="Hướng dẫn ăn"
                                            className="w-full rounded-xl transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Order Box Sticky */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 sticky top-24">
                                <div className="text-center mb-4">
                                    <div className="text-gray-500 text-sm">Giá đặc biệt</div>
                                    <div className="text-3xl font-bold text-[#601f1c]">{dish.price}</div>
                                </div>
                                <Button className="w-full justify-center py-4 text-lg shadow-xl shadow-red-200 hover:shadow-red-300" onClick={handleOrder}>
                                    ĐẶT BÀN NGAY
                                </Button>
                                <p className="text-xs text-center text-gray-400 mt-3">
                                    *Đặt bàn trước để được giữ chỗ tốt nhất
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Chi tiết"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </motion.div>
    );
};

export default DishDetail;
