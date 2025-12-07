import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const PromoBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-gradient-to-r from-christmas-red-600 to-christmas-red-700 text-white relative overflow-hidden"
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 text-6xl">🎄</div>
                    <div className="absolute bottom-0 right-1/4 text-6xl">🎁</div>
                </div>

                <div className="container-custom relative py-3 md:py-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 text-center">
                            <p className="text-sm md:text-lg font-bold animate-pulse">
                                🎄 ƯU ĐÃI GIÁNG SINH: GIẢM 30% TẤT CẢ COMBO - ÁP DỤNG ĐẾN 31/12 🎄
                            </p>
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            aria-label="Đóng banner"
                        >
                            <FaTimes className="text-xs md:text-sm" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PromoBanner;
